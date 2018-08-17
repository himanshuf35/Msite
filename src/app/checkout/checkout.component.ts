import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  count="0";

  constructor(private dataservice:DataserviceService) { 

    // if(localStorage!==null)
    // {
    // this.count=localStorage.getItem("ProductCount");
    // }

    console.log(this.count)
  }
 

  ngOnInit() {
   this.dataservice.count_subject_event.subscribe((data)=>{this.count=data});
  }

}
