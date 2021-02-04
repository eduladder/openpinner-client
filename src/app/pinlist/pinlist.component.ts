import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-pinlist',
  templateUrl: './pinlist.component.html',
  styleUrls: ['./pinlist.component.css']
})
export class PinlistComponent implements OnInit {
  li:any;
  lis=[];
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
      this.apiService.getPins().subscribe((data)=>{
      console.log(data);
      this.li=data;
      this.lis=this.li.pins;
    });
  }

}
