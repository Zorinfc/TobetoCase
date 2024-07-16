package com.tobeto.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tobeto.dto.label.GetLabel;
import com.tobeto.entity.Label;
import com.tobeto.repository.LabelRepository;

@Service
public class LabelService {

	@Autowired
	private LabelRepository labelRepository;

	public Label createLabel(Label label) {
		return labelRepository.save(label);
	}

	public void deleteLabel(GetLabel dto) {
		Optional<Label> label = labelRepository.findById(dto.getId());
		labelRepository.delete(label.get());
	}
}
