import { Component, Input } from '@angular/core';
import { User } from '../../data/users';
import { TitleCasePipe, DatePipe, CurrencyPipe } from '@angular/common';
import { ActivityColorPipePipe } from '../activity-color-pipe.pipe';
import { LastLoginEmojiPipePipe } from '../last-login-emoji-pipe.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, ActivityColorPipePipe, LastLoginEmojiPipePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() data!: User;

}
