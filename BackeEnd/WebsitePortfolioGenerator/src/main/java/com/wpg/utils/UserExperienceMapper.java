package com.wpg.utils;

import com.wpg.model.UserExperience;
import com.wpg.payload.UserExperienceDto;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

public class UserExperienceMapper {
    private static final ModelMapper modelMapper;

    static {
        modelMapper = new ModelMapper();
    }

    public static List<UserExperienceDto> userExperienceToUserExperienceDto(List<UserExperience> userExperiences){
        List<UserExperienceDto> userExperienceDtos =userExperiences.stream().map(e -> modelMapper.map(e, UserExperienceDto.class)).collect(Collectors.toList());
        return userExperienceDtos;
    }

    public static List<UserExperience> userExperienceDtoToUserExperience(List<UserExperienceDto> userExperienceDtos){
        List<UserExperience> userExperiences = userExperienceDtos.stream().map(e -> modelMapper.map(e, UserExperience.class)).collect(Collectors.toList());
        return userExperiences;
    }
}
