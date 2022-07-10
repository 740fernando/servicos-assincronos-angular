package br.com.course.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.course.model.Course;
import br.com.course.service.CourseService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value="/course")
public class CourseController {

	private final CourseService courseService;

	public CourseController(CourseService courseService) {
		this.courseService = courseService;
	}
	
	@GetMapping(produces = "application/json")
	public ResponseEntity<?> findAll(){
		return new ResponseEntity<>(courseService.findAll(), HttpStatus.OK);
	}
	
	@GetMapping(value = "id/{id}",produces = "application/json")
	public Course findById(@PathVariable("id")String id){
		return courseService.searchForId(id);
	}
	
	@PostMapping(produces = "application/json",consumes ="application/json")
	@ResponseStatus(HttpStatus.CREATED)
	public Course save(@RequestBody Course course){
		return courseService.createCourse(course);
	}
	
	@PutMapping(value = "id/{id}",produces = "application/json",consumes ="application/json")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public Course update(@RequestBody Course course){
		return courseService.update(course);
	}
	
	@DeleteMapping(value = "id/{id}",produces = "application/json")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public Course delete(@PathVariable("id") String id){
		return courseService.deleteCourse(id);
	}
}
