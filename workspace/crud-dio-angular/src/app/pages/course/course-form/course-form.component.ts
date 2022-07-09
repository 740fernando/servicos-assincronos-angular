import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  coursesList: Array<Course> = [];

  constructor(private fb: FormBuilder, private courseService: CourseService) { 
    this.courseForm = this.fb.group({
      id: 0,
      curso: '',
      inicio: '',
      fim:'',
      duracao:'',
    })
  }

  ngOnInit() {
    this.getCoursers();
  }

  getCoursers() {
    this.courseService.getCourses().subscribe(response=> {
      this.coursesList = response;
    })
  }

  createCourse(){
    this.courseForm.get('id').patchValue(this.coursesList.length + 1);
    this.courseService.createtCourse(this.courseForm.value).subscribe(result =>{
      console.log(`Curso : &{result.curso} cadastro com sucesso !`)
    })
    console.log(this.courseForm.value)
  }
}
