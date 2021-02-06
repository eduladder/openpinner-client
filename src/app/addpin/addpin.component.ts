import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpin',
  templateUrl: './addpin.component.html',
  styleUrls: ['./addpin.component.css']
})
export class AddpinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log(data);
  }
}
