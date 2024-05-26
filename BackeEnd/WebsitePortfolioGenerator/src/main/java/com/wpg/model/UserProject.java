package com.wpg.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user_project")
public class UserProject {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private long userId;
	private String title;
	private String description;
	private String technologies;
	@Column(name="working_started_date")
	private Date workingStartedDate;
	@Column(name="working_ended_date")
	private Date workingEndedDate;
	@Column(name="created_at")
	private Date createdAt;
	public UserProject() {
		super();
	}
	public UserProject(long id, long userId, String title, String description, String technologies,
			Date workingStartedDate, Date workingEndedDate, Date createdAt) {
		super();
		this.id = id;
		this.userId = userId;
		this.title = title;
		this.description = description;
		this.technologies = technologies;
		this.workingStartedDate = workingStartedDate;
		this.workingEndedDate = workingEndedDate;
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
	public Date getWorkingStartedDate() {
		return workingStartedDate;
	}
	public void setWorkingStartedDate(Date workingStartedDate) {
		this.workingStartedDate = workingStartedDate;
	}
	public Date getWorkingEndedDate() {
		return workingEndedDate;
	}
	public void setWorkingEndedDate(Date workingEndedDate) {
		this.workingEndedDate = workingEndedDate;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	
}
