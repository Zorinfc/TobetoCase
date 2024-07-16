package com.tobeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tobeto.dto.AssignDTO;
import com.tobeto.dto.label.GetLabel;
import com.tobeto.dto.task.CreateTask;
import com.tobeto.dto.task.GetTask;
import com.tobeto.dto.task.ResponseTask;
import com.tobeto.entity.Task;
import com.tobeto.service.TaskLabelService;
import com.tobeto.service.TaskService;

@RestController
@RequestMapping("/api/v1/task")
public class TaskController {

	@Autowired
	private TaskService taskService;

	@Autowired
	private TaskLabelService taskLabelService;

	@PostMapping("/create")
	public Task createTask(@RequestBody CreateTask dto) {

		return taskService.createTask(dto);
	}

	@PostMapping("/delete")
	public void deleteTask(@RequestBody GetTask dto) {
		taskService.removeTask(dto);
	}

	@PostMapping("/assign")
	public void assignLabelToTask(@RequestBody AssignDTO dto) {
		taskLabelService.assignLabelToTask(dto.getTaskId(), dto.getLabelId());
	}

	// Label id ile label'a ait olan tüm taskalar dönüyor
	@PostMapping("/get")
	public List<ResponseTask> getTasks(@RequestBody GetLabel dto) {

		return taskLabelService.getTasks(dto.getId());
	}

}
