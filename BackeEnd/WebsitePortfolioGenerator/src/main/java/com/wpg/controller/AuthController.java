package com.wpg.controller;

import java.util.Map;

import com.wpg.model.UserBasicDetails;
import com.wpg.payload.JWTAuthResponse;
import com.wpg.jwt.JWTTokenHelper;
import com.wpg.payload.JWTAuthRequest;
import com.wpg.payload.UserDto;
import com.wpg.service.UserBasicDetailsService;
import com.wpg.utils.UserBasicDetailsMapperHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.wpg.model.User;
import com.wpg.repo.UserRepo;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTTokenHelper jwtTokenHelper;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private UserBasicDetailsService userBasicDetailsService;
    
    @PostMapping("/login")
    public ResponseEntity<JWTAuthResponse> loginUser(@RequestBody JWTAuthRequest request) throws Exception {
        String username = request.getUsername();
        String password = request.getPassword();

        this.authenticate(username, password);
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
        String token = jwtTokenHelper.generateToken(userDetails);

        UserBasicDetails basicDetails = userBasicDetailsService.findByEmail(userDetails.getUsername());
        UserDto userDto = UserBasicDetailsMapperHelper.userBasicDetailsToUserDto(basicDetails);


        JWTAuthResponse authResponse = new JWTAuthResponse();
        authResponse.setToken(token);
        authResponse.setUserDto(userDto);

        return new ResponseEntity<JWTAuthResponse>(authResponse, HttpStatus.OK);

    }

    public void authenticate(String username, String password) throws Exception {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        try {
            this.authenticationManager.authenticate(authenticationToken);
        }catch (BadCredentialsException ex){
            System.out.println("Invalid Username or Password");
            throw new Exception("Invalid Username or Password");
        }

    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> user) {
        String email = user.get("email");
        String password = user.get("password");

        System.out.println("Working");
        if (userRepo.existsByUsername(email)) {
            return ResponseEntity.badRequest().body("Username is already taken!");
        }

        User newUser = new User();
        newUser.setUsername(email);
        newUser.setPassword(passwordEncoder.encode(password));
        newUser.setRoles(("ROLE_USER"));

        userRepo.save(newUser);
        return ResponseEntity.ok("User registered successfully!");
    }

}
