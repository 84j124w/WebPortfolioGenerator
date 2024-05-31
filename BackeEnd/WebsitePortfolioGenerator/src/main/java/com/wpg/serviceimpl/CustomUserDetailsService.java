package com.wpg.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.wpg.model.User;
import com.wpg.repo.UserRepo;

import java.util.Optional;

@Service
@Primary
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepo.findByUsername(username);
        return user.map(CustomUserDetails::new).orElseThrow(() -> new UsernameNotFoundException("User not found: "+username));
    }

    //currently not using, and incomplete
    public User saveUser(User user){
        User user2 = null;
        try{
            user2 = userRepo.save(user);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return user2;
    }
}


