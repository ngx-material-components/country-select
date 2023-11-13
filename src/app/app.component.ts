import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxCountrySelectComponent} from "../../projects/ngx-country-select/src/lib/ngx-country-select.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxCountrySelectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
