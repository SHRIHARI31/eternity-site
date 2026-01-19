import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [RadioButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  providers: []
})
export class Contact {
  private seo = inject(SeoService);
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);

  constructor() {
    this.seo.updateSeo(
      'Contact Us - Get in Touch with Eternity',
      'Contact Eternity for custom software services, job applications, or general inquiries. We are here to help you with your business needs.',
      'contact eternity, software development inquiry, join eternity, business software contact'
    );
  }

  categories = signal([
    { id: 1, service: "software-service" },
    { id: 2, service: "job-application" },
    { id: 3, service: "internship-appication" },
    { id: 4, service: "formal-enquire" }
  ]);

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    org: [''],
    email: ['', [Validators.required, Validators.email]],
    service: ['software-service', Validators.required],
    message: ['', Validators.required]
  });

  submitForm() {
    if (this.myForm.valid) {
      console.log('Form Submitted:', this.myForm.value);
      
      this.messageService.add({ 
        severity: 'success', 
        summary: 'Message Received', 
        detail: 'Thank you for reaching out! We will get back to you soon.',
        life: 3000
      });

      this.myForm.reset({
        service: 'software-service'
      });
    } else {
      this.messageService.add({ 
        severity: 'warn', 
        summary: 'Form Incomplete', 
        detail: 'Please fill in all required fields.',
        life: 3000
      });
    }
  }
}
