import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form using formbuilder', () => {
    expect(component.registerForm instanceof FormGroup).toBeTruthy();
  });

  it('should have firstname input field', () => {
    const firstname = component.registerForm.controls.firstname;
    expect(firstname.valid).toBeFalsy();
    expect(firstname.hasError('required')).toBeTruthy();
    expect(firstname.hasError('pattern')).toBeFalsy();
    expect(firstname.hasError('minlength')).toBeFalsy();
    expect(firstname.pristine).toBeTruthy();
  });

  it('firstname input field has value', () => {
    const firstname = component.registerForm.controls.firstname;
    firstname.setValue('Manvi');
    expect(firstname.hasError('required')).toBeFalsy();
    expect(firstname.hasError('pattern')).toBeFalsy();
    expect(firstname.hasError('minlength')).toBeFalsy();
    expect(firstname.valid).toBeTruthy();
  });

  it('firstname input field has numeric value', () => {
    const firstname = component.registerForm.controls.firstname;
    firstname.setValue('Manvi123456');
    expect(firstname.hasError('required')).toBeFalsy();
    expect(firstname.hasError('pattern')).toBeTruthy();
    expect(firstname.hasError('minlength')).toBeFalsy();
    expect(firstname.valid).toBeFalsy();
  });

  it('firstname input field has min length less than 5', () => {
    const firstname = component.registerForm.controls.firstname;
    firstname.setValue('Manu');
    expect(firstname.hasError('required')).toBeFalsy();
    expect(firstname.hasError('pattern')).toBeFalsy();
    expect(firstname.hasError('minlength')).toBeTruthy();
    expect(firstname.valid).toBeFalsy();
  });

  // last name test starts
  it('should have lastname input field', () => {
    const lastname = component.registerForm.controls.lastname;
    expect(lastname.valid).toBeFalsy();
    expect(lastname.hasError('required')).toBeTruthy();
    expect(lastname.hasError('pattern')).toBeFalsy();
    expect(lastname.hasError('minlength')).toBeFalsy();
    expect(lastname.pristine).toBeTruthy();
  });

  it('lastname input field has value', () => {
    const lastname = component.registerForm.controls.lastname;
    lastname.setValue('Manvi');
    expect(lastname.hasError('required')).toBeFalsy();
    expect(lastname.hasError('pattern')).toBeFalsy();
    expect(lastname.hasError('minlength')).toBeFalsy();
    expect(lastname.valid).toBeTruthy();
  });

  it('lastname input field has numeric value', () => {
    const lastname = component.registerForm.controls.lastname;
    lastname.setValue('Manvi123456');
    expect(lastname.hasError('required')).toBeFalsy();
    expect(lastname.hasError('pattern')).toBeTruthy();
    expect(lastname.hasError('minlength')).toBeFalsy();
    expect(lastname.valid).toBeFalsy();
  });

  it('lastname input field has min length less than 5', () => {
    const lastname = component.registerForm.controls.lastname;
    lastname.setValue('Manu');
    expect(lastname.hasError('required')).toBeFalsy();
    expect(lastname.hasError('pattern')).toBeFalsy();
    expect(lastname.hasError('minlength')).toBeTruthy();
    expect(lastname.valid).toBeFalsy();
  });
  // last name test ends

  // phone no test cases start
  it('Phone number with numeric only', () => {
    const phone = component.registerForm.controls.phone;
    phone.setValue('3652365429');
    expect(phone.hasError('required')).toBeFalsy();
    expect(phone.hasError('pattern')).toBeFalsy();
    expect(phone.hasError('minlength')).toBeFalsy();
    expect(phone.hasError('maxlength')).toBeFalsy();
    expect(phone.valid).toBeTruthy();
  });

  it('Phone number with alpha numeric only', () => {
    const phone = component.registerForm.controls.phone;
    phone.setValue('365adas429');
    expect(phone.hasError('required')).toBeFalsy();
    expect(phone.hasError('pattern')).toBeTruthy();
    expect(phone.hasError('minlength')).toBeFalsy();
    expect(phone.hasError('maxlength')).toBeFalsy();
    expect(phone.valid).toBeFalsy();
  });

  it('Phone number with less than 10', () => {
    const phone = component.registerForm.controls.phone;
    phone.setValue('32651');
    expect(phone.hasError('required')).toBeFalsy();
    expect(phone.hasError('pattern')).toBeFalsy();
    expect(phone.hasError('minlength')).toBeTruthy();
    expect(phone.hasError('maxlength')).toBeFalsy();
    expect(phone.valid).toBeFalsy();
  });
  // phone no test cases ends
  

});
