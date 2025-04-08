import { Component } from '@angular/core';
import { School } from '../../school';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  schools: School[] = [
    {
      image: 'rutgers-icon.png',
      title: 'Rutgers',
      description: `I am currently enrolled at Rutgers pursuing my bachelor's degree in Computer Science.`,
      gpa: '3.86'
    },
    {
      image: 'brookdale-icon.png',
      title: 'Brookdale',
      description: `At Brookdale, I earned my Associate's Degree in business administration.`,
      gpa: '3.72'
    }
  ]
}
