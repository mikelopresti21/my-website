import { Component, OnInit } from '@angular/core';
import { Project } from '../../project';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule, RouterModule, SpinnerComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css'
})
export class FeaturedProjectsComponent implements OnInit{

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
