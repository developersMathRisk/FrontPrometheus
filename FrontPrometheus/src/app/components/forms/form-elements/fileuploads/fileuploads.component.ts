import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import * as FilePond from 'filepond';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';

@Component({
  selector: 'app-fileuploads',
  standalone: true,
  imports: [SharedModule,FilePondModule],
  templateUrl: './fileuploads.component.html',
  styleUrl: './fileuploads.component.scss'
})
export class FileuploadsComponent {
  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };
  dropzoneOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };

  pondFiles: FilePond.FilePondOptions["files"] = [];

  pondHandleInit() {}

  pondHandleAddFile(event: any) { }

  pondHandleActivateFile(event: any) {}

}