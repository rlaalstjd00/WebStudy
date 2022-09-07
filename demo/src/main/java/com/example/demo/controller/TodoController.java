package com.example.demo.controller;

import com.example.demo.dto.ResponseDTO;
import com.example.demo.dto.TodoDTO;
import com.example.demo.model.TodoEntity;
import com.example.demo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("todo")
public class TodoController {
    private String temporaryUserId = "temporary-user";
    private TodoEntity entity;
    private String error;

    @Autowired
    private TodoService service;

    @GetMapping("/test")
    public ResponseEntity<?> testDTO(){
        String str = service.testService();
        List<String> list = new ArrayList<>();
        list.add(str);
        ResponseDTO<String> response = ResponseDTO.<String>builder().data(list).build();
        return ResponseEntity.ok().body(response);
    }

    @PostMapping
    public ResponseEntity<?> createTodo(@RequestBody TodoDTO dto){
        try {
            entity = TodoDTO.toEntity(dto);
            entity.setId(null);
            // userId를 임시 사용자로 설정 (인증 파트에서 수정)
            entity.setUserId(temporaryUserId);
            List<TodoEntity> entities = service.create(entity);
            return getOkResponseDTO(entities);
        } catch (Exception e) {
            // 예외 처리 error 메시지를 담은 response 객체 반환 (badRequest)
            return getBadRequestResponseDTO(e);
        }
    }

    @GetMapping
    public ResponseEntity<?> retrieveTodoList(){
        List<TodoEntity> entities = service.retrieve(temporaryUserId);
        return getOkResponseDTO(entities);
    }

    @PutMapping
    public ResponseEntity<?> updateTodo(@RequestBody TodoDTO dto){
        entity = TodoDTO.toEntity(dto);
        entity.setUserId(temporaryUserId);
        List<TodoEntity> entities = service.update(entity);
        return getOkResponseDTO(entities);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteTodo(@RequestBody TodoDTO dto){
        try {
            entity = TodoDTO.toEntity(dto);
            entity.setUserId(temporaryUserId);
            List<TodoEntity> entities = service.delete(entity);
            return getOkResponseDTO(entities);
        } catch (Exception e) {
            return getBadRequestResponseDTO(e);
        }
    }

    private static ResponseEntity<ResponseDTO<TodoDTO>> getOkResponseDTO(List<TodoEntity> entities) {
        List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());
        ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();
        return ResponseEntity.ok().body(response);
    }

    private ResponseEntity<ResponseDTO<TodoDTO>> getBadRequestResponseDTO(Exception e) {
        error = e.getMessage();
        ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
        return ResponseEntity.badRequest().body(response);
    }
}
