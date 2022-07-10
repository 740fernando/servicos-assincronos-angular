import { Course } from './../../../models/course';
import { CourseService } from './../../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  coursesList: Array<Course> = [];
  courseId: any = '';

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
      if(this.courseId !== null) {
        this.courseService.getCourse(this.courseId).subscribe(result => {
          this.courseForm.patchValue({
            id: result[0].id,
            curso: result[0].curso,
            inicio: result[0].inicio,
            fim: result[0].fim,
            duracao: result[0].duracao,
          })
        })
      }
    })

    this.getCourses();
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
    },(error)=>{

    },()=>{
      this.router.navigate(['/']);
    })
  }

  updateCourse(){
    this.courseService.updateCourse(this.courseId, this.courseForm.value).subscribe(result =>{
      console.log('curso autalizado', result);
    },(error)=>{

    },()=>{
      this.router.navigate(['/']);
    })
  }

  actionButton() {
    if(this.courseId !== null) {
      this.updateCourse()
    }else {
      this.createCourse()
    }
  }
}
