import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxCountrySelectComponent} from "../../projects/ngx-country-select/src/lib/ngx-country-select.component";
import {NgxCountrySelectLangToken} from "../../projects/ngx-country-select/src/lib/tokens";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxCountrySelectComponent],
  providers: [
    {
      provide: NgxCountrySelectLangToken,
      useValue: "en",
    }
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}

