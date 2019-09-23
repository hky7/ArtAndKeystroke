import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  welcomeText = '';
  index = 0;
  constructor() { }

  ngOnInit() {
    this.typeWriter();
  }

  public typeWriter() {
    const text = 'Welcome';
    const speed = 500;


    if (this.index < text.length) {
      this.welcomeText += text.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), speed);
    }
  }

}
