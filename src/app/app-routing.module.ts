import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mat1Component } from './mat1/mat1.component';
import { TableComponent } from './table/table.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { DragComponent } from './drag/drag.component';


const routes: Routes = [
 {path:'mat1',       component:Mat1Component},
 {path:'table',       component:TableComponent},
 {path:'navigation',       component:NavigationComponent},
 {path:'dashboard',       component:DashboardComponent},
 {path:'tree',       component:TreeComponent},
 {path:'drag-drop',       component:DragComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
