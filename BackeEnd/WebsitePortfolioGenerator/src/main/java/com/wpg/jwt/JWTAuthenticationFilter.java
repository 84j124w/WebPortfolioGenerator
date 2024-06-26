package com.wpg.jwt;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JWTAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JWTTokenHelper jwtTokenHelper;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        //1. Get token from request
        String requestToken = request.getHeader("Authorization");
        String username = null;
        String token = null;

        if(requestToken != null && requestToken.startsWith("Bearer")){
            token = requestToken.substring(7); //exclude Bearer from token

            try {
                username = jwtTokenHelper.getUserNameFromToken(token);
            }
            catch (IllegalArgumentException e){
                System.out.println("Unable to get JWT Token");
            }
            catch(ExpiredJwtException e){
                System.out.println("JWT Token has expired");
            }
            catch (MalformedJwtException e){
                System.out.println("Invalid JWT Token");
            }
        }
        else{
            System.out.println("JWT Token not valid or Null");
        }

        //2. Validate Token

        if(username != null && SecurityContextHolder.getContext().getAuthentication() == null){
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if(jwtTokenHelper.validateToken(token, userDetails)){
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
            else{
                System.out.println("Invalid JWT Token");
            }
        }
        else{
            //System.out.println("Username is null or Context is not null");
        }

        filterChain.doFilter(request, response);
    }
}
