import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'parentToChild',
    loadChildren: './parent-to-child/parent-to-child.module#ParentToChildModule'
  },
  {
    path: 'childToParent',
    loadChildren: './child-to-parent/child-to-parent.module#ChildToParentModule'
  },
  {
    path: 'childToParent2',
    loadChildren: './child-to-parent2/child-to-parent2.module#ChildToParent2Module'
  },
  {
    path: 'unrelated-comps',
    loadChildren: './unrelated-comps/unrelated-comps.module#UnrelatedCompsModule'
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
