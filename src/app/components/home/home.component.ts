// app/components/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="home-container">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text">
            <h1 class="fade-in">Haseeb Ur Rahman Mohammad</h1>
            <h2 class="fade-in delay-1">Full Stack Software Developer</h2>
            
            <p class="fade-in delay-2">
              Specialized in .NET Core, Azure Cloud Services, and modern web technologies with over 2 years 
              of experience building enterprise applications.
            </p>
            
            <div class="cta-buttons fade-in delay-3">
              <a href="#projects" class="btn primary">View Projects</a>
              <a href="#contact" class="btn secondary">Contact Me</a>
            </div>
            
            <div class="tech-stack fade-in delay-4">
              <span>
                <i class="fab fa-dot-circle"></i>
                .NET Core
              </span>
              <span>
                <i class="fab fa-dot-circle"></i>
                Azure
              </span>
              <span>
                <i class="fab fa-dot-circle"></i>
                Angular
              </span>
              <span>
                <i class="fab fa-dot-circle"></i>
                SQL Server
              </span>
            </div>
          </div>
          
          <div class="hero-image fade-in-right">
            <!-- Replace placeholder with your actual image when available -->
            <img src="assets/images/developer-animation.svg" alt="Developer Animation">
            
            <div class="floating-shapes">
              <div class="shape shape-1"></div>
              <div class="shape shape-2"></div>
              <div class="shape shape-3"></div>
              <div class="shape shape-4"></div>
            </div>
          </div>
        </div>
        
        <div class="scroll-indicator fade-in delay-5">
          <span>Scroll Down</span>
          <i class="fas fa-chevron-down bounce"></i>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}