import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userLoginForm:any;

  constructor(private router:Router ,
    private fb:FormBuilder , private authSer:AuthService){
      this.userLoginForm = this.fb.group({
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(4)]]
      })
    }

// onSubmit(){
//   console.log(this.userLoginForm.value);
// }

 onSubmit(): void {
  if (this.userLoginForm.valid) {
    const { email, password } = this.userLoginForm.value;

    console.log('Form values:', this.userLoginForm.value);

    this.authSer.getAllUsers().subscribe(users => {
      console.log('All users:', users);  //  move this inside the subscribe

      const matchedUser = users.find(
        (user: any) => user.email === email && user.password === password
      );

      if (matchedUser) {
        alert('Login successful!');
        sessionStorage.setItem('user', JSON.stringify(matchedUser));
        this.router.navigate(['/home']);
      } else {
        alert('Invalid email or password!');
      }
    });
  } else {
    this.userLoginForm.markAllAsTouched();
  }
}


}
