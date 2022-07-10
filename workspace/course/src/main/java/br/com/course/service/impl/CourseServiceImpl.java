package br.com.course.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.course.model.Course;
import br.com.course.repository.CourseRepository;
import br.com.course.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

	private final CourseRepository courseRepository;
	
	public CourseServiceImpl(CourseRepository courseRepository) {
		this.courseRepository = courseRepository;
	}

	@Override
	public List<Course> findAll() {
		return courseRepository.findAll();
	}

	@Override
	public Course searchForId(String id) {
		return courseRepository.findById(id).orElseThrow(()-> new RuntimeException());
	}

	@Override
	public Course createCourse(Course request) {
		return courseRepository.save(request);
	}

	@Override
	public Course deleteCourse(String id) {
		Course courseDeleted = searchForId(id);
		courseRepository.deleteById(id);
		return courseDeleted;
	}

	@Override
	public Course update(Course request) {
		Course courseUpdated = searchForId(request.getId());
		return courseRepository.save(request);
	}
}
