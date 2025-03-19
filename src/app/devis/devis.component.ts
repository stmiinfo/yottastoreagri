import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-devis',
  imports: [FormsModule],
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    produit: '',
    message: '',
    description: '',
  };

  // Method for form submission
  onSubmit() {
    const { name, email, phone, produit, message, description } = this.formData;

    // Send email via EmailJS
    const templateParams = {
      name,
      email,
      phone,
      produit,
      message,
      description
    };

    emailjs.send('service_enc84aj', 'template_z2z27vi', templateParams, 'CVBoTiOGk66Eq8jCp')
      .then((response) => {
        console.log('Email sent successfully', response);
      })
      .catch((error) => {
        console.log('Failed to send email', error);
      });

    // Optionally, reset the form data after submission
    this.formData = {
      name: '',
      email: '',
      phone: '',
      produit: '',
      message: '',
      description: '',
    };
  }
}
