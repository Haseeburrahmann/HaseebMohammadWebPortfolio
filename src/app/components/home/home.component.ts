// app/components/home/home.component.ts - Clean Professional Design
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="greeting fade-in">
              <span class="hello">Hello, I'm</span>
              <h1 class="name">Haseeb Ur Rahman Mohammad</h1>
              <p class="title">Software Developer</p>
            </div>
            
            <p class="description fade-in delay-1">
              Passionate Software Developer with 2+ years of experience building 
              scalable web applications using .NET, Azure, and modern frontend technologies.
            </p>
            
            <div class="key-skills fade-in delay-2">
              <span class="skill-tag">.NET 8</span>
              <span class="skill-tag">Azure Cloud</span>
              <span class="skill-tag">Angular</span>
              <span class="skill-tag">Microservices</span>
            </div>
            
            <div class="cta-buttons fade-in delay-3">
              <a href="#projects" class="btn-primary">
                <i class="fas fa-rocket"></i>
                View Projects
              </a>
              <a href="#contact" class="btn-secondary">
                <i class="fas fa-envelope"></i>
                Contact Me
              </a>
            </div>
          </div>
          
          <div class="hero-visual fade-in delay-1">
            <div class="profile-card">
              <div class="profile-image">
                <div class="avatar">
                  <i class="fas fa-user-tie"></i>
                </div>
              </div>
              <div class="profile-stats">
                <div class="stat">
                  <span class="number">2+</span>
                  <span class="label">Years</span>
                </div>
                <div class="stat">
                  <span class="number">15+</span>
                  <span class="label">Skills</span>
                </div>
                <div class="stat">
                  <span class="number">6</span>
                  <span class="label">Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="scroll-indicator">
          <div class="scroll-arrow">
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}