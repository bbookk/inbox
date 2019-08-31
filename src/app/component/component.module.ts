import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { ComponentRoutingModule } from './component-routing.module';
import { InboxService } from './inbox/services/inbox.service';
import {MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [InboxComponent],
  providers: [InboxService]
})
export class ComponentModule { }
