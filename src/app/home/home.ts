import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProfileCard } from '../profile-card/profile-card';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-home',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  fullName = 'Jeanne Macy Capulong';
  location = 'CSFP';
  email = 'jeannemacycapulong@gmail.com';
  phone = '0931 175 2150';

  profile = 'I am a student interested in web development. I enjoy learning new technologies and building useful applications.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Python',
    'MongoDB',
    'MySQL'
  ];

  projects = [
    'Cafe Je - A website concept for a small local café.',
    'ADF2027 - A website for an annual School of Computing event.',
    'Culina Monde - A website showcasing international cuisines.'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }

  onSkillSelected(skill: string) {
    this.message = `Selected skill: ${skill}`;
  }
}
