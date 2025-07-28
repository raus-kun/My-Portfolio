import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Freelance Social Media Strategist',
      context: 'JNUSU Elections Campaign',
      duration: 'Campaign Cycle',
      description: [
        'Created timely, engaging content using Canva and strategic posting, resulting in 3,500+ organic impressions.',
        'Ran a meme-based campaign to promote a student candidate, fostering strong peer engagement during a high-pressure cycle.'
      ]
    },

    {
      role: ' Hostel Committee Member',
      context: 'Jawaharlal Nehru University',
      duration: '22/10/2024 - Present',
      description: [
        ' Represented and coordinated activities for a 350-resident hostel',
        'Organized events and managed logistics to enhance community engagement.',
        'Collaborated with university administration to address resident concerns and improve hostel facilities.'
      ]
    }
  ];
}