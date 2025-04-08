import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Skill } from '../../skill';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills: Skill[] = [
    {
      images: ['html-icon.png', 'css-icon.png', 'javascript-icon.png'], 
      title: 'Mastering The Basics',
      description: `I've built a solid foundation in the basics of web development using HTML, CSS, and JavaScript.`
    },
    {
      images: ['angular-icon.png', 'react-icon.png'],  
      title: 'Frontend Frameworks',
      description: `This website uses Angular as the front-end. I'm also familiar with the React.js framework.`
    },
    {
      images: ['nodejs-icon.png', 'mongodb-icon.png'], 
      title: 'Backend Development',
      description: `I currently host backend servers with RESTful APIs using Node.js, Express.js, and MongoDB.`
    },
    {
      images: ['c-sharp-icon.png', 'java-icon.png', 'python-icon.png', 'c-icon.png'],
      title: 'Language Proficiency',
      description: 'My core strengths lie in JavaScript, C#, Java, and Python with additional experience in C.'
    },
    {
      images: ['unity-icon.png'],
      title: 'Game Development',
      description: 'Many of the projects here are games using C# and UnityEngine. Head over to projects to play them!'
    }
  ]
}
