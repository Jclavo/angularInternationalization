import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public clickedMessage = $localize`:@@detail.clicked:`;

  constructor() { }

  ngOnInit() {
  }

  onButton(){
    alert(this.clickedMessage);
  }

}
