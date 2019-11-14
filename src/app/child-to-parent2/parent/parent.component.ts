import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentMessage: string;

  constructor() { }

  ngOnInit() {
  }

  receiveMessage(e) {
    console.log(e);
      this.parentMessage = e;
  }

}
