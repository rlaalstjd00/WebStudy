package com.example.demo.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//@Slf4j
//@Component
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//
//    private TokenProvider tokenProvider;
//
//    public JwtAuthenticationFilter(TokenProvider tokenProvider){
//        this.tokenProvider = tokenProvider;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        try{
//            String token = parseBearerToken(request);
//            log.info("Filter is running...");
//
//            if (token != null && !token.equalsIgnoreCase("null")){
//                String userId = tokenProvider.validateAndGetUserId(token);
//                log.info("Authenticated user ID : {}", userId);
//
//                AbstractAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
//                        userId,
//                        null,
//                        AuthorityUtils.NO_AUTHORITIES
//                );
//
//                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//
//                SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
//                securityContext.setAuthentication(authentication);
//                SecurityContextHolder.setContext(securityContext);
//            }
//        } catch (Exception ex){
//            logger.error("Could not set user authentication in security context", ex);
//        }
//
//        filterChain.doFilter(request, response);
//    }
//
//    private String parseBearerToken(HttpServletRequest request){
//        String bearerToken = request.getHeader("Authorization");
//
//        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")){
//            log.info("?????? : {}", bearerToken);
//            return bearerToken.substring(7);
//        }
//        return null;
//    }
//}



@Slf4j
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private TokenProvider tokenProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            // ???????????? ?????? ????????????.
            String token = parseBearerToken(request);
            log.info("Filter is running...");
            // ?????? ????????????. JWT????????? ?????? ????????? ?????? ?????? ????????? ?????? ??????.
            if (token != null && !token.equalsIgnoreCase("null")) {
                // userId ????????????. ?????? ??? ?????? ?????? ?????? ??????.
                String userId = tokenProvider.validateAndGetUserId(token);
                log.info("Authenticated user ID : " + userId );
                // ?????? ??????; SecurityContextHolder??? ???????????? ????????? ??????????????? ????????????.
                AbstractAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userId, // ????????? ???????????? ??????. ???????????? ???????????? ???????????? ?????? ??? ??????. ?????? UserDetails?????? ??????????????? ?????????, ????????? ??? ????????????.
                        null, //
                        AuthorityUtils.NO_AUTHORITIES
                );
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
                securityContext.setAuthentication(authentication);
                SecurityContextHolder.setContext(securityContext);
            }
        } catch (Exception ex) {
            logger.error("Could not set user authentication in security context", ex);
        }

        filterChain.doFilter(request, response);
    }

    private String parseBearerToken(HttpServletRequest request) {
        // Http ????????? ????????? ????????? Bearer ????????? ????????????.
        String bearerToken = request.getHeader("Authorization");

        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}