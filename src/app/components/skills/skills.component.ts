// app/components/skills/skills.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-10 for skill proficiency
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills-container">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">Technical Skills</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="skills-tabs">
          <div class="tabs-navigation fade-in delay-1">
            <button 
              *ngFor="let category of skillCategories; let i = index" 
              [class.active]="activeTab === i"
              (click)="setActiveTab(i)"
              class="tab-button"
            >
              <i [class]="category.icon"></i>
              <span>{{category.name}}</span>
            </button>
          </div>
          
          <div class="tabs-content">
            <div *ngFor="let category of skillCategories; let i = index" 
                 class="tab-panel"
                 [class.active]="activeTab === i">
              
              <div class="skills-grid">
                <div *ngFor="let skill of category.skills; let j = index" 
                     class="skill-card fade-in" 
                     [class]="'delay-' + (j % 5 + 1)">
                  <div class="skill-header">
                    <span class="skill-name">{{skill.name}}</span>
                    <span class="skill-level">{{skill.level * 10}}%</span>
                  </div>
                  
                  <div class="skill-bar-container">
                    <div class="skill-bar" [style.--width.%]="skill.level * 10"></div>
                  </div>
                  
                  <div class="skill-badges">
                    <span *ngIf="skill.level >= 9" class="skill-badge expert">Expert</span>
                    <span *ngIf="skill.level >= 7 && skill.level < 9" class="skill-badge advanced">Advanced</span>
                    <span *ngIf="skill.level >= 5 && skill.level < 7" class="skill-badge intermediate">Intermediate</span>
                    <span *ngIf="skill.level < 5" class="skill-badge beginner">Beginner</span>
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
export class SkillsComponent implements AfterViewInit {
  activeTab = 0;
  
  skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'C#', level: 9 },
        { name: 'JavaScript', level: 8 },
        { name: 'TypeScript', level: 8 },
        { name: 'Python', level: 7 },
        { name: 'Java', level: 7 }
      ]
    },
    {
      name: 'Frameworks & Libraries',
      icon: 'fas fa-layer-group',
      skills: [
        { name: '.NET Core', level: 9 },
        { name: 'ASP.NET Core MVC', level: 9 },
        { name: 'Angular', level: 8 },
        { name: 'React', level: 7 },
        { name: 'Entity Framework Core', level: 8 },
        { name: 'Bootstrap', level: 8 }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      skills: [
        { name: 'Azure DevOps', level: 9 },
        { name: 'Azure App Services', level: 9 },
        { name: 'Container Instances', level: 8 },
        { name: 'Azure AD', level: 8 },
        { name: 'Docker', level: 8 },
        { name: 'Kubernetes', level: 7 },
        { name: 'CI/CD', level: 9 }
      ]
    },
    {
      name: 'Databases',
      icon: 'fas fa-database',
      skills: [
        { name: 'SQL Server', level: 9 },
        { name: 'Azure SQL Database', level: 9 },
        { name: 'MongoDB', level: 7 },
        { name: 'Redis', level: 7 }
      ]
    },
    {
      name: 'Tools & Methodologies',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', level: 9 },
        { name: 'Agile/Scrum', level: 9 },
        { name: 'Microservices Architecture', level: 8 },
        { name: 'Test-Driven Development', level: 8 },
        { name: 'SOLID Principles', level: 9 },
        { name: 'Jenkins', level: 7 },
        { name: 'Selenium', level: 7 },
        { name: 'JMeter', level: 7 }
      ]
    }
  ];
  
  setActiveTab(index: number): void {
    this.activeTab = index;
    
    // Force re-render the skill bars
    setTimeout(() => {
      this.initializeSkillBars();
    }, 50);
  }
  
  ngAfterViewInit(): void {
    // Initialize skill bars after view is initialized
    setTimeout(() => {
      this.initializeSkillBars();
    }, 100);
  }
  
  private initializeSkillBars(): void {
    // Force a repaint of skill bars by accessing their offsetHeight
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      // Force reflow with proper type casting
      const htmlElement = bar as HTMLElement;
      void htmlElement.offsetHeight;
    });
  }
}