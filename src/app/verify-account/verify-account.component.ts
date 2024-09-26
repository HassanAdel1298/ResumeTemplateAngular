import { Component } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verify-account',
  standalone: true,
  imports: [ RouterLink,RouterModule,HttpClientModule,ReactiveFormsModule,CommonModule ],
  providers:[UserService],
  templateUrl: './verify-account.component.html',
  styleUrl: './verify-account.component.css'
})
export class VerifyAccountComponent {
  show:boolean=false;
  verifyForm: FormGroup;
  errormessage : any;

  constructor(private fb: FormBuilder, private UserService: UserService, private router: Router) {
    this.verifyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  onSubmit() {
    this.show=true;
    if (this.verifyForm.valid) {

      this.UserService.VerifyAccount(this.verifyForm.value).subscribe({
        next: (data) => {
 
            this.router.navigate(['/Login']);


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
