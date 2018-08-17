import { Component, OnInit } from '@angular/core';
import {Data} from '../data'
import {DataserviceService} from '../dataservice.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[Data]
})
export class ProductComponent implements OnInit {

  CategoryProductArray:Array<any>=[];
  OpenedCategory:String;
  ProductArray:Array<any>=[];

  constructor(private data:Data,private dataservice:DataserviceService,) {
    

  }

  ngOnInit() {

    this.dataservice.category_subject_event.subscribe((data) => {
      console.log(data); // {data: 'some data'}
      this.OpenedCategory= data
       this.data.Categories.forEach(element => {
         if(this.OpenedCategory===element.Category)
         {
               this.ProductArray=element.Product;
               console.log(this.ProductArray)
         }
       });
    });

      //  this.OpenedCategory= this.dataservice.getCategory()
      //  this.data.Categories.forEach(element => {
      //    if(this.OpenedCategory===element.Category)
      //    {
      //          this.ProductArray=element.Product;
      //    }
      //  });
  }

  

}
