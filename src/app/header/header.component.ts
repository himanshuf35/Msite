import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service'
import {Router} from '@angular/router'
import {Data} from '../data'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[Data]
})
export class HeaderComponent implements OnInit {

  constructor(private dataservice:DataserviceService,private router:Router,private data:Data) { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
         }
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
public OpenCategory(category)
{
  this.dataservice.CategoryPublish(category);
   this.router.navigate(['/product']);
}

}
