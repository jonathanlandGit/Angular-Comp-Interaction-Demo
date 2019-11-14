import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildToParentRoutingModule } from './child-to-parent-routing.module';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [ChildComponent, ParentComponent],
  imports: [
    CommonModule,
    ChildToParentRoutingModule
  ]
})
export class ChildToParentModule { }
