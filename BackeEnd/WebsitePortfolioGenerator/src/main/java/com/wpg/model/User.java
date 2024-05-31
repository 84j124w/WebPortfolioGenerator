package com.wpg.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    private String password;
    private String roles;
    @Column(name="user_basic_details_id")
    private long userBasicDetailId;

    public User() {
        super();
    }

    public User(long id, String username, String password, String roles, long userBasicDetailId) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.roles = roles;
        this.userBasicDetailId = userBasicDetailId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public long getUserBasicDetailId() {
        return userBasicDetailId;
    }

    public void setUserBasicDetailId(long userBasicDetailId) {
        this.userBasicDetailId = userBasicDetailId;
    }
}

