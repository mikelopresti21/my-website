import { Component } from '@angular/core';
import { Project } from '../../project';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-all-projects',
  imports: [RouterModule, CommonModule],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent {
  
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(){
    this.projectsService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
