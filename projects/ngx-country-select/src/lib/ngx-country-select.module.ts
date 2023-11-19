import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldAppearance, MatFormFieldModule} from "@angular/material/form-field";
import {NgxCountrySelectComponent} from "./ngx-country-select.component";
import {NgxCountrySelectDefaultFormFieldAppearanceToken, NgxCountrySelectLangToken} from "./tokens";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxCountrySelectSupportedLanguages} from "./models";

interface ForRootParams {
  defaultLanguage: NgxCountrySelectSupportedLanguages;
  defaultFormFieldAppearance?: MatFormFieldAppearance;
}

@NgModule({
  declarations: [NgxCountrySelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [],
  exports: [
    NgxCountrySelectComponent
  ]
})
export class NgxCountrySelectModule {
  constructor() {
  }

  static forRoot({defaultLanguage, defaultFormFieldAppearance}: ForRootParams): ModuleWithProviders<NgxCountrySelectModule> {
    return {
      ngModule: NgxCountrySelectModule,
      providers: [
        {
          provide: NgxCountrySelectLangToken,
          useValue: defaultLanguage,
        },
        {
          provide: NgxCountrySelectDefaultFormFieldAppearanceToken,
          useValue: defaultFormFieldAppearance,
        }
      ],
    };
  }
}
