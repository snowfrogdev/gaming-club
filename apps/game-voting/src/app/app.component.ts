import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'gaming-club-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  providers = [AuthProvider.EmailAndPassword, AuthProvider.Google]
  constructor(private http: HttpClient) {}
}
