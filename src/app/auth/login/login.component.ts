import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  phoneNumber: string = '';
  enteredOTP: string = '';
  generatedOTP: string = '';
  showOtpBox: boolean = false;

  constructor(private router: Router) {}

  // Generate random 6-digit OTP
  generateOTP(length: number = 6): string {
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10); // Random digit 0-9
    }
    return otp;
  }

  // Called when user clicks "USE OTP"
  onUseOtp() {
    if (!this.phoneNumber || this.phoneNumber.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    this.generatedOTP = this.generateOTP();
    sessionStorage.setItem("userOTP", this.generatedOTP);

    // Debug logs
    console.log("Generated OTP:", this.generatedOTP);
    alert("Your OTP is: " + this.generatedOTP);

    this.showOtpBox = true;
  }

  // Called when user clicks "Verify OTP"
  verifyOTP() {
    const storedOTP = sessionStorage.getItem("userOTP")?.trim();
    const entered = this.enteredOTP.trim();

    // Debug logs
    console.log("Stored OTP:", storedOTP);
    console.log("Entered OTP:", entered);

    if (entered === storedOTP) {
      alert("OTP verified successfully!");
      this.router.navigate(['/auth/register']);  // Navigate to /register route
    } else {
      alert("Invalid OTP. Please try again.");
    }
  }
}