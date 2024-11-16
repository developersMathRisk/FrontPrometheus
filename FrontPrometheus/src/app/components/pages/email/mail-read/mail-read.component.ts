import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mail-read',
  standalone: true,
  imports: [SharedModule,NgSelectModule,AngularEditorModule,NgbModule,FormsModule,HttpClientModule,RouterModule],
  templateUrl: './mail-read.component.html',
  styleUrl: './mail-read.component.scss'
})
export class MailReadComponent {
  constructor(private modalService: NgbModal) {}
  openWindowCustomClass(content: any) {
		this.modalService.open(content, {  size: 'lg' });
	}

  mailSelectData = [1];
  selected = [
      { id: 1, name: 'Jay@gmail.com' },
      { id: 2, name: 'Kimo@gmail.com' },
      { id: 3, name: 'Don@gmail.com' },
      { id: 4, name: 'kimo@gmail.com' },
  ];
  htmlContent1:string = ``;

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...', 
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

}
