package com.wpg.utils;

import com.wpg.model.UserProject;
import com.wpg.payload.UserProjectDto;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

public class UserProjectMapper {
    private static final ModelMapper modelMapper;

    static {
        modelMapper = new ModelMapper();
    }

    public static List<UserProject> userProjectDtoToUserProject(List<UserProjectDto> userProjectDtos){
        return userProjectDtos.stream().map(e -> modelMapper.map(e, UserProject.class)).collect(Collectors.toList());
    }

    public static List<UserProjectDto> userProjectToUserProjectDtos(List<UserProject> userProjectList){
        return userProjectList.stream().map(e -> modelMapper.map(e, UserProjectDto.class)).collect(Collectors.toList());
    }
}
