package com.wpg.utils;

import com.wpg.model.UserEducationDetails;
import com.wpg.payload.UserEducationDto;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

public class UserEducationMapper {
    private static final ModelMapper modelMapper;

    static {
        modelMapper = new ModelMapper();
    }

    public static List<UserEducationDto> userEducationToUserEducationDto(List<UserEducationDetails> educationDetailsList){
        return educationDetailsList.stream().map(e -> modelMapper.map(e, UserEducationDto.class)).collect(Collectors.toList());
    }

    public static List<UserEducationDetails> userEducationDtoToUserEducation(List<UserEducationDto> educationDtos){
        return educationDtos.stream().map(e -> modelMapper.map(e, UserEducationDetails.class)).collect(Collectors.toList());
    }

}
