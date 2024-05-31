package com.wpg.payload;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

public class UserBasicDetailsDto {
    private long id;
    private String name;
    private String email;
    private String mobile;
    private String softSkills;
    private String technicalSkills;
    private String address;
    private String tagline;
    private String summary;


    public UserBasicDetailsDto() {
        super();
    }
    public UserBasicDetailsDto(long id, String name, String email, String mobile, String softSkills, String technicalSkills,
                            String address, String tagline, String summary) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.softSkills = softSkills;
        this.technicalSkills = technicalSkills;
        this.address = address;
        this.tagline = tagline;
        this.summary = summary;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    public String getSoftSkills() {
        return softSkills;
    }
    public void setSoftSkills(String softSkills) {
        this.softSkills = softSkills;
    }
    public String getTechnicalSkills() {
        return technicalSkills;
    }
    public void setTechnicalSkills(String technicalSkills) {
        this.technicalSkills = technicalSkills;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getTagline() {
        return tagline;
    }
    public void setTagline(String tagline) {
        this.tagline = tagline;
    }
    public String getSummary() {
        return summary;
    }
    public void setSummary(String summary) {
        this.summary = summary;
    }
}
