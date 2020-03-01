import { NgModule } from "@angular/core";
import { Route, RouterModule} from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductModule } from './product.module';
import { CanEditGuard } from './guards/can-edit.guard';
import { SaveAlertGuard } from './guards/save-alert.guard';
import { ProductsResolveService } from './resolvers/products.service';

const routes: Route[] = [
    {
       // path:'products',// lazy loading module then have products/products
       path:'', // /products come from app.module loadChildren
        component:ProductHomeComponent,
        children:[
            {
                path:'', //default the list page as child component
                component: ProductListComponent,
                resolve:{
                    products:ProductsResolveService
                },
                data:{
                    roles:['admin', 'staff']
                }
            },
            {
                path:'create', 
                component: ProductEditComponent,
                canDeactivate:[SaveAlertGuard]
            },
            {
                path:'edit/:id', 
                component: ProductEditComponent,
                canActivate:[CanEditGuard],
                canDeactivate:[SaveAlertGuard]
            },
            {
                path:'search', 
                component: ProductSearchComponent
            }
        ]
    }
]

@NgModule({
    imports:[
        ProductModule,
        RouterModule.forChild(routes)
    ]

})

export class ProductRoutingModule{

}