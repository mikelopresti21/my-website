import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/emails.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

  name: string = '';
  email: string = '';
  message: string = '';

  ngAfterViewInit() {
      if ((window as any).grecaptcha) {
        (window as any).grecaptcha.render('g-recaptcha', {
          sitekey: '6LcI0eoqAAAAANlML_wvkSM84Z7NcCBlFC2zdfgi'
        });
      }
    }
  
    constructor(private emailService: EmailService){}
  
    submit(contactForm: any){
  
      const recaptchaResponse = (window as any).grecaptcha.getResponse();
  
      if (!recaptchaResponse) {
        alert('Please complete the reCAPTCHA.');
        return;
      }
  
      const formData = {
        recaptcha: recaptchaResponse,
        name: contactForm.controls['name'].value,
        email: contactForm.controls['email'].value,
        message: contactForm.controls['message'].value,
      }
  
      this.emailService.sendEmail(formData)
        .subscribe({
          next: response => {
            (window as any).grecaptcha.reset();
            contactForm.reset();
            console.log(response);
            window.alert("Email sent successfully! Thank you for reaching out. I will follow up with you as soon as I can.");
          },
          error: error => {
            (window as any).grecaptcha.reset();
            console.log(error);
            window.alert("Failed to send email! Please make sure you are entering a valid email address");
          }
        })
    }
}
