import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './_page/home/home.component';
import { MemberComponent } from './_page/member/member.component';
import { AboutComponent } from './_page/about/about.component';
import { AuthGuard } from './_services/auth.guard';
import { BannedComponent } from './_page/banned/banned.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'member', component: MemberComponent, canActivate:[AuthGuard] },
  { path: '404', component: BannedComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
