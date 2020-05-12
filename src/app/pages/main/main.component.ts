import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public currentDate = new Date();
  public footMessage: string = "Good bye";

  public languages = [
    { code: 'en', label: 'English'},
    { code: 'es', label: 'Español'},
    { code: 'pt', label: 'Portugues'}
  ];

  constructor(@Inject(LOCALE_ID) public localeId: string,
             public router: Router) { }

  ngOnInit() {
  }

}
