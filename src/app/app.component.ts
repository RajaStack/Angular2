import { Component } from '@angular/core';
import { SUBAPI } from './constant/constant.apis';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	private cartCount : number = 0;
	

	cartChanged(data : any){
		this.cartCount = data;
	}
	
	
}
