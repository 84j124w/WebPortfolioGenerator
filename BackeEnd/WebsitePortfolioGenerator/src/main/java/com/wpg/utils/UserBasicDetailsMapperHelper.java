package com.wpg.utils;

import com.wpg.model.UserBasicDetails;
import com.wpg.payload.UserBasicDetailsDto;
import com.wpg.payload.UserDto;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class UserBasicDetailsMapperHelper {
    private static final ModelMapper modelMapper;

    static {
        modelMapper = new ModelMapper();
    }

    public static UserBasicDetails userBasicDetailsDtoToUserBasicDetails(UserBasicDetailsDto basicDetailsDto){
       return modelMapper.map(basicDetailsDto, UserBasicDetails.class);
    }

    public static UserBasicDetailsDto userBasicDetailsToUserBasicDetailsDto(UserBasicDetails userBasicDetails){
        return modelMapper.map(userBasicDetails, UserBasicDetailsDto.class);
    }

    public static UserDto userBasicDetailsToUserDto(UserBasicDetails userBasicDetails){
        return modelMapper.map(userBasicDetails, UserDto.class);
    }
}
