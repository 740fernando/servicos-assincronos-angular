package br.com.course.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.course.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, String> {

}
