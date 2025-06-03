// src/main.ts - Fixed to remove router that was causing infinite redirect
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations()
    // Removed router since this is a single-page application
    // Navigation is handled by smooth scrolling to sections
  ]
})
.catch(err => console.error(err));