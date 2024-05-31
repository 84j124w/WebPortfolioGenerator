package com.wpg.payload;

import java.time.LocalDate;

public class UserExperienceDto {

    private long id;
    private long userId;
    private String companyName;
    private LocalDate workingStartedDate;
    private LocalDate workingEndedDate;
    private double totalExperience;
    private int isCurrentlyWorking;

    public UserExperienceDto() {
        super();
    }
    public UserExperienceDto(long id, long userId, String companyName, LocalDate workingStartedDate, LocalDate workingEndedDate,
                          double totalExperience, int isCurrentlyWorking) {
        this.id = id;
        this.userId = userId;
        this.companyName = companyName;
        this.workingStartedDate = workingStartedDate;
        this.workingEndedDate = workingEndedDate;
        this.totalExperience = totalExperience;
        this.isCurrentlyWorking = isCurrentlyWorking;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getUserId() {
        return userId;
    }
    public void setUserId(long userId) {
        this.userId = userId;
    }
    public String getCompanyName() {
        return companyName;
    }
    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
    public LocalDate getWorkingStartedDate() {
        return workingStartedDate;
    }
    public void setWorkingStartedDate(LocalDate workingStartedDate) {
        this.workingStartedDate = workingStartedDate;
    }
    public LocalDate getWorkingEndedDate() {
        return workingEndedDate;
    }
    public void setWorkingEndedDate(LocalDate workingEndedDate) {
        this.workingEndedDate = workingEndedDate;
    }
    public double getTotalExperience() {
        return totalExperience;
    }
    public void setTotalExperience(double totalExperience) {
        this.totalExperience = totalExperience;
    }
    public int getIsCurrentlyWorking() {
        return isCurrentlyWorking;
    }
    public void setIsCurrentlyWorking(int isCurrentlyWorking) {
        this.isCurrentlyWorking = isCurrentlyWorking;
    }

}
