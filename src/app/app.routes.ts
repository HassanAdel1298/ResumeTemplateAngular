import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';

export const routes: Routes = [
    {path:"",redirectTo:"Register",pathMatch:"full"},
    {path:"Register",component:RegisterComponent},
    {path:"Login",component:LoginComponent},
    {path:"VerifyAccount",component:VerifyAccountComponent},
    
];
