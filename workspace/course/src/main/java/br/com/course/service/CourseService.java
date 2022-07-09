package br.com.course.service;

import java.util.List;

import br.com.course.model.Course;

public interface CourseService {

	List<Course> findAll();
	Course searchForId(Long id);
	Course createCourse(Course request);
	Course deleteCourse(Long id);
	Course update(Course request);
}
