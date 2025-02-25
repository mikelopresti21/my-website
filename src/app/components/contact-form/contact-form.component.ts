import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailService } from '../../services/emails.service';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})

export class ContactFormComponent {

  constructor(private emailService: EmailService){}

  submit(contactForm: any){

    const formData = {
      name: contactForm.controls['name'].value,
      email: contactForm.controls['email'].value,
      message: contactForm.controls['message'].value,
    }

    this.emailService.sendEmail(formData)
      .subscribe({
        next: response => {
          contactForm.reset();
          console.log(response);
          window.alert("Email sent successfully! Thank you for reaching out. I will follow up with you as soon as I can.");
        },
        error: error => {
          console.log(error);
          window.alert("Failed to send email! Please make sure you are entering a valid email address");
        }
      })
  }
}
