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
      <div class="container">
        <div class="section-header">
          <h2>About Me</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="about-content">
          <div class="profile-image">
            <div class="placeholder-image" aria-label="Professional headshot placeholder"></div>
          </div>
          
          <div class="profile-info">
            <h3>Haseeb Ur Rahman Mohammad</h3>
            <h4>Software Developer</h4>
            
            <div class="bio">
              <p>I'm a Software Developer with around 2+ years of professional experience in developing 
              Web Applications, Web Services, Microservices, and implementing robust enterprise solutions 
              using .NET 6/7/8, Azure Cloud Services, and modern web technologies.</p>
              
              <p>My expertise includes architecting microservices-based applications, implementing CI/CD 
              pipelines with Azure DevOps, and developing responsive Single Page Applications using Angular. 
              I have strong experience in SQL Server database development and cloud-native application 
              development with Azure services.</p>
              
              <p>I am passionate about creating efficient, scalable solutions and collaborating with 
              cross-functional teams using Agile methodologies to deliver high-quality software 
              that solves complex business problems.</p>
            </div>
            
            <div class="education">
              <h4>Education</h4>
              <div class="education-item">
                <h5>Master of Science: Information Technology</h5>
                <p>Florida International University - Florida</p>
                <p class="gpa">GPA: 3.75/4.0</p>
                <p class="graduation-date">August 2022 - December 2023</p>
              </div>
            </div>
            
            <div class="contact-info">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <i class="fas fa-phone" aria-hidden="true"></i>
                  <span>+1 305-427-8756</span>
                </li>
                <li>
                  <i class="fas fa-envelope" aria-hidden="true"></i>
                  <span>mohd.haseeb.4201&#64;gmail.com</span>
                </li>
                <li>
                  <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <span>Fort Lauderdale, Florida</span>
                </li>
              </ul>
              <div class="cta">
                <a href="#contact" class="btn primary" role="button">Get In Touch</a>
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" class="btn secondary" role="button">Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent { }