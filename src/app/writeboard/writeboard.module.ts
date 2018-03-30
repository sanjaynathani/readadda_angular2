import { NgModule } from '@angular/core';
import { WriteBoardComponent } from './writeboard.component';
import { CommonModule } from '@angular/common';
import { ReadBoardRoutingModule } from './writeboard.routing.module';

@NgModule({
  declarations: [
    WriteBoardComponent
  ],
  imports: [
    CommonModule,
    ReadBoardRoutingModule
  ],
  providers: []
})
export class WriteBoardModule { }
