import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    { name: 'Heart Failure Prediction', description: 'Developed a robust machine learning model to accurately predict the risk of heart failure in patients.', tech: ['Python','Machine Learning','scikit-learn','Pandas & NumPy','Git'], github: 'https://github.com/raus-kun/CVDs-Detection', live: 'https://cvds-detection.onrender.com/' },
    { name: 'My Portfolio', description: 'A personal portfolio showcasing my projects and skills.', tech: ['Angular', 'HTML', 'CSS','TypeScript'], github: '#', live: '#' },
    { name: 'React Recurrence Picker', description: 'A sophisticated, reusable date picker component built with React and Next.js, inspired by the recurrence features in popular productivity applications like Google Calendar.', tech: ['React', 'Next.js', 'HTML', 'CSS'], github: 'https://github.com/raus-kun/react_recurrence_picker', live: 'https://react-recurrence-picker.vercel.app/' },
    { name: 'Blockchain Based Land Registry', description: 'A decentralized application for land registry management using blockchain technology.', tech: ['Blockchain', 'Solidity'], github: 'https://github.com/raus-kun/land_registration', live: '#' },
  ];
}