import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps',children:[ {
  path: 'fullcalender',
  loadComponent: () =>
    import('./fullcalendar/fullcalendar.component').then((m) => m.FullcalendarComponent),
    title: 'Dashtic - full Calender'
},
{
    path: 'gallery',
    loadComponent: () =>
      import('./gallery/gallery.component').then((m) => m.GalleryComponent),
      title: 'Dashtic - Gallery'
},
  {
    path: 'sweetalerts',
    loadComponent: () =>
      import('./sweetalerts/sweetalerts.component').then((m) => m.SweetalertsComponent),
      title: 'Dashtic - Sweetalerts'
  },
  {
    path: 'chat/chat-01',
    loadComponent: () =>
      import('./chat/chat-01/chat-01.component').then((m) => m.Chat01Component),
      title: 'Dashtic - Chat'
  },
  {
    path: 'chat/chat-02',
    loadComponent: () =>
      import('./chat/chat-02/chat-02.component').then((m) => m.Chat02Component),
      title: 'Dashtic - Chat2'
  },
  {
    path: 'chat/chat-03',
    loadComponent: () =>
      import('./chat/chat-03/chat-03.component').then((m) => m.Chat03Component),
      title: 'Dashtic - Chat3'
  },
  {
    path: 'contact/contacts',
    loadComponent: () =>
      import('./contact/contacts/contacts.component').then((m) => m.ContactsComponent),
      title: 'Dashtic - Contacts'
  },
  {
    path: 'contact/contacts-02',
    loadComponent: () =>
      import('./contact/contact-2/contact-2.component').then((m) => m.Contact2Component),
      title: 'Dashtic - Contacts 02'
  },
  {
    path: 'contact/contacts-03',
    loadComponent: () =>
      import('./contact/contact-3/contact-3.component').then((m) => m.Contact3Component),
      title: 'Dashtic - Contacts 03'
  },
  {
    path: 'filemanager/filemanager',
    loadComponent: () =>
      import('./file-manager/filemanager/filemanager.component').then((m) => m.FilemanagerComponent),
      title: 'Dashtic - Filemanager'
  },
  {
    path: 'filemanager/filemanager-list/file-list-01',
    loadComponent: () =>
      import('./file-manager/file-manager-list/file-list-01/file-list-01.component').then((m) => m.FileList01Component),
      title: 'Dashtic - Filemanager List 1'
  },
  {
    path: 'filemanager/filemanager-list/file-list-02',
    loadComponent: () =>
      import('./file-manager/file-manager-list/file-list-02/file-list-02.component').then((m) => m.FileList02Component),
      title: 'Dashtic - Filemanager List 2'
  },
  {
    path: 'filemanager/filemanager-details',
    loadComponent: () =>
      import('./file-manager/file-manager-details/file-manager-details.component').then((m) => m.FileManagerDetailsComponent),
      title: 'Dashtic - Filemanager-Details'
  },
  {
    path: 'todo-list/todo-list',
    loadComponent: () =>
      import('./todo-list/todo-list/todo-list.component').then((m) => m.TodoListComponent),
      title: 'Dashtic - Todo List'
  },
  {
    path: 'todo-list/todo-list-02',
    loadComponent: () =>
      import('./todo-list/todo-list-02/todo-list-02.component').then((m) => m.TodoList02Component),
      title: 'Dashtic - Todo List-2'
  },
  {
    path: 'todo-list/todo-list-03',
    loadComponent: () =>
      import('./todo-list/todo-list-03/todo-list-03.component').then((m) => m.TodoList03Component),
      title: 'Dashtic - Todo List-3'
  },
  {
    path: 'todo-list/todo-list-04',
    loadComponent: () =>
      import('./todo-list/todo-list-04/todo-list-04.component').then((m) => m.TodoList04Component),
      title: 'Dashtic - Todo List-4'
  },
  {
    path: 'user-list/userlist',
    loadComponent: () =>
      import('./user-list/user-list/user-list.component').then((m) => m.UserListComponent),
      title: 'Dashtic - User List'
  },
  {
    path: 'user-list/userlist-02',
    loadComponent: () =>
      import('./user-list/userlist-02/userlist-02.component').then((m) => m.Userlist02Component),
      title: 'Dashtic - User List-02'
  },
  {
    path: 'user-list/userlist-03',
    loadComponent: () =>
      import('./user-list/userlist-03/userlist-03.component').then((m) => m.Userlist03Component),
      title: 'Dashtic - User List-03'
  },
  {
    path: 'user-list/userlist-04',
    loadComponent: () =>
      import('./user-list/userlist-04/userlist-04.component').then((m) => m.Userlist04Component),
      title: 'Dashtic - User List-04'
  },
  
  
]}
];  
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class appsRoutingModule {
  static routes = admin;
}