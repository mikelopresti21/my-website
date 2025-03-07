import { Component } from '@angular/core';
import { Project } from '../../project';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css'
})
export class FeaturedProjectsComponent {
  projects: Project[] = [
    {
      title: 'Rust Away',
      image: '/images/Rust_Away_Cover.jpg',
      description: 'A 2D platformer game created in UnityEngine.',
      btnText: 'Play Game',
      route: 'https://mikelo21.itch.io/rust-away',
      internal: false
    },
    {
      title: 'Simon',
      image: '/images/simon-cover.png',
      description: 'The classic Simon memory game, built with Html, CSS, and JavaScript.',
      btnText: 'Play Game',
      route: 'https://mikelopresti21.github.io/simon.html',
      internal: false
    },
    {
      title: 'Original Portfolio Website',
      image: '/images/original-website-cover.jpg',
      description: 'This website is a refactored version of my original portfolio site.',
      btnText: 'Visit Website',
      route: 'https://mikelopresti21.github.io/',
      internal: false
    }


  ]
}
