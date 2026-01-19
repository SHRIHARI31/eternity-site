import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [RadioButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

export class Contact {
  private seo = inject(SeoService);

  constructor() {
    this.seo.updateSeo(
      'Contact Us - Get in Touch with Eternity',
      'Contact Eternity for custom software services, job applications, or general inquiries. We are here to help you with your business needs.',
      'contact eternity, software development inquiry, join eternity, business software contact'
    );
  }
  categories = signal([
    { id: 1, service: "software-service" }, { id: 2, service: "job-application" }, { id: 3, service: "internship-appication" }, { id: 4, service: "formal-enquire" }
  ])

private fb = inject(FormBuilder)

myForm:FormGroup = this.fb.group({
  service:[]
})
submitForm(){

}
}
