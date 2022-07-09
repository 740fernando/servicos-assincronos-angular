import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseFormComponent } from './pages/users/course-form/course-form.component';
import { CourseListComponent } from './pages/users/course-list/course-list.component';


const routes: Routes = [
  { path: '', component: CourseListComponent},
  {path:'form', component: CourseFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
