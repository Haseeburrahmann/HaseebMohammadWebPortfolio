// app/components/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="about-container">
      <div class="section-header">
        <h2>About Me</h2>
        <div class="section-divider"></div>
      </div>
      
      <div class="about-content">
        <div class="profile-image">
          <!-- You can add a profile image here -->
          <div class="placeholder-image"></div>
        </div>
        
        <div class="profile-info">
          <h3>Haseeb Ur Rahman Mohammad</h3>
          <h4>Full Stack Software Developer</h4>
          
          <div class="bio">
            <p>I'm a Full Stack Software Developer with over 2 years of experience in designing and implementing 
            enterprise-level applications using .NET Core, Azure Cloud Services, and modern web technologies.</p>
            
            <p>My expertise includes cloud-native development using Microsoft Azure, implementing microservices 
            architecture, and following Agile methodologies and DevOps practices.</p>
            
            <p>I am passionate about creating efficient, scalable, and user-friendly applications that solve 
            complex business problems.</p>
          </div>
          
          <div class="education">
            <h4>Education</h4>
            <div class="education-item">
              <h5>Master of Science: Information Technology</h5>
              <p>Florida International University - Florida</p>
              <p class="gpa">GPA: 3.75/4.0</p>
              <p class="graduation-date">December 2023</p>
            </div>
          </div>
          
          <div class="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <i class="fas fa-phone"></i>
                <span>+1 305-427-8756</span>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <span>mohd.haseeb.4201gmail.com</span>
              </li>
            </ul>
            <div class="cta">
              <a routerLink="/contact" class="btn primary">Get In Touch</a>
              <a href="/assets/resume.pdf" target="_blank" class="btn secondary">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent { }