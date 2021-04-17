import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    data: {
      title: "BeautyCaster | Akanksha Gusain"
    }
  },
  {
    path: 'blog',
    loadChildren: () => import('../../app/layouts/blog/blog.module').then(m => m.BlogModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
