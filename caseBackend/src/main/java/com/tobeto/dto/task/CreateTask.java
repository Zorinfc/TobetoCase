package com.tobeto.dto.task;

import com.tobeto.enums.Status;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateTask {

	private String title;
	private String description;
	private Status status;
}
