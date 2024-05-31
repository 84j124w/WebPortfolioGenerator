package com.wpg.payload;

import com.wpg.model.UserBasicDetails;

public class JWTAuthResponse {
    private String token;
    private UserDto userDto;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public UserDto getUserDto() {
        return userDto;
    }

    public void setUserDto(UserDto userDto) {
        this.userDto = userDto;
    }
}
