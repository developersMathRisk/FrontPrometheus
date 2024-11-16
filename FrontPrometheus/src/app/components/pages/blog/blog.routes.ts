     import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [
       {path:'pages/blog',children:[ 
        {
        path: 'blog/blog-01',
        loadComponent: () =>
          import('./blog/blog-01/blog-01.component').then((m) => m.Blog01Component),
          title: 'Dashtic- Blog-01'
      },
      {
        path: 'blog/blog-02',
        loadComponent: () =>
          import('./blog/blog-02/blog-02.component').then((m) => m.Blog02Component),
          title: 'Dashtic- Blog-02'
      },
      {
        path: 'blog/blog-03',
        loadComponent: () =>
          import('./blog/blog-03/blog-03.component').then((m) => m.Blog03Component),
          title: 'Dashtic- Blog-03'
      },
      {
        path: 'blog-details',
        loadComponent: () =>
          import('./blog-details/blog-details.component').then(
            (m) => m.BlogDetailsComponent
          ),
          title: 'Dashtic- Blog Details'
      },
      {
        path: 'create-blog',
        loadComponent: () =>
          import('./create-blog/create-blog.component').then(
            (m) => m.CreateBlogComponent
          ),
          title: 'Dashtic-  Create Blog'
      },
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class blogRoutingModule {
        static routes = admin;
      }