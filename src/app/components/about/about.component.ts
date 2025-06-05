// app/components/about/about.component.ts - Clean Professional Design
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-section">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">About Me</h2>
          <p class="section-subtitle fade-in delay-1">
            Get to know more about my background and expertise
          </p>
        </div>
        
        <div class="about-content">
          <div class="about-info fade-in delay-2">
            <div class="info-card">
              <h3>Software Developer</h3>
              <p class="description">
                I'm a passionate Software Developer with <strong>2+ years</strong> of professional 
                experience in developing Web Applications, Microservices, and enterprise solutions 
                using <strong>.NET 8, Azure Cloud Services</strong>, and modern web technologies.
              </p>
              <p class="description">
                My expertise includes architecting microservices-based applications, implementing 
                CI/CD pipelines, and developing responsive Single Page Applications using Angular. 
                I have strong experience in SQL Server database development and cloud-native 
                application development.
              </p>
              
              <div class="highlights">
                <div class="highlight-item">
                  <i class="fas fa-chart-line"></i>
                  <span>40% Performance Improvement</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-rocket"></i>
                  <span>99.9% CI/CD Success Rate</span>
                </div>
                <div class="highlight-item">
                  <i class="fas fa-code-branch"></i>
                  <span>6+ Major Projects</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-details fade-in delay-3">
            <div class="detail-card education-card">
              <div class="card-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="card-content">
                <h4>Education</h4>
                <h5>Master of Science: Information Technology</h5>
                <p>Florida International University</p>
                <div class="card-meta">
                  <span class="period">Aug 2022 - Dec 2023</span>
                  <span class="gpa">GPA: 3.75/4.0</span>
                </div>
              </div>
            </div>
            
            <div class="detail-card contact-card">
              <div class="card-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="card-content">
                <h4>Location</h4>
                <p>Fort Lauderdale, Florida</p>
                <div class="contact-links">
                  <a href="mailto:mohd.haseeb.4201@gmail.com">
                    <i class="fas fa-envelope"></i>
                    Email
                  </a>
                  <a href="tel:+13054278756">
                    <i class="fas fa-phone"></i>
                    Phone
                  </a>
                </div>
              </div>
            </div>
            
            <div class="action-buttons">
              <a href="#contact" class="btn-primary">
                <i class="fas fa-envelope"></i>
                Get In Touch
              </a>
              <a href="/assets/resume.pdf" target="_blank" class="btn-secondary">
                <i class="fas fa-download"></i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}