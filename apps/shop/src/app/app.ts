import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { inject } from 'vitest';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
@Component({
  imports: [RouterModule, FontAwesomeModule, Navbar, Footer],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class App {
  faCoffee = faCoffee;

  protected title = 'ecommerce';
}

export default App;
