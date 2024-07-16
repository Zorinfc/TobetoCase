import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabelComponent } from './label/label.component';

const routes: Routes = [
  { path: '', component: LabelComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabelRoutingModule {}
