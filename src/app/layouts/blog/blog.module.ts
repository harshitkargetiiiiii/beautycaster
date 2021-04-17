import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'
import { NgxMasonryModule } from 'ngx-masonry';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ColumnNoSidebarComponent } from './column-no-sidebar/column-no-sidebar.component';
import { SidebarComponent } from './widgets/sidebar/sidebar.component';
import {LayoutsModule} from './../layouts.module'

@NgModule({
  declarations: [BlogComponent, ColumnNoSidebarComponent, SidebarComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    LayoutsModule,
    NgxMasonryModule,
    CarouselModule,
    NgbModule
  ]
})
export class BlogModule { }
