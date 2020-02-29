import { NgModule } from "@angular/core";
import { Route, RouterModule} from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductModule } from './product.module';

const routes: Route[] = [
    {
        path:'products',
        component:ProductHomeComponent,
        children:[
            {
                path:'', //default the list page as child component
                component: ProductListComponent
            },
            {
                path:'create', 
                component: ProductEditComponent
            },
            {
                path:'edit/:id', 
                component: ProductEditComponent
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