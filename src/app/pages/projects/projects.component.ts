import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from "../../components/spinner/spinner.component";
import { Project } from '../../project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink, SpinnerComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  
  projects: Project[] = [];
  isLoading = true;

  constructor(private projectsService: ProjectsService) {}
  
  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((data) => {
      this.isLoading = false;
      this.projects = data;
      this.projects.reverse();
    }, err => {
      this.isLoading = false;
    });
  }
}
