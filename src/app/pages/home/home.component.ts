import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EducationComponent } from '../../components/education/education.component';
import { Project } from '../../project';
import { ProjectsService } from '../../services/projects.service';
import { SpinnerComponent } from "../../components/spinner/spinner.component";

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    CommonModule,
    EducationComponent,
    SpinnerComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projects: Project[] = [];
  isLoading: boolean = true;

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
