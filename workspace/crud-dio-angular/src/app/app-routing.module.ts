import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseFormComponent } from './pages/users/course-form/course-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';


const routes: Routes = [
  { path: '', component: UsersListComponent},
  {path:'form', component: CourseFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
