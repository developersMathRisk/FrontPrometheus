import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mail-inbox',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,ReactiveFormsModule,AngularEditorModule,HttpClientModule,NgbModule],
  templateUrl: './mail-inbox.component.html',
  styleUrl: './mail-inbox.component.scss'
})
export class MailInboxComponent {
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
