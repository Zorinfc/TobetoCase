package com.tobeto.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@Entity
@ToString(exclude = "taskLabels")
@EqualsAndHashCode(exclude = "taskLabels")
public class Label {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String labelName;

	@OneToMany(mappedBy = "label")
	@JsonIgnore
	private List<TaskLabels> taskLabels;
}

// http://localhost:8080/swagger-ui/index.html