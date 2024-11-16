import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-list-03',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './todo-list-03.component.html',
  styleUrl: './todo-list-03.component.scss'
})
export class TodoList03Component {

listData3 =  [
  {
    image:'./assets/images/files/file2.png',
    filetype:'XLS document.xls'
  },
  {
    image:'./assets/images/files/doc.png',
    filetype:'New document.doc'
  },
  {
    image:'./assets/images/files/file.png',
    filetype:'pdf document.pdf'
  },
  {
    image:'./assets/images/files/ppt.png',
    filetype:'ppt document.ppt'
  },
  {
    image:'./assets/images/files/word.png',
    filetype:'word document.doc'
  },
  {
    image:'./assets/images/files/zip.png',
    filetype:'Zip file.zip'
  },

  {
    image:'./assets/images/files/file2.png',
    filetype:'XLS document.xls'
  },
  {
    image:'./assets/images/files/file.png',
    filetype:'pdf document2.pdf'
  },
  {
    image:'./assets/images/files/file.png',
    filetype:'New document.pdf'
  },
  {
    image:'./assets/images/files/doc.png',
    filetype:'New document.doc'
  },
  {
    image:'./assets/images/files/ppt.png',
    filetype:'New document.ppt'
  },
  {
    image:'./assets/images/files/ppt.png',
    filetype:'PPt document.ppt'
  },
]
}
