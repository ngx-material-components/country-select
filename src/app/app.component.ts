import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCountrySelectModule } from '../../projects/ngx-country-select/src/lib/ngx-country-select.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldAppearance,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NgxCountrySelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  optionsForm = new FormGroup({
    appearance: new FormControl<MatFormFieldAppearance>('fill', {
      nonNullable: true,
    }),
    label: new FormControl<string>('Select a Country', {
      nonNullable: true,
    }),
    placeHolder: new FormControl<string>('Select a Country', {
      nonNullable: true,
    }),
    required: new FormControl<boolean>(false, {
      nonNullable: true,
    }),
    disabled: new FormControl<boolean>(false, {
      nonNullable: true,
    }),
    language: new FormControl<string>('en', {
      nonNullable: true,
    }),
  });

  supportedLanguages = [
    { code: 'br' },
    { code: 'be' },
    { code: 'de' },
    { code: 'en' },
    { code: 'es' },
    { code: 'fr' },
    { code: 'hr' },
    { code: 'hu' },
    { code: 'it' },
    { code: 'gl' },
    { code: 'ca' },
    { code: 'eu' },
    { code: 'nl' },
    { code: 'pt' },
    { code: 'ru' },
    { code: 'uk' },
  ];
}
