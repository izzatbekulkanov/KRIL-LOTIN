import { Component } from '@angular/core';
import { NgxKirilLotinPipe } from 'ngx-kiril-lotin';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgxKirilLotinPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   *
   */
  text = '';

  /**
   *
   */
  textKiril = '';
}
