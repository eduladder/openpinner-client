import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-addpin',
  templateUrl: './addpin.component.html',
  styleUrls: ['./addpin.component.css']
})
export class AddpinComponent implements OnInit {
  li:any;
  lis=[];
  InData:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.InData = data;
    this.apiService.addPins(this.InData).subscribe((data)=>{
      this.li=data;
      this.lis=this.li.results;
    });
  }
}
