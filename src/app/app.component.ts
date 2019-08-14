import { Component , AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'aprosan';

  ngAfterViewInit() {
    $.getScript('../assets/js/functions.js');
  }
}
