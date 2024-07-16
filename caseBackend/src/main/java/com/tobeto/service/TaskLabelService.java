package com.tobeto.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.tobeto.dto.task.ResponseTask;
import com.tobeto.entity.Label;
import com.tobeto.entity.Task;
import com.tobeto.entity.TaskLabels;
import com.tobeto.repository.LabelRepository;
import com.tobeto.repository.TaskLabelRepository;
import com.tobeto.repository.TaskRepository;

@Service
public class TaskLabelService {

	@Autowired
	@Qualifier("responseMapper")
	private ModelMapper mapper;

	@Autowired
	private TaskLabelRepository repository;

	@Autowired
	private LabelRepository labelRepository;

	@Autowired
	private TaskRepository taskRepository;

	public void assignLabelToTask(int taskId, int labelId) {

		Task task = taskRepository.findById(taskId).get();
		Label label = labelRepository.findById(labelId).get();

		TaskLabels taskLabel = new TaskLabels();
		taskLabel.setTask(task);
		taskLabel.setLabel(label);

		task.getTaskLabels().add(taskLabel);
		label.getTaskLabels().add(taskLabel);

		repository.save(taskLabel);
	}

	public List<Label> getLabels(int taskId) {
		Task task = taskRepository.findById(taskId).get();
		return task.getTaskLabels().stream().filter(t -> t.getTask().getId() == taskId).map(TaskLabels::getLabel)
				.collect(Collectors.toList());
	}

	// label id ile responsetask(list) dto return ediyoruz
	// ayrıca modelmapper ile mapping yapıyoruz
	public List<ResponseTask> getTasks(int labelId) {
		Label label = labelRepository.findById(labelId).get();
		List<Task> tasks = label.getTaskLabels().stream().filter(l -> l.getLabel().getId() == labelId)
				.map(TaskLabels::getTask).collect(Collectors.toList());

		List<ResponseTask> responseTasks = tasks.stream().map(task -> mapper.map(task, ResponseTask.class))
				.collect(Collectors.toList());

		return responseTasks;
	}
}
