import { Component } from '@angular/core';
import { Login } from '../../viewModel/login';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginForm!: FormGroup; // variable is created of type FormGroup is created
  show:boolean = false;
  constructor( private fb:FormBuilder,private loginService: LoginService, private snackbar:MatSnackBar){

    // setting Form groub inputs with initial Value
    this.loginForm = this.fb.group({
      email: '', 
      password: ''
    });

  }

  // getting User Data
  gettingloginValue():void {
    this.data = {
      email: this.loginForm.get('email')!.value,
      password: this.loginForm.get('password')!.value,
    }
  }
  
  // adding Required for Form Input Used With Form Groub
  emailFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  
  // Intializing New Array To Holdig User Data
  data: Login = {
    email: '', 
    password:''
  }

  // login Data With User Into The API
  login(): void {
    if (this.loginForm.valid) {
      // calling API if Form Data is Valid
      this.loginService.Validatelogin(this.data)
      .subscribe({
        next: res=>{
          this.snackbar.open('تم تسجيل الدخول بنجاح', 'ok', { 'duration': 3000 })
      }, 
      error: ()=> {
        this.snackbar.open('برجاء التأكد من كتابة البيانات بطريقة صحيحة', 'ok', { 'duration': 3000 })
      }
    })

    }
    
  }
}
