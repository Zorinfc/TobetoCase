package com.tobeto.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tobeto.dto.user.UserDTO;
import com.tobeto.entity.User;
import com.tobeto.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {

//	@Autowired
//	private PasswordEncoder encoder;

	@Autowired
	private UserRepository userRepository;

	@Transactional
	public void createUser(UserDTO dto) {
		Optional<User> check = userRepository.findByusername(dto.getUsername());
		User tempUser = new User();
		if (!check.isPresent()) {
			tempUser.setUsername(dto.getUsername());
			tempUser.setPassword(dto.getPassword());
//			tempUser.setPassword(encoder.encode(dto.getPassword()));
			userRepository.save(tempUser);

		}
	}

	public Optional<User> getUserByuserName(String username) {

		return userRepository.findByusername(username);
	}
}
