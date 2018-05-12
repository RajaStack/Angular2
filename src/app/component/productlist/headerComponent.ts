import { Component, Input } from '@angular/core';

@Component({
	selector: 'headerpart',
  	templateUrl: './header.html'
})
export class headerComponent {

	@Input() cartCount: any;

	
}
