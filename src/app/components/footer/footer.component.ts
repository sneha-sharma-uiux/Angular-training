import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  //<app-footer 
  @Input("company") // alias name for property binding
  appCompany:string;

  today:Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  raise(){
    throw new Error('Crash');
  }

}
