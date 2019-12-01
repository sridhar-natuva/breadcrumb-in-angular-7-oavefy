import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  {
    path: 'folders',
    component: PageComponent,
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'folders/list-documents',
    component: Page2Component,
    data: { breadcrumb: 'Documents' }
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'folders'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    PageComponent,
    Page2Component
  ];
}
