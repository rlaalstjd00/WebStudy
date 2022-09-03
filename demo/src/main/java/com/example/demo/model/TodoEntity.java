package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor      // 매개변수 없는 생성자 구현
@AllArgsConstructor     // 모든 멤버변수를 매개변수로 받는 생성자 구현
@Data
public class TodoEntity {
    private String id;
    private String userId;
    private String title;   // todo title
    private boolean done;   // todo 완료 여부
}
