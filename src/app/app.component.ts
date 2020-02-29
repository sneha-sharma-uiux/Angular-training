import { Component, OnInit } from "@angular/core";

@Component({
    //meta
    selector:'app-root',
    //view/html
    templateUrl:'app.component.html',
    //scopped styles
    styleUrls:['app.component.scss']
})
export class AppComponent implements OnInit{
    // model attributes
    //bindable to view
    appTitle:string = "Product App";

    constructor(){
        console.log('App component constructor');
    }

    //calback, called by framework after loading view into browser
    ngOnInit(){
        console.log('app component ngOnInit');
    }
}