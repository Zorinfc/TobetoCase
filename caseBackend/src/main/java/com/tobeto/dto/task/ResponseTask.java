package com.tobeto.dto.task;

import java.time.LocalDate;

import com.tobeto.enums.Status;

import lombok.Data;

@Data
public class ResponseTask {

	private String title;
	private String description;
	private LocalDate creationDate;
	private Status status;
}
