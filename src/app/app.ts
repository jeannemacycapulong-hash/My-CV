
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
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

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
