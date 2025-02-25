import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../skill';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills: Skill[] = [
    {
      images: ['/images/html-icon.png', '/images/css-icon.png', '/images/javascript-icon.png'],
      title: 'Mastering The Basics',
      description: `I've built a solid foundation in the basics of web development using HTML, CSS, and vanilla JavaScript.`
    },
    {
      images: ['/images/angular-icon.png', '/images/react-icon.png'],
      title: 'Front-end Frameworks',
      description: `This website uses Angular as the front-end. I'm also familiar with the React.js framework.`
    },
    {
      images: ['/images/nodejs-icon.png'],
      title: 'Back-end Frameworks',
      description: `I'm using Express.js and Node.js to handle the back-end for this website. I'm also familiar with ASP.NET`
    },
    {
      images: ['/images/c-sharp-icon.png', '/images/java-icon.png', '/images/python-icon.png', '/images/c-icon.png'],
      title: 'Language Proficiency',
      description: 'My core strengths lie in C# and Java, with additional experience in C and Python.'
    },
    {
      images: ['/images/unity-icon.png'],
      title: 'Game Development',
      description: 'Many of the projects here are games using C# and UnityEngine. Head over to projects to play them!'
    }
  ]
}
