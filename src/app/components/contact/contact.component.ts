// app/components/contact/contact.component.ts - Complete Clean Professional Design
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link?: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">Get In Touch</h2>
          <p class="section-subtitle fade-in delay-1">
            Ready to start your next project? Let's discuss how we can work together
          </p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info fade-in delay-2">
            <div class="info-card">
              <h3>Let's Connect</h3>
              <p>Whether you're looking for a skilled developer, have a project in mind, 
              or just want to say hello, I'd love to hear from you.</p>
              
              <div class="contact-methods">
                <div *ngFor="let method of contactMethods" class="contact-method">
                  <div class="method-icon" [style.background]="method.color">
                    <i [class]="method.icon"></i>
                  </div>
                  <div class="method-details">
                    <h4>{{ method.title }}</h4>
                    <a *ngIf="method.link" 
                       [href]="method.link" 
                       [target]="method.link.startsWith('http') ? '_blank' : ''"
                       [rel]="method.link.startsWith('http') ? 'noopener noreferrer' : ''"
                       [attr.aria-label]="'Contact via ' + method.title">
                      {{ method.value }}
                    </a>
                    <span *ngIf="!method.link">{{ method.value }}</span>
                  </div>
                </div>
              </div>
              
              <div class="social-links">
                <h4>Find Me On</h4>
                <div class="social-icons">
                  <a href="https://www.linkedin.com/in/haseeb-ur-rahman-mohammad-5274781b0" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="social-icon linkedin"
                     aria-label="Connect with me on LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://github.com/Haseeburrahmann" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="social-icon github"
                     aria-label="View my projects on GitHub">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="mailto:mohd.haseeb.4201@gmail.com" 
                     class="social-icon email"
                     aria-label="Send me an email">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form fade-in delay-3">
            <div class="form-card">
              <div class="form-header">
                <h3>Send Me a Message</h3>
                <p>Have a question or want to work together? Drop me a message!</p>
              </div>
              
              <form [formGroup]="contactForm" 
                    (ngSubmit)="onSubmit()" 
                    *ngIf="!formSubmitted"
                    novalidate>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      formControlName="name" 
                      placeholder="John Doe"
                      [class.error]="submitted && hasErrors('name')"
                      [attr.aria-invalid]="submitted && hasErrors('name')"
                      [attr.aria-describedby]="submitted && hasErrors('name') ? 'name-error' : null">
                    <div *ngIf="submitted && hasErrors('name')" 
                         id="name-error" 
                         class="error-message" 
                         role="alert">
                      <span *ngIf="getFieldError('name', 'required')">Name is required</span>
                      <span *ngIf="getFieldError('name', 'minlength')">Name must be at least 2 characters</span>
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <label for="email">Your Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      formControlName="email" 
                      placeholder="john.doe@example.com"
                      [class.error]="submitted && hasErrors('email')"
                      [attr.aria-invalid]="submitted && hasErrors('email')"
                      [attr.aria-describedby]="submitted && hasErrors('email') ? 'email-error' : null">
                    <div *ngIf="submitted && hasErrors('email')" 
                         id="email-error" 
                         class="error-message" 
                         role="alert">
                      <span *ngIf="getFieldError('email', 'required')">Email is required</span>
                      <span *ngIf="getFieldError('email', 'email')">Please enter a valid email</span>
                    </div>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="subject">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    formControlName="subject" 
                    placeholder="Project Collaboration"
                    [class.error]="submitted && hasErrors('subject')"
                    [attr.aria-invalid]="submitted && hasErrors('subject')"
                    [attr.aria-describedby]="submitted && hasErrors('subject') ? 'subject-error' : null">
                  <div *ngIf="submitted && hasErrors('subject')" 
                       id="subject-error" 
                       class="error-message" 
                       role="alert">
                    <span *ngIf="getFieldError('subject', 'required')">Subject is required</span>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="message">Your Message *</label>
                  <textarea 
                    id="message" 
                    formControlName="message" 
                    rows="5" 
                    placeholder="Hello Haseeb, I would like to discuss..."
                    [class.error]="submitted && hasErrors('message')"
                    [attr.aria-invalid]="submitted && hasErrors('message')"
                    [attr.aria-describedby]="submitted && hasErrors('message') ? 'message-error' : null"></textarea>
                  <div *ngIf="submitted && hasErrors('message')" 
                       id="message-error" 
                       class="error-message" 
                       role="alert">
                    <span *ngIf="getFieldError('message', 'required')">Message is required</span>
                    <span *ngIf="getFieldError('message', 'minlength')">Message must be at least 10 characters</span>
                  </div>
                </div>
                
                <button type="submit" 
                        class="submit-btn" 
                        [disabled]="isSubmitting"
                        [attr.aria-label]="isSubmitting ? 'Sending message...' : 'Send message'">
                  <span *ngIf="!isSubmitting">
                    <i class="fas fa-paper-plane"></i> Send Message
                  </span>
                  <span *ngIf="isSubmitting">
                    <i class="fas fa-circle-notch fa-spin"></i> Sending...
                  </span>
                </button>
              </form>
              
              <div *ngIf="formSubmitted" class="success-message" role="alert">
                <i class="fas fa-check-circle"></i>
                <h4>Thank you for your message!</h4>
                <p>I'll get back to you as soon as possible, usually within 24 hours.</p>
                <button (click)="resetForm()" class="reset-btn">Send Another Message</button>
              </div>
              
              <div *ngIf="submitError" class="error-message-card" role="alert">
                <i class="fas fa-exclamation-triangle"></i>
                <h4>Oops! Something went wrong</h4>
                <p>Sorry, there was an error sending your message. Please try again or contact me directly via email.</p>
                <button (click)="clearError()" class="reset-btn">Try Again</button>
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
  submitError = false;
  
  contactMethods: ContactMethod[] = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'mohd.haseeb.4201@gmail.com',
      link: 'mailto:mohd.haseeb.4201@gmail.com',
      color: 'linear-gradient(135deg, #ea4335, #fbbc05)'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+1 305-427-8756',
      link: 'tel:+13054278756',
      color: 'linear-gradient(135deg, #4caf50, #8bc34a)'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Fort Lauderdale, Florida',
      color: 'linear-gradient(135deg, #ff5722, #ff9800)'
    }
  ];
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.initializeForm();
  }
  
  private initializeForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  get formControls(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
  
  hasErrors(fieldName: string): boolean {
    const field = this.formControls[fieldName];
    return field ? field.invalid && field.errors !== null : false;
  }
  
  getFieldError(fieldName: string, errorType: string): boolean {
    const field = this.formControls[fieldName];
    return field?.errors?.[errorType] || false;
  }
  
  onSubmit(): void {
    this.submitted = true;
    this.submitError = false;
    
    if (this.contactForm.invalid) {
      this.focusFirstInvalidField();
      return;
    }
    
    this.isSubmitting = true;
    
    // Simulate form submission with realistic delay
    setTimeout(() => {
      try {
        // In a real application, you would send this to your backend
        console.log('Form submitted:', this.contactForm.value);
        
        // Simulate random success/failure for demo purposes
        const success = Math.random() > 0.1; // 90% success rate
        
        if (success) {
          this.isSubmitting = false;
          this.formSubmitted = true;
          this.trackFormSubmission();
        } else {
          throw new Error('Simulated network error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        this.isSubmitting = false;
        this.submitError = true;
      }
    }, 2000);
  }
  
  resetForm(): void {
    this.submitted = false;
    this.formSubmitted = false;
    this.submitError = false;
    this.contactForm.reset();
    
    // Focus on first input for better UX
    setTimeout(() => {
      const firstInput = document.getElementById('name');
      firstInput?.focus();
    }, 100);
  }
  
  clearError(): void {
    this.submitError = false;
  }
  
  private focusFirstInvalidField(): void {
    const invalidFields = ['name', 'email', 'subject', 'message'];
    
    for (const fieldName of invalidFields) {
      if (this.hasErrors(fieldName)) {
        const element = document.getElementById(fieldName);
        if (element) {
          element.focus();
          break;
        }
      }
    }
  }
  
  private trackFormSubmission(): void {
    // Placeholder for analytics tracking
    console.log('Form submission tracked');
  }
}