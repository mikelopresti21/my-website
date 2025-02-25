import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { FeaturedProjectsComponent } from '../../components/featured-projects/featured-projects.component';
import { EducationComponent } from '../../components/education/education.component';
import { SkillsComponent } from "../../components/skills/skills.component";

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    FeaturedProjectsComponent,
    EducationComponent,
    SkillsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
