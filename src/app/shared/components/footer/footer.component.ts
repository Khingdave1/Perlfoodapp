import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  myDate: any;

  constructor() { }

  ngOnInit(): void {
    // Get current year
    this.myDate = new Date().getFullYear();
  }

}
