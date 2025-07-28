import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private formspreeUrl = 'https://formspree.io/f/mgvzknyv'; // <-- PASTE YOUR FORMSPREE URL HERE

  constructor(private http: HttpClient) { }

  sendContactForm(formData: any) {
    return this.http.post(this.formspreeUrl, formData);
  }
}