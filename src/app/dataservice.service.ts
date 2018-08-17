import { Injectable } from '@angular/core';
import {Data} from './data'
import {Subject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  SelectedCategory:String;
  CartArray=[];
  // ProductCount:number
  constructor() { }
  
  public setCategory(category)
  {
    localStorage.setItem("category",category);
  }
  public getCategory()
  {
    return localStorage.getItem("category");
  }

  public AddToCart(product)
  {
    let data=localStorage.getItem("cartarray")
    if(data!==null)
    {
    this.CartArray=JSON.parse(localStorage.getItem("cartarray"));
    this.CartArray.push(product);
    let count=parseInt(localStorage.getItem("ProductCount"));
    count++;
    this.CountPublish(count);
    localStorage.setItem("ProductCount",count.toString());
    localStorage.setItem("cartarray",JSON.stringify(this.CartArray));
    }
    else
    {
      this.CartArray.push(product);
      localStorage.setItem("ProductCount","1")
      localStorage.setItem("cartarray",JSON.stringify(this.CartArray));
    }
  }

  public category_subject = new Subject<string>();
  public count_subject = new Subject<string>();
  public category_subject_event = this.category_subject.asObservable();
  public count_subject_event = this.count_subject.asObservable();

  public CategoryPublish(category) {
    this.category_subject.next(category);
  }
  private CountPublish(count)
  {
    this.count_subject.next(count);
  }
 
}
