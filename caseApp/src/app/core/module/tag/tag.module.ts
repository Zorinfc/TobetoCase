import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { TagRoutingModule } from './tag-routing.module';

@NgModule({
  declarations: [TagComponent],
  imports: [CommonModule, TagRoutingModule],
})
export class TagModule {}
