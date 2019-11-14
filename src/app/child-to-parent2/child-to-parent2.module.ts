import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

import { ChildToParent2RoutingModule } from './child-to-parent2-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ChildToParent2RoutingModule
  ],
  declarations: [ParentComponent, ChildComponent]
})
export class ChildToParent2Module { }
