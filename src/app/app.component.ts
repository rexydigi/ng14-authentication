import { TokenStorageService } from './_services/token-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn = false;
  isLogging = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  login(): void {
    this.isLogging = true;
    this.httpRequest().then(()=>window.location.reload());
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  private httpRequest(): Promise<Boolean> {
    return new Promise<Boolean>((resolve) => {
      setTimeout(() => {
        this.tokenStorageService.saveToken('token');
        resolve(true);
      }, 2000);
    });
  }
}
