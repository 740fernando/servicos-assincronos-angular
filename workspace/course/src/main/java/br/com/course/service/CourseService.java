package br.com.course.service;

import java.util.List;

import br.com.course.model.Course;

public interface CourseService {

	List<Course> findAll();
	Course searchForId(String id);
	Course createCourse(Course request);
	Course deleteCourse(String id);
	Course update(Course request);
}
