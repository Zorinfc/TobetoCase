package com.tobeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tobeto.entity.TaskLabels;

public interface TaskLabelRepository extends JpaRepository<TaskLabels, Integer> {

}
