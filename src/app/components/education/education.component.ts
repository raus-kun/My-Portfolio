import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationHistory = [
    {
      institution: 'Jawaharlal Nehru University (JNU), New Delhi',
      degree: 'Bachelor of Technology (B.Tech) in Electronics and Communication Engineering',
      duration: '2022 - 2026'
    },
    {
      institution: 'Park Mount Public School, Patna, Bihar',
      degree: 'Intermediate, Central Board of Secondary Education (CBSE)',
      duration: '2022'
    },
    {
      institution: 'B D Public School, Patna, Bihar',
      degree: 'High School, Central Board of Secondary Education (CBSE)',
      duration: '2020'
    }
  ];
}