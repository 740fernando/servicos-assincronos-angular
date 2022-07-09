import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiUrl = "http://localhost:8080/course"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
 
  // Salva curso no banco - CREATE
 createCourse(course : Course):Observable<Course>{
  console.log(course);
  return this.httpClient.post<Course>(this.apiUrl, course, this.httpOptions)
  }
  
  // Retorna a lista de  cursos - READ
   getCourses():Observable<Course[]>{
      return this.httpClient.get<Course[]>(this.apiUrl)
  }

  // Exclui o curso do banco - DELETE
  deleteCourse(id : number):Observable<Course>{
    return this.httpClient.delete<Course>(`${this.apiUrl}/id/${id}`);
  }
}
