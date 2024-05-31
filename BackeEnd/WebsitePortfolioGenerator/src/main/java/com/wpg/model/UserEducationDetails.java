package com.wpg.model;

import java.time.LocalDate;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user_education_details")
public class UserEducationDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="userd_id")
	private long userId;
	private String course;
	private String university;
	@Column(name="course_started_date", columnDefinition = "date")
	private LocalDate courseStartedDate;
	@Column(name="course_ended_date", columnDefinition = "date")
	private LocalDate courseEndedDate;
	@Column(name="is_present")
	private int isPresent;
	@Column(name="created_at")
	private Date createdAt;

	public UserEducationDetails() {
		super();
	}
	public UserEducationDetails(long id, long userId, String course, String university, LocalDate courseStartedDate,
			LocalDate courseEndedDate, int isPresent, Date createdAt) {
		super();
		this.id = id;
		this.userId = userId;
		this.course = course;
		this.university = university;
		this.courseStartedDate = courseStartedDate;
		this.courseEndedDate = courseEndedDate;
		this.isPresent = isPresent;
		this.createdAt = createdAt;
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
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	
}
