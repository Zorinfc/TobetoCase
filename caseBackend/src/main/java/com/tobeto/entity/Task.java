package com.tobeto.entity;

import java.time.LocalDate;
import java.util.List;

import com.tobeto.enums.Status;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private String description;
	private LocalDate creationDate;

	@Enumerated(EnumType.STRING)
	private Status status;

	@OneToMany(mappedBy = "task")
	private List<TaskLabels> taskLabels;
}
