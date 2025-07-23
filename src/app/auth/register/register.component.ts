import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public showUpdateBtn: boolean = false;
  public registerData = {
    fullname: '',
    email: '',
    gender: '',
    address: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const editedUser = sessionStorage.getItem('editUser');

    if (editedUser) {
      // If editUser exists, show Update button and fill form
      this.registerData = JSON.parse(editedUser);
      this.showUpdateBtn = true;
    } else {
      // Else clear form and show Register button
      this.clearForm();
      this.showUpdateBtn = false;
    }
  }

  onRegister(): void {
    // Save user data to sessionStorage
    sessionStorage.setItem('loggedInUser', JSON.stringify(this.registerData));
    alert("Registration successful!");

    // Remove editUser after register (so next time form is clean)
     sessionStorage.removeItem('editUser');

    this.router.navigate(['/']);
  }

  onUpdate(): void {
    // Update user info in sessionStorage
    sessionStorage.setItem('loggedInUser', JSON.stringify(this.registerData));
    sessionStorage.removeItem('editUser');
    alert("Profile updated!");
    this.router.navigate(['/']);
  }

  clearForm(): void {
    this.registerData = {
      fullname: '',
      email: '',
      gender: '',
      address: ''
    };
  }
}
