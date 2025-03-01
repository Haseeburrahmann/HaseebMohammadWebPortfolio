// app/components/contact/contact.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="contact-container">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">Contact Me</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="contact-wrapper">
          <div class="contact-info fade-in-left">
            <h3>Let's Connect</h3>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
            
            <div class="contact-methods">
              <div *ngFor="let method of contactMethods; let i = index" 
                   class="contact-method-card fade-in" 
                   [class]="'delay-' + (i + 1)">
                <div class="icon-wrapper">
                  <i [class]="method.icon"></i>
                </div>
                <div class="method-details">
                  <h4>{{method.title}}</h4>
                  <a *ngIf="method.link" [href]="method.link">{{method.value}}</a>
                  <p *ngIf="!method.link">{{method.value}}</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h4>Find Me On</h4>
              <div class="social-icons">
                <a href="https://linkedin.com/" target="_blank" class="social-icon" title="LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/" target="_blank" class="social-icon" title="GitHub">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" class="social-icon" title="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://dev.to/" target="_blank" class="social-icon" title="Dev.to">
                  <i class="fab fa-dev"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="contact-form-wrapper fade-in-right">
            <div class="form-card">
              <div class="form-header">
                <h3>Send Me a Message</h3>
                <p>Have a question or want to work together? Drop me a message!</p>
              </div>
              
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
                <div class="form-group">
                  <label for="name">
                    <i class="fas fa-user"></i> Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name" 
                    placeholder="John Doe"
                    [class.invalid]="submitted && formControls['name'].errors"
                  >
                  <div *ngIf="submitted && formControls['name'].errors" class="error-message">
                    <div *ngIf="formControls['name'].errors && formControls['name'].errors['required']">
                      <i class="fas fa-exclamation-circle"></i> Name is required
                    </div>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="email">
                    <i class="fas fa-envelope"></i> Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email" 
                    placeholder="john.doe@example.com"
                    [class.invalid]="submitted && formControls['email'].errors"
                  >
                  <div *ngIf="submitted && formControls['email'].errors" class="error-message">
                    <div *ngIf="formControls['email'].errors && formControls['email'].errors['required']">
                      <i class="fas fa-exclamation-circle"></i> Email is required
                    </div>
                    <div *ngIf="formControls['email'].errors && formControls['email'].errors['email']">
                      <i class="fas fa-exclamation-circle"></i> Please enter a valid email
                    </div>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="subject">
                    <i class="fas fa-tag"></i> Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    formControlName="subject" 
                    placeholder="Job Opportunity"
                    [class.invalid]="submitted && formControls['subject'].errors"
                  >
                  <div *ngIf="submitted && formControls['subject'].errors" class="error-message">
                    <div *ngIf="formControls['subject'].errors && formControls['subject'].errors['required']">
                      <i class="fas fa-exclamation-circle"></i> Subject is required
                    </div>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="message">
                    <i class="fas fa-comment-alt"></i> Your Message
                  </label>
                  <textarea 
                    id="message" 
                    formControlName="message" 
                    rows="5" 
                    placeholder="Hello, I would like to talk about..."
                    [class.invalid]="submitted && formControls['message'].errors"
                  ></textarea>
                  <div *ngIf="submitted && formControls['message'].errors" class="error-message">
                    <div *ngIf="formControls['message'].errors && formControls['message'].errors['required']">
                      <i class="fas fa-exclamation-circle"></i> Message is required
                    </div>
                  </div>
                </div>
                
                <button type="submit" class="submit-btn" [disabled]="isSubmitting">
                  <span *ngIf="!isSubmitting">
                    <i class="fas fa-paper-plane"></i> Send Message
                  </span>
                  <span *ngIf="isSubmitting" class="spinner">
                    <i class="fas fa-circle-notch fa-spin"></i> Sending...
                  </span>
                </button>
              </form>
              
              <div *ngIf="formSubmitted" class="success-message">
                <i class="fas fa-check-circle"></i>
                <h4>Thank you for your message!</h4>
                <p>I'll get back to you as soon as possible.</p>
                <button (click)="resetForm()" class="reset-btn">Send Another Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  isSubmitting = false;
  formSubmitted = false;
  
  contactMethods: ContactMethod[] = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'mohd.haseeb.4201@gmail.com',
      link: 'mailto:mohd.haseeb.4201@gmail.com'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Phone',
      value: '+1 305-427-8756',
      link: 'tel:+13054278756'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Fort Lauderdale, Florida',
    }
  ];
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.initForm();
  }
  
  // Initialize the form with validators
  private initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  // Getter for easy access to form controls
  get formControls(): { [key: string]: AbstractControl } { 
    return this.contactForm.controls; 
  }
  
  onSubmit(): void {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    // Simulate form submission with a loading state
    this.isSubmitting = true;
    
    // Simulate API call delay
    setTimeout(() => {
      // Here you would typically send the form data to a backend service
      console.log('Form submitted:', this.contactForm.value);
      
      this.isSubmitting = false;
      this.formSubmitted = true;
    }, 1500);
  }
  
  resetForm(): void {
    this.submitted = false;
    this.formSubmitted = false;
    this.contactForm.reset();
  }
}