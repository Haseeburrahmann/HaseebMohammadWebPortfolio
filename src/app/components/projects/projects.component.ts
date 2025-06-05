// app/components/projects/projects.component.ts - Unified Design System Applied
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  achievements: string[];
  metrics?: ProjectMetrics;
  color: string;
  icon: string;
  category: 'full-stack' | 'machine-learning' | 'data-viz' | 'web-app' | 'mobile';
  status: 'completed' | 'in-progress' | 'maintenance';
  priority: 'featured' | 'standard';
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  images?: string[];
  timeline: string;
}

interface ProjectMetrics {
  performance?: string;
  users?: string;
  codeLines?: string;
  duration?: string;
}

interface ProjectCategory {
  name: string;
  icon: string;
  description: string;
  color: string;
  projects: Project[];
}

interface ProjectSummary {
  icon: string;
  number: string;
  label: string;
  description: string;
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
          <div class="section-divider"></div>
          <p class="section-subtitle fade-in delay-1">
            Innovative solutions showcasing expertise across different technologies and domains
          </p>
        </div>
        
        <!-- Project Summary Stats -->
        <div class="projects-summary fade-in delay-1">
          <div class="grid grid-4 gap-md">
            <div class="summary-card card card-sm" *ngFor="let summary of projectsSummary">
              <div class="card-body text-center">
                <div class="summary-icon">
                  <i [class]="summary.icon"></i>
                </div>
                <div class="summary-number">{{ summary.number }}</div>
                <div class="summary-label">{{ summary.label }}</div>
                <div class="summary-description">{{ summary.description }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Featured Projects (Always Visible) -->
        <div class="featured-projects fade-in delay-2">
          <h3 class="featured-title">
            <i class="fas fa-star"></i>
            Featured Projects
          </h3>
          <div class="grid grid-2 gap-lg">
            <div *ngFor="let project of getFeaturedProjects()" class="featured-project-card card">
              <div class="project-image" [style.background]="project.color">
                <div class="project-icon">
                  <i [class]="project.icon"></i>
                </div>
                <div class="project-overlay">
                  <div class="project-badges">
                    <span class="project-status tag" [class]="getStatusClass(project.status)">
                      {{ getStatusLabel(project.status) }}
                    </span>
                    <span class="project-priority tag tag-accent">Featured</span>
                  </div>
                </div>
              </div>
              
              <div class="card-body">
                <h4 class="project-title">{{ project.title }}</h4>
                <p class="project-description">{{ project.description }}</p>
                
                <!-- Key Metrics -->
                <div class="project-metrics" *ngIf="project.metrics">
                  <div class="metrics-grid">
                    <div class="metric-item" *ngIf="project.metrics.performance">
                      <i class="fas fa-tachometer-alt"></i>
                      <span>{{ project.metrics.performance }}</span>
                    </div>
                    <div class="metric-item" *ngIf="project.metrics.users">
                      <i class="fas fa-users"></i>
                      <span>{{ project.metrics.users }}</span>
                    </div>
                    <div class="metric-item" *ngIf="project.metrics.duration">
                      <i class="fas fa-calendar"></i>
                      <span>{{ project.metrics.duration }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Tech Stack -->
                <div class="tech-stack">
                  <div class="tech-tags">
                    <span *ngFor="let tech of project.technologies.slice(0, 4)" class="tag tech-tag">
                      {{ tech }}
                    </span>
                    <span *ngIf="project.technologies.length > 4" class="tag tech-tag tag-accent">
                      +{{ project.technologies.length - 4 }}
                    </span>
                  </div>
                </div>
                
                <!-- Project Actions -->
                <div class="project-actions">
                  <button (click)="viewProjectDetails(project)" class="btn btn-primary">
                    <i class="fas fa-eye"></i>
                    Details
                  </button>
                  <a *ngIf="project.githubUrl" 
                     [href]="project.githubUrl" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="btn btn-secondary">
                    <i class="fab fa-github"></i>
                    Code
                  </a>
                  <a *ngIf="project.liveUrl" 
                     [href]="project.liveUrl" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="btn btn-accent">
                    <i class="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Projects Categories Tabs -->
        <div class="projects-tabs fade-in delay-3">
          <h3 class="categories-title">All Projects by Category</h3>
          
          <div class="tabs-navigation">
            <button 
              *ngFor="let category of projectCategories; let i = index" 
              [class.active]="activeTab === i"
              (click)="setActiveTab(i)"
              class="tab-button btn"
              [class]="activeTab === i ? 'btn-primary' : 'btn-secondary'"
              type="button"
              [attr.aria-selected]="activeTab === i"
              role="tab">
              <i [class]="category.icon"></i>
              <span class="tab-label">{{ category.name }}</span>
              <span class="projects-count tag tag-accent">{{ category.projects.length }}</span>
            </button>
          </div>
          
          <div class="tabs-content" role="tabpanel">
            <div *ngFor="let category of projectCategories; let i = index" 
                 class="tab-panel"
                 [class.active]="activeTab === i"
                 [attr.aria-hidden]="activeTab !== i">
              
              <!-- Category Header -->
              <div class="category-header card" *ngIf="activeTab === i">
                <div class="card-body">
                  <div class="category-info">
                    <div class="category-icon" [style.background]="category.color">
                      <i [class]="category.icon"></i>
                    </div>
                    <div class="category-details">
                      <h4 class="category-title">{{ category.name }}</h4>
                      <p class="category-description">{{ category.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Projects Grid -->
              <div class="projects-grid">
                <div *ngFor="let project of category.projects; let j = index" 
                     class="project-card card card-sm fade-in"
                     [class]="'delay-' + (j % 4 + 1)">
                  
                  <div class="project-image" [style.background]="project.color">
                    <div class="project-icon">
                      <i [class]="project.icon"></i>
                    </div>
                    <div class="project-overlay">
                      <div class="project-badges">
                        <span class="project-status tag" [class]="getStatusClass(project.status)">
                          {{ getStatusLabel(project.status) }}
                        </span>
                        <span *ngIf="project.priority === 'featured'" class="project-priority tag tag-primary">
                          Featured
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card-body">
                    <h5 class="project-title">{{ project.title }}</h5>
                    <p class="project-description">{{ project.description }}</p>
                    
                    <!-- Achievements -->
                    <div class="project-achievements" *ngIf="project.achievements.length > 0">
                      <h6>Key Achievements:</h6>
                      <ul>
                        <li *ngFor="let achievement of project.achievements.slice(0, 2)">
                          {{ achievement }}
                        </li>
                      </ul>
                    </div>
                    
                    <!-- Tech Stack -->
                    <div class="tech-stack">
                      <div class="tech-tags">
                        <span *ngFor="let tech of project.technologies.slice(0, 3)" class="tag tech-tag">
                          {{ tech }}
                        </span>
                        <span *ngIf="project.technologies.length > 3" class="tag tech-tag tag-accent">
                          +{{ project.technologies.length - 3 }}
                        </span>
                      </div>
                    </div>
                    
                    <!-- Project Actions -->
                    <div class="project-actions">
                      <button (click)="viewProjectDetails(project)" class="btn btn-primary btn-sm">
                        <i class="fas fa-eye"></i>
                        Details
                      </button>
                      <a *ngIf="project.githubUrl" 
                         [href]="project.githubUrl" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         class="btn btn-secondary btn-sm">
                        <i class="fab fa-github"></i>
                        Code
                      </a>
                      <button *ngIf="!project.githubUrl" 
                              class="btn btn-secondary btn-sm" 
                              disabled
                              title="Repository coming soon">
                        <i class="fab fa-github"></i>
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Call to Action -->
        <div class="projects-cta fade-in delay-6">
          <div class="cta-card card">
            <div class="card-body text-center">
              <h3 class="cta-title">
                <i class="fas fa-lightbulb"></i>
                Let's Build Something Amazing Together
              </h3>
              <p class="cta-description">
                Have a project in mind? I'm always excited to work on innovative solutions 
                and tackle new challenges using cutting-edge technologies.
              </p>
              <div class="cta-actions">
                <a href="#contact" class="btn btn-primary btn-lg">
                  <i class="fas fa-envelope"></i>
                  Start a Project
                </a>
                <a href="https://github.com/Haseeburrahmann" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg">
                  <i class="fab fa-github"></i>
                  View All Repositories
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
export class ProjectsComponent implements AfterViewInit {
  activeTab = 0;
  
  projectsSummary: ProjectSummary[] = [
    {
      icon: 'fas fa-project-diagram',
      number: '12+',
      label: 'Total Projects',
      description: 'Diverse portfolio'
    },
    {
      icon: 'fas fa-star',
      number: '4',
      label: 'Featured',
      description: 'Highlighted work'
    },
    {
      icon: 'fab fa-github',
      number: '8',
      label: 'Open Source',
      description: 'Available on GitHub'
    },
    {
      icon: 'fas fa-users',
      number: '1000+',
      label: 'Users Impacted',
      description: 'Real-world solutions'
    }
  ];
  
  projectCategories: ProjectCategory[] = [
    {
      name: 'All Projects',
      icon: 'fas fa-th-large',
      description: 'Complete portfolio showcasing diverse technical expertise',
      color: 'linear-gradient(135deg, #00838f, #26a69a)',
      projects: [
        {
          title: 'Enterprise Store Management System',
          description: 'Comprehensive full-stack application for retail operations with advanced inventory control and analytics.',
          fullDescription: 'A sophisticated enterprise-grade store management system built with .NET 7 and Angular 16, featuring real-time inventory tracking, sales analytics, customer relationship management, and automated reporting capabilities.',
          technologies: ['C#', '.NET 7', 'SQL Server 2022', 'Entity Framework Core', 'Angular 16', 'TypeScript', 'Bootstrap 5', 'Azure DevOps'],
          achievements: [
            'Developed comprehensive inventory control system with real-time tracking',
            'Led development team of 4 using Scrum methodology',
            'Implemented automated reporting reducing manual work by 60%',
            'Created intuitive UI improving operational efficiency by 35%'
          ],
          metrics: {
            performance: '40% faster',
            users: '50+ staff',
            duration: '6 months'
          },
          color: 'linear-gradient(135deg, #ff5722 0%, #ff9800 100%)',
          icon: 'fas fa-store',
          category: 'full-stack',
          status: 'completed',
          priority: 'featured',
          githubUrl: 'https://github.com/Haseeburrahmann/store-management-system',
          timeline: 'Jan 2024 - Jun 2024'
        },
        {
          title: 'AI Movie Recommendation Engine',
          description: 'Machine learning-powered recommendation system with advanced algorithms and interactive visualizations.',
          fullDescription: 'An intelligent movie recommendation system utilizing Random Forest and K-means clustering algorithms to provide personalized movie suggestions based on user preferences and viewing history.',
          technologies: ['Python', '.NET 8', 'Azure ML', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Azure Functions'],
          achievements: [
            'Implemented Random Forest and K-means clustering algorithms',
            'Achieved 85% prediction accuracy for user preferences',
            'Processed dataset with 100K+ movie ratings',
            'Enhanced model performance through advanced feature engineering'
          ],
          metrics: {
            performance: '85% accuracy',
            users: '1000+ ratings',
            duration: '4 months'
          },
          color: 'linear-gradient(135deg, #673ab7 0%, #9c27b0 100%)',
          icon: 'fas fa-film',
          category: 'machine-learning',
          status: 'completed',
          priority: 'featured',
          githubUrl: 'https://github.com/Haseeburrahmann/movie-recommendation-ml',
          demoUrl: 'https://movie-rec-demo.azurewebsites.net',
          timeline: 'Sep 2023 - Dec 2023'
        },
        {
          title: 'Interactive Data Visualization Dashboard',
          description: 'Advanced dashboard for large-scale data visualization with optimized performance and real-time updates.',
          fullDescription: 'A high-performance data visualization platform built with D3.js and modern web technologies, capable of rendering complex datasets with millions of data points while maintaining smooth user interactions.',
          technologies: ['JavaScript', 'TypeScript', 'D3.js', 'HTML5', 'CSS3', 'Chart.js', 'Node.js', 'Express'],
          achievements: [
            'Designed advanced visualization techniques for large datasets',
            'Reduced rendering time complexity by 60% for 1M+ data points',
            'Built reusable visualization components library',
            'Implemented real-time data streaming capabilities'
          ],
          metrics: {
            performance: '60% faster',
            codeLines: '15K+ lines',
            duration: '3 months'
          },
          color: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
          icon: 'fas fa-chart-line',
          category: 'data-viz',
          status: 'completed',
          priority: 'featured',
          githubUrl: 'https://github.com/Haseeburrahmann/data-visualization-dashboard',
          liveUrl: 'https://data-viz-dashboard.netlify.app',
          timeline: 'Mar 2024 - May 2024'
        },
        {
          title: 'Cloud-Native Microservices Platform',
          description: 'Scalable microservices architecture with .NET 8, Azure services, and comprehensive DevOps integration.',
          fullDescription: 'A robust microservices platform demonstrating modern cloud-native architecture patterns, including service discovery, API gateway, distributed caching, and comprehensive monitoring.',
          technologies: ['.NET 8', 'C# 11', 'Azure App Services', 'Docker', 'Kubernetes', 'Azure DevOps', 'SQL Server', 'Redis'],
          achievements: [
            'Architected microservices using SOLID principles and clean architecture',
            'Implemented CI/CD pipelines with 99.9% deployment success rate',
            'Achieved 40% improvement in system scalability',
            'Established comprehensive logging and monitoring'
          ],
          metrics: {
            performance: '40% scalable',
            users: '500+ concurrent',
            duration: '8 months'
          },
          color: 'linear-gradient(135deg, #00838f 0%, #26a69a 100%)',
          icon: 'fas fa-cloud',
          category: 'web-app',
          status: 'completed',
          priority: 'featured',
          githubUrl: 'https://github.com/Haseeburrahmann/microservices-platform',
          timeline: 'Jul 2023 - Feb 2024'
        }
      ]
    },
    {
      name: 'Full Stack',
      icon: 'fas fa-layers',
      description: 'End-to-end applications with modern frontend and robust backend architecture',
      color: 'linear-gradient(135deg, #ff5722, #ff9800)',
      projects: []
    },
    {
      name: 'Machine Learning',
      icon: 'fas fa-brain',
      description: 'AI-powered solutions using advanced algorithms and data science techniques',
      color: 'linear-gradient(135deg, #673ab7, #9c27b0)',
      projects: []
    },
    {
      name: 'Data Visualization',
      icon: 'fas fa-chart-bar',
      description: 'Interactive dashboards and data presentation tools',
      color: 'linear-gradient(135deg, #2196f3, #21cbf3)',
      projects: []
    },
    {
      name: 'Web Applications',
      icon: 'fas fa-globe',
      description: 'Modern web applications and cloud-native solutions',
      color: 'linear-gradient(135deg, #4caf50, #8bc34a)',
      projects: []
    }
  ];
  
  ngAfterViewInit(): void {
    // Distribute projects into categories
    this.distributeProjects();
  }
  
  setActiveTab(index: number): void {
    this.activeTab = index;
  }
  
  getFeaturedProjects(): Project[] {
    return this.projectCategories[0].projects.filter(project => project.priority === 'featured');
  }
  
  getStatusClass(status: string): string {
    const statusClasses = {
      'completed': 'tag-primary',
      'in-progress': 'tag-accent',
      'maintenance': 'tag-secondary'
    };
    return statusClasses[status as keyof typeof statusClasses] || 'tag-secondary';
  }
  
  getStatusLabel(status: string): string {
    const statusLabels = {
      'completed': 'Completed',
      'in-progress': 'In Progress',
      'maintenance': 'Maintenance'
    };
    return statusLabels[status as keyof typeof statusLabels] || status;
  }
  
  viewProjectDetails(project: Project): void {
    // Create detailed project modal/popup
    const details = `
🚀 ${project.title}

📅 Timeline: ${project.timeline}

📝 Description:
${project.fullDescription}

✨ Key Achievements:
${project.achievements.map(achievement => `• ${achievement}`).join('\n')}

🛠️ Technologies:
${project.technologies.join(' • ')}

📊 Status: ${this.getStatusLabel(project.status)}

${project.metrics ? `📈 Metrics:
${project.metrics.performance ? `• Performance: ${project.metrics.performance}` : ''}
${project.metrics.users ? `• Users: ${project.metrics.users}` : ''}
${project.metrics.duration ? `• Duration: ${project.metrics.duration}` : ''}` : ''}

🔗 Links:
${project.githubUrl ? `• GitHub: ${project.githubUrl}` : ''}
${project.liveUrl ? `• Live Demo: ${project.liveUrl}` : ''}
${project.demoUrl ? `• Demo: ${project.demoUrl}` : ''}
    `;
    
    alert(details);
  }
  
  private distributeProjects(): void {
    const allProjects = this.projectCategories[0].projects;
    
    // Distribute projects to appropriate categories
    this.projectCategories.forEach(category => {
      if (category.name !== 'All Projects') {
        category.projects = allProjects.filter(project => {
          switch (category.name) {
            case 'Full Stack':
              return project.category === 'full-stack';
            case 'Machine Learning':
              return project.category === 'machine-learning';
            case 'Data Visualization':
              return project.category === 'data-viz';
            case 'Web Applications':
              return project.category === 'web-app';
            default:
              return false;
          }
        });
      }
    });
  }
}