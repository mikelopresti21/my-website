import { Component } from '@angular/core';
import { Project } from '../../project';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-all-projects',
  imports: [RouterModule, CommonModule],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent {
  projects: Project[] = [
      {
        title: 'Rust Away',
        image: '/images/Rust_Away_Cover.jpg',
        description: 'A 2D platformer game created in UnityEngine.',
        btnText: 'Play Game',
        route: 'https://mikelo21.itch.io/rust-away',
        type: 'external'
      },
      {
        title: 'Simon',
        image: '/images/simon-cover.png',
        description: 'The classic Simon memory game, built with HTML, CSS, and JavaScript.',
        btnText: 'Play Game',
        route: 'https://mikelopresti21.github.io/simon.html',
        type: 'external'
      },
      {
        title: 'Original Portfolio Website',
        image: '/images/original-website-cover.jpg',
        description: 'This website is a refactored version of my original portfolio site.',
        btnText: 'Visit Website',
        route: 'https://mikelopresti21.github.io/',
        type: 'external'
      },
      {
        title: 'Snake',
        image: '/images/snake-cover.png',
        description: 'The classic Snake game, built with HTML, CSS, and JavaScript.',
        btnText: 'Play Game',
        route: 'https://mikelopresti21.github.io/snake.html',
        type: 'external'
      },
      {
        title: 'WizOff',
        image: '/images/WizOff_Cover.jpg',
        description: 'A local two player video game made in Unity Engine.',
        btnText: 'Play Game',
        route: 'https://mikelo21.itch.io/wizoff',
        type: 'external'
      },
  ]
}
