import {
  ChangeDetectorRef,
  Component,
  forwardRef,
  Host,
  Inject,
  Input,
  ModuleWithProviders,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  SkipSelf
} from '@angular/core';
import {ControlContainer, ControlValueAccessor, FormControl, Validators} from "@angular/forms";
import {NgxCountrySelectSupportedLanguages} from "./models/supported-languages";
import {NgxCountrySelectDefaultFormFieldAppearanceToken, NgxCountrySelectLangToken} from "./tokens";
import {Country} from "./models/country";
import {MatFormFieldAppearance} from "@angular/material/form-field";

@Component({
  selector: 'ngx-country-select',
  templateUrl: './ngx-country-select.component.html',
  styles: ``
})
export class NgxCountrySelectComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() appearance?: MatFormFieldAppearance;
  @Input({required: true}) label!: string;
  @Input() placeHolder = "Select country";
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() language?: string;

  _formControl = new FormControl(
    { value: "", disabled: false },
    this.required ? [Validators.required] : []
  );

  constructor(
    @Inject(forwardRef(() => NgxCountrySelectLangToken)) public i18n: string,
    @Inject(forwardRef(() => NgxCountrySelectDefaultFormFieldAppearanceToken)) public appearanceToken?: MatFormFieldAppearance,
    // @Optional()
    // @Host()
    // @SkipSelf()
    // private controlContainer: ControlContainer,
    // private cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    void this.loadCountries();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }



  countries: Country[] = [];
  private async loadCountries(): Promise<void> {
    this.countries = await this.importCountries();
  }

  private async importCountries() {
    const lang: string = ((this.language || this.i18n) ?? "").toLowerCase();

    switch (lang) {
      case "be":
        const result_1 = await import("./i18n/be");
        return result_1.COUNTRIES_DB_BY;
      case "br":
        const result_2 = await import("./i18n/br");
        return result_2.COUNTRIES_DB_BR;
      case "ca":
        const result_3 = await import("./i18n/ca");
        return result_3.COUNTRIES_DB_CA;
      case "de":
        const result_4 = await import("./i18n/de");
        return result_4.COUNTRIES_DB_DE;
      case "es":
        const result_5 = await import("./i18n/es");
        return result_5.COUNTRIES_DB_ES;
      case "eu":
        const result_6 = await import("./i18n/eu");
        return result_6.COUNTRIES_DB_EU;
      case "fr":
        const result_7 = await import("./i18n/fr");
        return result_7.COUNTRIES_DB_FR;
      case "gl":
        const result_8 = await import("./i18n/gl");
        return result_8.COUNTRIES_DB_GL;
      case "hr":
        const result_9 = await import("./i18n/hr");
        return result_9.COUNTRIES_DB_HR;
      case "hu":
        const result_10 = await import("./i18n/hu");
        return result_10.COUNTRIES_DB_HU;
      case "it":
        const result_11 = await import("./i18n/it");
        return result_11.COUNTRIES_DB_IT;
      case "nl":
        const result_12 = await import("./i18n/nl");
        return result_12.COUNTRIES_DB_NL;
      case "pt":
        const result_13 = await import("./i18n/pt");
        return result_13.COUNTRIES_DB_PT;
      case "ru":
        const result_14 = await import("./i18n/ru");
        return result_14.COUNTRIES_DB_RU;
      case "uk":
        const result_15 = await import("./i18n/uk");
        return result_15.COUNTRIES_DB_UA;
      default:
        const result_16 = await import("./i18n/en");
        return result_16.COUNTRIES_DB;
    }
  }
}
