import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'team',
    component: TeamComponent
  },
  {
    path:'member',
    component: MembersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
