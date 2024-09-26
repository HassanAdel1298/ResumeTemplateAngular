import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, FormsModule, CommonModule],
  providers: [UserService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  show: boolean = false;
  registrationForm: FormGroup;

  emailExists = false;
  usernameExists = false;

  errormessage: any;
  registrationSuccess: boolean = false;


  constructor(
    private fb: FormBuilder,
    private UserService: UserService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[^\d]*$/),]],
        lastName: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[^\d]*$/),]],
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(/^\S*$/),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^.{3,}@gmail.com$'),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        confirmPassword: ['', Validators.required],
        phoneNumber: ['', Validators.required,Validators.length==11],
        country: ['', Validators.required],
        city: ['', Validators.required],
      }
    );
  }

  onSubmit() {
    this.show = true;

    if (this.registrationForm.valid) {
      this.UserService.RegisterUser(this.registrationForm.value).subscribe({
        next: (data) => {
          this.registrationSuccess = true;
          console.log('registration');
          setTimeout(() => {
            
            this.router.navigate(['/VerifyAccount']);
            this.registrationSuccess = false;
          }, 3000);
         
        },
        error: (err) => {
          console.log(err.error);
          this.errormessage = err.error;
          this.show = false;
        },
      });
    }
  }

  passwordMatchValidator(re: FormGroup) {
    const passwordGet = re.get('password');
    const getconfirmPassword = re.get('confirmPassword');

    if (passwordGet && getconfirmPassword) {
      const password = passwordGet.value;
      const confirmPassword = getconfirmPassword.value;

      if (password !== confirmPassword) {
        getconfirmPassword.setErrors({ passwordMismatch: true });
      } else {
        getconfirmPassword.setErrors(null);
      }
    }
  }
}
