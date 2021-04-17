import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColumnNoSidebarComponent } from './column-no-sidebar/column-no-sidebar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'myblog',
        component: ColumnNoSidebarComponent,
        data: {
          title: "BLOG WITH LEFT-SIDEBAR",
          breadcrumb: "Blog Grid View / No Sidebar"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
