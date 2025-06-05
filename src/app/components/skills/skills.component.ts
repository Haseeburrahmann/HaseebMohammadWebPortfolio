// app/components/skills/skills.component.ts - Clean Professional Design
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: Array<{name: string, level: number}>;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills-section">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">Technical Skills</h2>
          <p class="section-subtitle fade-in delay-1">
            Comprehensive expertise across modern development technologies
          </p>
        </div>
        
        <div class="skills-content">
          <div class="skills-overview fade-in delay-2">
            <div class="overview-item">
              <div class="overview-number">20+</div>
              <div class="overview-label">Technologies</div>
            </div>
            <div class="overview-item">
              <div class="overview-number">6</div>
              <div class="overview-label">Categories</div>
            </div>
            <div class="overview-item">
              <div class="overview-number">2+</div>
              <div class="overview-label">Years Experience</div>
            </div>
          </div>
          
          <div class="skills-grid">
            <div *ngFor="let category of skillCategories; let i = index" 
                 class="skill-category"
                 [class]="'fade-in delay-' + (i + 3)">
              
              <div class="category-header">
                <div class="category-icon" [style.background]="category.color">
                  <i [class]="category.icon"></i>
                </div>
                <h3 class="category-name">{{ category.name }}</h3>
              </div>
              
              <div class="category-skills">
                <div *ngFor="let skill of category.skills" class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-level">{{ skill.level * 10 }}%</span>
                  </div>
                  <div class="skill-progress">
                    <div class="progress-bar" 
                         [style.width.%]="skill.level * 10"
                         [style.background]="category.color"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Backend Development',
      icon: 'fas fa-server',
      color: 'linear-gradient(135deg, #00838f, #26a69a)',
      skills: [
        {name: 'C# / .NET 8', level: 9},
        {name: 'ASP.NET Core', level: 9},
        {name: 'Entity Framework Core', level: 9},
        {name: 'SQL Server', level: 9}
      ]
    },
    {
      name: 'Frontend Development',
      icon: 'fas fa-laptop-code',
      color: 'linear-gradient(135deg, #e91e63, #ff5722)',
      skills: [
        {name: 'Angular 17', level: 8},
        {name: 'TypeScript', level: 8},
        {name: 'JavaScript ES6+', level: 8},
        {name: 'HTML5 / CSS3', level: 9}
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      color: 'linear-gradient(135deg, #ff9800, #ffc107)',
      skills: [
        {name: 'Azure DevOps', level: 9},
        {name: 'Azure Services', level: 9},
        {name: 'Docker', level: 8},
        {name: 'CI/CD Pipelines', level: 9}
      ]
    },
    {
      name: 'Database',
      icon: 'fas fa-database',
      color: 'linear-gradient(135deg, #2196f3, #21cbf3)',
      skills: [
        {name: 'SQL Server 2022', level: 9},
        {name: 'T-SQL', level: 9},
        {name: 'Azure SQL Database', level: 9},
        {name: 'Query Optimization', level: 8}
      ]
    },
    {
      name: 'Architecture',
      icon: 'fas fa-sitemap',
      color: 'linear-gradient(135deg, #673ab7, #9c27b0)',
      skills: [
        {name: 'Microservices', level: 8},
        {name: 'SOLID Principles', level: 9},
        {name: 'Clean Architecture', level: 7},
        {name: 'Design Patterns', level: 8}
      ]
    },
    {
      name: 'Tools & Others',
      icon: 'fas fa-tools',
      color: 'linear-gradient(135deg, #4caf50, #8bc34a)',
      skills: [
        {name: 'Visual Studio 2022', level: 9},
        {name: 'Git', level: 9},
        {name: 'Postman', level: 8},
        {name: 'Agile / Scrum', level: 9}
      ]
    }
  ];
}