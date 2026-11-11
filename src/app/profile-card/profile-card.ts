import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I am a student with a strong interest in web development and technology. I enjoy learning programming languages, exploring new technologies, and creating simple and useful applications. I am always willing to improve my skills, gain new knowledge, and develop my abilities as a future web developer.';
}
