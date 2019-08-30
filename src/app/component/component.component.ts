import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
