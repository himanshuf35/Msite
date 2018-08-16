import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service'
import {Data} from '../data'
import {Router} from '@angular/router'

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers:[Data]
})
export class MainpageComponent implements OnInit {

  productArray:Array<any>=[];
  constructor(private data:Data,private dataservice:DataserviceService,private router:Router) { }

  ngOnInit() {
    // let data=this.dataservice.getData();
    let dataArray=[this.data.Mobiles.Product,this.data.Headphones.Product,this.data.Televisions.Product,this.data.Laptops.Product,this.data.Games.Product];
    dataArray.forEach(element1 => {

      element1.forEach(element2 => {
        this.productArray.push(element2);
        console.log(element2.name);
      });
      
    });
  }

  public OpenCategory(category)
{
  this.dataservice.setCategory(category);
   this.router.navigate(['/product']);
}


}
