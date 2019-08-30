import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { ComponentRoutingModule } from './component-routing.module';
import { InboxService } from './inbox/services/inbox.service';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  declarations: [InboxComponent],
  providers: [InboxService]
})
export class ComponentModule { }
