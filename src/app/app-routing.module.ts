import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/list', component: UsersComponent },
  // { path: 'users/:username', component: UserComponent } Pegando informação via Param
  { path: 'users/details', component: UserComponent } // pegando informação via Query param
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
