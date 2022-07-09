import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  courseId: any;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private actRoute : ActivatedRoute,
    private router : Router) { 
    this.courseForm = this.fb.group({
      id: 0,
      curso: '',
      inicio: '',
      fim:'',
      duracao:'',
    })
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.courseId = params.get('id');
      console.log(this.courseId);
      // if(this.courseId !== null) {
      //   this.courseService.getCourses().subscribe(result => {
      //     this.courseForm.patchValue({
      //       id: result[0].id,
      //       nome: result[0].curso,
      //       sobrenome: result[0].inicio,
      //       idade: result[0].fim,
      //       profissao: result[0].duracao,
      //     })
      //   })
      // }
    })
  }

  getCourses() {
    this.courseService.getCourses().subscribe(response=> {
      this.coursesList = response;
    })
  }

  createCourse(){
    this.courseForm.get('id').patchValue(this.coursesList.length + 1);
    this.courseService.createCourse(this.courseForm.value).subscribe(result =>{
      console.log(`Curso : &{result.curso} cadastro com sucesso !`)
    })
    console.log(this.courseForm.value)
  }


  actionButton() {
    if(this.coursesList !== null) {
      this.createCourse()
    }else {
      this.createCourse()
    }
  }
}
