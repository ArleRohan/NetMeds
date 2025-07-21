import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public userData: any;
public data: any;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    const user = sessionStorage.getItem('loggedInUser');
    if (user) {
      this.userData = JSON.parse(user);
    }
  }

//   onEdit(data: any) {
//   // Store user data to sessionStorage
//   sessionStorage.setItem('editUser', JSON.stringify(data));

//   // Navigate to register page
//   this.router.navigate(['/auth/register']);
// }

onEdit(): void {
  sessionStorage.setItem('editUser', JSON.stringify(this.userData));
  this.router.navigate(['/auth/register']);
}
}
