import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'AI/ML for Geodata Analysis',
      provider: 'Indian Space Research Organisation (ISRO)',
      fileUrl: 'assets/certificates/ISRO.pdf'
    },
    {
      title: 'Angular Web Developer Certification',
      provider: 'INFOSYS',
      fileUrl: 'assets/certificates/ANGULAR WEB DEVELOPER.pdf'
    },
    {
      title: ' Basics of Quantum Information',
      provider: 'IBM',
      fileUrl: 'assets/certificates/IBM_Quantum Information.pdf'
    },
    {
      title: 'AI & Quantum Computing',
      provider: 'Udemy',
      fileUrl: 'assets/certificates/AI & Quantum Computing.pdf'
    },
     {
      title: 'JavaScript',
      provider: 'Infosys',
      fileUrl: 'assets/certificates/JavaScript.pdf'
    },
    {
      title: 'Financial Data Analysis (Job Simulation)',
      provider: 'Goldman Sachs Operations',
      fileUrl: 'assets/certificates/Goldman Sachs Operations JS.pdf'
    },
    {
      title: 'Development & Coding (Job Simulation)',
      provider: 'Deloitte Australia Technology',
      fileUrl: 'assets/certificates/Deloitte Tech.pdf'
    },
    {
      title: 'Project Management (Job Simulation)',
      provider: 'Accenture Nordics Consultant',
      fileUrl: 'assets/certificates/Accenture DA JS.pdf'
    },
    {
      title: 'Data Analytics & Forensic Technology (Job Simulation)',
      provider: 'Deloitte Australia Data Analytics',
      fileUrl: 'assets/certificates/DELOITTE Data Analytics.pdf'
    }
  ];
}