import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxColorsModule } from 'ngx-colors';

@Component({
  selector: 'app-colorpicker',
  standalone: true,
  imports: [SharedModule, MaterialModuleModule, FormsModule, ReactiveFormsModule,ColorPickerModule,NgxColorsModule ],
  templateUrl: './colorpicker.component.html',
  styleUrl: './colorpicker.component.scss'
})
export class ColorpickerComponent {
  public color: string = '#2889e9';
  public color1: string = '#2889e9';
  public color2: string = '#e920e9';
 


  public onEventLog(event: string, data: any): void {
    // console.log(event, data);
  }
 
  constructor() { }
  color3:string = '#EC407A';
  input1: string = "#00897B";

}