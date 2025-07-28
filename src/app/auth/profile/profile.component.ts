import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: any;

  editMode = false;

  profileForm!: FormGroup;

constructor(private fb: FormBuilder, private autSer: AuthService, private router: Router) {}


  // ngOnInit(): void {
  //   const storedUser = sessionStorage.getItem('user');

  //   if (storedUser) {
  //     this.user = JSON.parse(storedUser);
  //   } else {
  //     // ❌ User not logged in – redirect to login
  //     this.router.navigate(['/login']);
  //   }
  // }



  ngOnInit(): void {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.initForm();
    } else {
      this.router.navigate(['/login']);
    }
  }


initForm(): void {
  this.profileForm = this.fb.group({
    fullName: [this.user.fullName, Validators.required],
    email: [this.user.email, [Validators.required, Validators.email]],
    address: [this.user.address, Validators.required],
    gender: [this.user.gender, Validators.required],  // ✅ fixed here
    phone: [
      this.user.phone,
      [Validators.required, Validators.pattern(/^[0-9]{10}$/)]
    ]
  });
}


  enableEdit(): void {
    this.editMode = true;
  }

  cancelEdit(): void {
    this.editMode = false;
    this.initForm(); // reset values
  }

  updateProfile(): void {
    if (this.profileForm.valid) {
      const updatedUser = { ...this.user, ...this.profileForm.value };
      this.autSer.updateUser(updatedUser.id, updatedUser).subscribe(res => {
        alert('Profile updated successfully!');
        this.user = res;
        sessionStorage.setItem('user', JSON.stringify(res));
        this.editMode = false;
      });
    }
  }
}
