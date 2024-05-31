package com.wpg.payload;


import java.time.LocalDate;

public class UserProjectDto {
    private long id;
    private long userId;
    private String title;
    private String description;
    private String technologies;
    private LocalDate workingStartedDate;
    private LocalDate workingEndedDate;

    public UserProjectDto() {
        super();
    }
    public UserProjectDto(long id, long userId, String title, String description, String technologies,
                          LocalDate workingStartedDate, LocalDate workingEndedDate) {
        super();
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.workingStartedDate = workingStartedDate;
        this.workingEndedDate = workingEndedDate;
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
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getTechnologies() {
        return technologies;
    }
    public void setTechnologies(String technologies) {
        this.technologies = technologies;
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
}
