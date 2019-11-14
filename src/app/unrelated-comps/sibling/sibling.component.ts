import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {

  message: string;

  constructor(private _ds: DataService) { }

  ngOnInit() {
    this._ds.currentMessage.subscribe(message => this.message= message);
  }

  newMessage(e){
    this._ds.changeMessage(e);
  }

}
