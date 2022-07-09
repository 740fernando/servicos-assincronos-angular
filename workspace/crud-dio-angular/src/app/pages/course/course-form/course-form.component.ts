import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.courseForm = this.fb.group({
      id: 0,
      curso: '',
      inicio: '',
      fim:'',
      duracao:'',
    })
  }

  ngOnInit() {
  }
  createCourse(){
    
    console.log(this.courseForm.value)
  }
}
