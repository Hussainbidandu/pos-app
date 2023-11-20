import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

import { contacts } from 'src/app/models/contact';  

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  contact:contacts

  constructor(private contactService:ContactService) {
    this.contact= new contacts();
  }

  onSubmit(form: any): any {
  

    console.log(form)
      console.log(this.contact)
      this.contactService.addContact(this.contact).subscribe((data) => {
        console.log(data)
      })

}

}
