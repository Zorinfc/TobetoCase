package com.tobeto.service;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tobeto.dto.task.CreateTask;
import com.tobeto.dto.task.GetTask;
import com.tobeto.entity.Task;
import com.tobeto.repository.TaskRepository;

@Service
public class TaskService {

	@Autowired
	private TaskRepository taskRepository;

	public Task createTask(CreateTask dto) {

		Task task = new Task();
		task.setTitle(dto.getTitle());
		task.setDescription(dto.getDescription());
		task.setCreationDate(LocalDate.now());
		task.setStatus(dto.getStatus());
		return taskRepository.save(task);
	}

	public void removeTask(GetTask dto) {
		// TODO Auto-generated method stub
		Optional<Task> task = taskRepository.findById(dto.getId());
		taskRepository.delete(task.get());
	}

}
