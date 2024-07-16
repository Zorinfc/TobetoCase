package com.tobeto.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tobeto.dto.label.CreateLabel;
import com.tobeto.dto.label.GetLabel;
import com.tobeto.dto.task.GetTask;
import com.tobeto.entity.Label;
import com.tobeto.service.LabelService;
import com.tobeto.service.TaskLabelService;

@RestController
@RequestMapping("/api/v1/label")
public class LabelController {

	@Autowired
	private LabelService labelService;

	@Autowired
	private TaskLabelService taskLabelService;

	@Autowired
	@Qualifier("requestMapper")
	private ModelMapper requestMapper;

	@PostMapping("/create")
	public Label createLabel(@RequestBody CreateLabel dto) {

		Label label = requestMapper.map(dto, Label.class);
		return labelService.createLabel(label);
	}

	@PostMapping("/delete")
	public void deleteLabel(@RequestBody GetLabel dto) {
		labelService.deleteLabel(dto);
	}

	// Task id ile task'a ait olan tüm label listesi dönüyor
	@PostMapping("/get")
	public List<Label> getLabels(@RequestBody GetTask dto) {

		return taskLabelService.getLabels(dto.getId());
	}

}
