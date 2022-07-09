import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Array<Course> = [];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(){
    this.courseService.getCourses().subscribe(response =>{
      this.courses = response;
      console.log(this.courses);
    });
  }
  
  deleteCourse(id: number): void {
    this.courseService.deleteCourse(id).subscribe(response => {
      console.log(`Usuario excluido`)
    })
  }
}
