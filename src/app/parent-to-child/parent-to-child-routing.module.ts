import { ChildComponent } from './../child-to-parent2/child/child.component';
import { ParentComponent } from './../child-to-parent2/parent/parent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'parent', component: ParentComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  declarations: [ParentComponent, ChildComponent],
  exports: [RouterModule]
})


export class ParentToChildRoutingModule { }
