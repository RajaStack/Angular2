import { Component, Output, EventEmitter } from '@angular/core';
import {productComponent}  from './productComponent';
import {apiService} from '../../services/apiServices';
import { SUBAPI } from '../../constant/constant.apis';


@Component({
  selector: 'productlist',
  templateUrl: './productlist.html',
  providers : [apiService]
})
export class productListComponent {
	private listProducts : any = [];

	@Output() cartChange: EventEmitter<any> = new EventEmitter<any>();

	

	constructor(private api : apiService){
		this.getProducts();
	}


	getProducts(){
		this.api.get(SUBAPI.PRODUCTLIST).subscribe((res) => {
			if(res.response)
			{
				this.listProducts = res.response;
				this.cartChanged(res.count);
			}			
		}, (error)=>{
			console.log(error);
		});
	}

	cartChanged(data : any){
		this.cartChange.emit(data);
	}

	
}
