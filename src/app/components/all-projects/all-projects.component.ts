import { Component, OnInit } from '@angular/core';
import { Project } from '../../project';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-all-projects',
  imports: [RouterModule, CommonModule, SpinnerComponent],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent implements OnInit{

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
