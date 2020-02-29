//module is logical collection of
//components, directives, pipes, services
//dependencies to other modules

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; //compiler and common module reference from @angular
import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import {FormsModule} from '@angular/forms';
import { CartModule } from './cart/cart.module';
import { Route, RouterModule } from "@angular/router";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductRoutingModule } from './product/product-routing.module';
//import {LocationStrategy, HashLocationStrategy, PathLocationStrategy  } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

//1. configuration
const routes: Route[]=[
    //map the path to component
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'counter',
        component:CounterComponent
    },
    //at last
    {
        path:'**',
        component:NotFoundComponent
    }
];

@NgModule({
    //meta data about module
    imports:[
        BrowserModule,
        HttpClientModule,
        SharedModule,
        FormsModule,
        CartModule,
        //2. apply the configuration
        //root/app/main.module
        RouterModule.forRoot(routes),
        ProductRoutingModule,
    ],
    declarations:[
        //components, pipes, directives
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        CounterComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent
    ],
    // providers:[
    //     {
    //         provide:LocationStrategy, //base class or interface
    //         useClass:HashLocationStrategy //create instance (Pathlocation is default)
    //     }
    // ],
    bootstrap:[
        AppComponent
    ]

})
export class AppModule{

}