import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private userService: UserService, private router: Router) {}  // Check if the user is logged in based on the session variable
  isUserLoggedIn(): boolean {
    return sessionStorage.getItem('user_id') === null;
  }

  // Implement the logout logic
  logout(): void {
    sessionStorage.removeItem('user_id');
    this.userService.logout().subscribe(() => {
      // Successfully logged out
      // You can clear any user-related data or perform additional logout actions here

      // Redirect to the login page or any other desired page
      this.router.navigate(['/login']);
    });
  }
}
