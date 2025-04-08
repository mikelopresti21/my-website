import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterPages } from '../../footer-pages';
import { FooterGames } from '../../footer-games';
import { FooterLinks } from '../../footer-links';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerPages: FooterPages[] = [
    {
      title: 'Home',
      route: '',
    },
    {
      title: 'Projects',
      route: 'projects',
    },
    {
      title: 'Contact',
      route: 'contact',
    }
  ]

  footerGames: FooterGames[] = [
    {
      title: 'Rust Away',
      link: 'https://mikelo21.itch.io/rust-away'
    },
    {
      title: 'WizOff',
      link: 'https://mikelo21.itch.io/wizoff'
    },
    {
      title: 'Snake',
      link: 'https://mikelopresti21.github.io/snake.html'
    },
    {
      title: 'Simon',
      link: 'https://mikelopresti21.github.io/simon.html'
    }
  ]

  footerLinks: FooterLinks[] = [
    {
      image: 'github-icon.png',
      title: 'GitHub',
      link: 'https://github.com/mikelopresti21'
    },
    {
      image: 'linkedin-icon.png',
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/michaelvlopresti'
    }
  ]
}
