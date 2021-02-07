import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { TeamComponent } from './team/team.component';
import { Wps2020Component } from './wps2020/wps2020.component';
import { ReposComponent } from './repos/repos.component'

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
  {
    path:'WPS2020',
    component: Wps2020Component
  },
  {
    path:'events',
    component: EventsComponent
  },
  {
    path: 'repos',
    component: ReposComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
