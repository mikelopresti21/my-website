import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../project';
import { ProjectsService } from '../../services/projects.service';
import { SpinnerComponent } from "../../components/spinner/spinner.component";
import { School } from '../../school';
import { TruncateTextComponent } from "../../components/truncate-text/truncate-text.component";

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    CommonModule,
    SpinnerComponent,
    TruncateTextComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projects: Project[] = [];
  isLoading: boolean = true;

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

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getFeaturedProjects().subscribe((data) => {
      this.isLoading = false;
      this.projects = data;
      this.projects.reverse();
    }, err => {
      this.isLoading = false;
    });
  }
}
