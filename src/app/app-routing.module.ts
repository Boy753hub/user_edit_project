import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'users', component: MainPageComponent},
  { path: 'user/:id', component: TestComponent},
  { path: '**', redirectTo: 'users'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
