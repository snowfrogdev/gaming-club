import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@gaming-club/api-interfaces';
import { environment } from '../environments/environment';

@Component({
  selector: 'gaming-club-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>(environment.apiUrl + '/hello');
  constructor(private http: HttpClient) {}
}
