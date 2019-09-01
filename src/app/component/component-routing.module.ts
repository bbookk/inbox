import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
	{
		path: '',
		component : InboxComponent
	},
	{
		path: 'view',
		component : InfoComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ComponentRoutingModule {}
