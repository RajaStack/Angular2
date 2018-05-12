import { Component, Input, Output, EventEmitter} from '@angular/core';
import {apiService} from '../../services/apiServices';
import { SUBAPI } from '../../constant/constant.apis';


@Component({
	selector: 'product',
  	templateUrl: './product.html',
  	providers : [apiService]
})

export class productComponent {

	
	@Input() product: any;
	@Output() cartChange: EventEmitter<any> = new EventEmitter<any>();
	
	constructor(private api : apiService){
		
	}


	addCart(){
		let data = {
			"id" : this.product._id,
			"type" : 1
		}
		this.api.post(SUBAPI.ADDCART, data).subscribe((res) => {
			if(res.status)
			{
				this.product.cart = 1;
				this.cartChange.emit(res.extra);
			}			
		}, (error)=>{
			console.log(error);
		});
	}
}
