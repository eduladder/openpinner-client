import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  li:any;
  lis=[];
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
      this.apiService.searchPins().subscribe((data)=>{
      //  console.log('Search');
       console.log('data',data);
      // this.li=data;
      // this.lis=this.li.pins;
    });
  }

}
