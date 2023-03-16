import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'lib-makav',
  templateUrl: './makav.component.html',
  styleUrls: ['./makav.component.css']
})
export class MakavComponent {

  @Input() theme: any = 'default';
  @Input() type: any = 'login';
  @Input() title: any = 'My Title';
  @Input() sub_title: any = 'This is a sub title';
  @Input() box: boolean = false;
  @Input() isRememberMe: boolean = false;
  @Input() isForgot: boolean = false;
  @Input() border_radius: any = '';
  @Input() button: any;

  @Input() labelSize: any = '15px';
  @Input() errorSize: any = '10px';
  @Input() form_fields: any;
  @Input() heading: any = 'My Title';
  @Output() formEmitter: EventEmitter<any> = new EventEmitter();
  formGroup!: FormGroup;


  constructor(private themeService: ThemeService) { }



  ngOnInit() {
    console.log('type is = ', this.type, '', 'Form Fields are = ', this.form_fields, this.labelSize, this.errorSize);
    this.initialiseForm();
    this.toggleTheme();
    console.log(this.theme);
  }




  toggleTheme() {
    if (this.theme == 'purple') {
      this.themeService.setPurpleTheme();
    } else if (this.theme == 'ocean') {
      this.themeService.setOceanTheme();
    } else if (this.theme == 'primary') {
      this.themeService.setPrimaryTheme();
    }
  }



  initialiseForm() {
    if (this.form_fields.length > 0) {
      let group: any = {};
      this.form_fields.forEach((field: any) => {
        switch (field.label) {
          case 'email':
            group[field.label] = new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$')]);
            break;
          case 'password':
            group[field.label] = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));
            break;
          case 'username':
            group[field.label] = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)]));
            break;
          default:
            group[field.label] = new FormControl('', [Validators.required]);
            break;
        }
      });

      if (this.isForgot) {
        group['remember_me'] = new FormControl(false);
      }

      this.formGroup = new FormGroup(group);
      console.log(this.formGroup);
    }
  }


  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.formEmitter.emit(this.formGroup);
    }
  }

}
