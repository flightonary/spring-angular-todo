import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopologyComponent } from "./topology/topology.component";
import { BacktraceComponent } from "./backtrace/backtrace.component";

const routes: Routes = [
  { path: '', redirectTo: '/topology', pathMatch: 'full' },
  { path: 'topology', component: TopologyComponent },
  { path: 'backtrace', component: BacktraceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
