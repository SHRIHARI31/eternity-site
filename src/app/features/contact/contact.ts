import { Component, signal ,inject} from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton'
import { FormBuilder, FormsModule,FormGroup,Validator,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [RadioButtonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

export class Contact {
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
