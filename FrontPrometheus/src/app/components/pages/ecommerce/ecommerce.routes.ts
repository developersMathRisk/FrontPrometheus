      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [
       {path:'pages/ecommerce',children:[ {
        path: 'addproduct',
        loadComponent: () =>
          import('./addproduct/addproduct.component').then((m) => m.AddproductComponent),
          title: 'Dashtic- Add Product'
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./cart/cart.component').then(
            (m) => m.CartComponent
          ),
          title: 'Dashtic- Cart'
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./checkout/checkout.component').then(
            (m) => m.CheckoutComponent
          ),
          title: 'Dashtic- Checkout'
      },
      {
        path: 'edit-products',
        loadComponent: () =>
          import('./editproducts/editproducts.component').then((m) => m.EditproductsComponent),
          title: 'Dashtic- Edit Products'
      },
      {
        path: 'orderdetails',
        loadComponent: () =>
          import('./orderdetails/orderdetails.component').then((m) => m.OrderdetailsComponent),
          title: 'Dashtic- Order Details'
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./orders/orders.component').then((m) => m.OrdersComponent),
          title: 'Dashtic- Orders'
      },
      {
        path: 'product-details',
        loadComponent: () =>
          import('./product-details/product-details.component').then((m) => m.ProductDetailsComponent),
          title: 'Dashtic- Product Details'
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./products/products.component').then((m) => m.ProductsComponent),
          title: 'Dashtic- Products'
      },
      {
        path: 'products-list',
        loadComponent: () =>
          import('./products-list/products-list.component').then((m) => m.ProductsListComponent),
          title: 'Dashtic- Products List'
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./wishlist/wishlist.component').then((m) => m.WishlistComponent),
          title: 'Dashtic- Wishlist'
      },
 
      
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class ecommerceRoutingModule {
        static routes = admin;
      }