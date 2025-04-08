import { Component, OnInit } from '@angular/core';
import { Project } from '../../project';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css'
})
export class FeaturedProjectsComponent implements OnInit{

  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getFeaturedProjects().subscribe((data) => {
      this.projects = data;
      this.projects.reverse();
    }, err => {
      console.log("Failed to fetch projects");
    });
  }
}
