package com.wpg.payload;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

public class UserEducationDto {

    private long id;
    private long userId;
    private String course;
    private String university;
    private LocalDate courseStartedDate;
    private LocalDate courseEndedDate;
    private int isPresent;

	public UserEducationDto() {
        super();
    }
	public UserEducationDto(long id, long userId, String course, String university, LocalDate courseStartedDate,
                            LocalDate courseEndedDate, int isPresent) {
        super();
        this.id = id;
        this.userId = userId;
        this.course = course;
        this.university = university;
        this.courseStartedDate = courseStartedDate;
        this.courseEndedDate = courseEndedDate;
        this.isPresent = isPresent;
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
    public String getCourse() {
        return course;
    }
    public void setCourse(String course) {
        this.course = course;
    }
    public String getUniversity() {
        return university;
    }
    public void setUniversity(String university) {
        this.university = university;
    }
    public LocalDate getCourseStartedDate() {
        return courseStartedDate;
    }
    public void setCourseStartedDate(LocalDate courseStartedDate) {
        this.courseStartedDate = courseStartedDate;
    }
    public LocalDate getCourseEndedDate() {
        return courseEndedDate;
    }
    public void setCourseEndedDate(LocalDate courseEndedDate) {
        this.courseEndedDate = courseEndedDate;
    }
    public int getIsPresent() {
        return isPresent;
    }
    public void setIsPresent(int isPresent) {
        this.isPresent = isPresent;
    }

}
