import { Component, ViewChild } from '@angular/core';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import * as FilePond from 'filepond';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import { SharedModule } from '../../../../shared/shared.module';
import { Time } from '@angular/common';  
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { Editor,Validators, NgxEditorModule, Toolbar } from 'ngx-editor';
import jsonDoc from '../../../../shared/data/ngxeditor';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [SharedModule, NgxEditorModule, FormsModule, ReactiveFormsModule, FlatpickrModule, FilePondModule, NgSelectModule],
  providers:[FlatpickrDefaults],
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'] 
})
export class CreateBlogComponent {
  
  selecteddate: Date | null = null;

  selectedTime: Time | null = null;

  //First Selelct
  selectedSimpleItem = 'Select Category';
  simpleItems: any = [];
  // second Select
  selectedSimpleItem1 = 'Select';
  simpleItems1: any = [];
  //Select 3
  selectedBlogs = ['Landscape', 'Top Blog'];
  Blogs = [
    { id: 1, name: 'Adventure' },
    { id: 2, name: 'Blogger' },
    { id: 1, name: 'Landscape' },
    { id: 2, name: 'Top Blog' },
  ];

  ngOnInit(): void {
    this.editor = new Editor();
    this.simpleItems = ['Beauty', 'Fashion', 'Food', 'Nature', 'Sports'];
    this.simpleItems1 = ['Hold', 'Published'];
  }
  toggleDisabled() {
    const Blog: any = this.Blogs[1];
    Blog.disabled = !Blog.disabled;
  }

  @ViewChild('myPond') myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Drag & Drop your files or Browse..',
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: 'Drag & Drop your files or Browse..',
  };

  pondFiles: FilePond.FilePondOptions['files'] = [];

  pondHandleInit() {
    // console.log("FilePond has initialised", this.myPond);
  }

  pondHandleAddFile(event: any) {
    // console.log("A file was added", event);
  }

  pondHandleActivateFile(event: any) {
    // console.log("A file was activated", event);
  }
  editordoc = jsonDoc;

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
