import { Component } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterLink,RouterModule,HttpClientModule,ReactiveFormsModule,CommonModule ],
  providers:[UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  show:boolean=false;
  loginForm: FormGroup;
  errormessage : any;

  constructor(private fb: FormBuilder, private UserService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  onSubmit() {
    this.show=true;
    if (this.loginForm.valid) {

      this.UserService.LoginUser(this.loginForm.value).subscribe({
        next: (data) => {

          const DataUser = data;
         
          localStorage.setItem('DataUser', JSON.stringify(DataUser));

        },
        error: (err) => {
          console.log(err.error);
          this.errormessage = err.error;
          this.show=false;
        },
      });
      
      
      
    }
  }


}
