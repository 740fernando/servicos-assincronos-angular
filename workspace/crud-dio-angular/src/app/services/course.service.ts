import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiUrl = "https://sheet.best/api/sheets/7de1f847-5625-4048-9cfd-19225aa9d1d1"

  constructor(private httpClient: HttpClient) { }

  // Retorna a lista de  cursos READ
  getCourses():Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.apiUrl)
  }
}
