import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NetMeds';

  constructor(private route: Router) {

  }
  
  navigateToAyurvedic() {
    this.route.navigate(['/products/productList/ayurvedicProducts'])
  }
  navigateToUnani() {
    this.route.navigate(['/products/productList/unaniProducts'])
  }
}
