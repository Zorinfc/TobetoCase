package com.tobeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tobeto.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {

}
