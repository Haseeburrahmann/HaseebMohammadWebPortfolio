// app/components/projects/projects.component.ts - Clean Professional Design
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  category: string;
  status: 'completed' | 'in-progress';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-section">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">Featured Projects</h2>
          <p class="section-subtitle fade-in delay-1">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>
        
        <div class="projects-content">
          <div class="projects-overview fade-in delay-2">
            <div class="overview-item">
              <div class="overview-number">12+</div>
              <div class="overview-label">Total Projects</div>
            </div>
            <div class="overview-item">
              <div class="overview-number">4</div>
              <div class="overview-label">Featured</div>
            </div>
            <div class="overview-item">
              <div class="overview-number">1000+</div>
              <div class="overview-label">Users Impacted</div>
            </div>
          </div>
          
          <div class="projects-grid">
            <div *ngFor="let project of projects; let i = index" 
                 class="project-card"
                 [class]="'fade-in delay-' + (i + 3)">
              
              <div class="project-header">
                <div class="project-icon" [style.background]="project.color">
                  <i [class]="project.icon"></i>
                </div>
                <div class="project-meta">
                  <span class="project-status" [class]="getStatusClass(project.status)">
                    {{ getStatusLabel(project.status) }}
                  </span>
                  <span *ngIf="project.featured" class="featured-badge">Featured</span>
                </div>
              </div>
              
              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                
                <div class="project-achievements">
                  <ul class="achievement-list">
                    <li *ngFor="let achievement of project.achievements.slice(0, 2)">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
                
                <div class="project-technologies">
                  <span *ngFor="let tech of project.technologies.slice(0, 4)" class="tech-tag">
                    {{ tech }}
                  </span>
                  <span *ngIf="project.technologies.length > 4" class="tech-tag more">
                    +{{ project.technologies.length - 4 }}
                  </span>
                </div>
              </div>
              
              <div class="project-actions">
                <a *ngIf="project.githubUrl" 
                   [href]="project.githubUrl" 
                   target="_blank" 
                   class="btn-secondary">
                  <i class="fab fa-github"></i>
                  Code
                </a>
                <a *ngIf="project.liveUrl" 
                   [href]="project.liveUrl" 
                   target="_blank" 
                   class="btn-primary">
                  <i class="fas fa-external-link-alt"></i>
                  Live Demo
                </a>
                <button *ngIf="!project.githubUrl && !project.liveUrl" 
                        class="btn-secondary" 
                        disabled>
                  <i class="fas fa-clock"></i>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
          
          <div class="projects-cta fade-in delay-7">
            <div class="cta-content">
              <h3>Let's Build Something Amazing</h3>
              <p>Have a project in mind? I'm always excited to work on innovative solutions.</p>
              <div class="cta-buttons">
                <a href="#contact" class="btn-primary">
                  <i class="fas fa-envelope"></i>
                  Start a Project
                </a>
                <a href="https://github.com/Haseeburrahmann" target="_blank" class="btn-secondary">
                  <i class="fab fa-github"></i>
                  View All Repos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Enterprise Store Management System',
      description: 'Comprehensive full-stack application for retail operations with advanced inventory control and real-time analytics.',
      technologies: ['C#', '.NET 7', 'SQL Server', 'Angular 16', 'Azure DevOps'],
      achievements: [
        'Developed comprehensive inventory control system with real-time tracking',
        'Implemented automated reporting reducing manual work by 60%'
      ],
      category: 'Full Stack',
      status: 'completed',
      featured: true,
      githubUrl: 'https://github.com/Haseeburrahmann/store-management-system',
      icon: 'fas fa-store',
      color: 'linear-gradient(135deg, #ff5722, #ff9800)'
    },
    {
      title: 'AI Movie Recommendation Engine',
      description: 'Machine learning-powered recommendation system using Random Forest and K-means clustering algorithms.',
      technologies: ['Python', '.NET 8', 'Azure ML', 'Scikit-learn', 'Pandas'],
      achievements: [
        'Achieved 85% prediction accuracy for user preferences',
        'Processed dataset with 100K+ movie ratings'
      ],
      category: 'Machine Learning',
      status: 'completed',
      featured: true,
      githubUrl: 'https://github.com/Haseeburrahmann/movie-recommendation-ml',
      liveUrl: 'https://movie-rec-demo.azurewebsites.net',
      icon: 'fas fa-film',
      color: 'linear-gradient(135deg, #673ab7, #9c27b0)'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Advanced dashboard for large-scale data visualization with optimized performance and real-time updates.',
      technologies: ['JavaScript', 'D3.js', 'Chart.js', 'Node.js', 'Express'],
      achievements: [
        'Reduced rendering time by 60% for 1M+ data points',
        'Built reusable visualization components library'
      ],
      category: 'Data Visualization',
      status: 'completed',
      featured: true,
      githubUrl: 'https://github.com/Haseeburrahmann/data-visualization-dashboard',
      liveUrl: 'https://data-viz-dashboard.netlify.app',
      icon: 'fas fa-chart-line',
      color: 'linear-gradient(135deg, #2196f3, #21cbf3)'
    },
    {
      title: 'Cloud-Native Microservices Platform',
      description: 'Scalable microservices architecture with .NET 8, Azure services, and comprehensive DevOps integration.',
      technologies: ['.NET 8', 'Azure', 'Docker', 'Kubernetes', 'SQL Server'],
      achievements: [
        'Achieved 40% improvement in system scalability',
        'Implemented CI/CD pipelines with 99.9% success rate'
      ],
      category: 'Cloud Architecture',
      status: 'in-progress',
      featured: true,
      githubUrl: 'https://github.com/Haseeburrahmann/microservices-platform',
      icon: 'fas fa-cloud',
      color: 'linear-gradient(135deg, #00838f, #26a69a)'
    }
  ];
  
  getStatusClass(status: string): string {
    return status === 'completed' ? 'status-completed' : 'status-progress';
  }
  
  getStatusLabel(status: string): string {
    return status === 'completed' ? 'Completed' : 'In Progress';
  }
}