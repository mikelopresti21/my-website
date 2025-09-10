import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-truncate-text',
  imports: [CommonModule],
  templateUrl: './truncate-text.component.html',
  styleUrl: './truncate-text.component.css'
})
export class TruncateTextComponent {
  @Input() text: string = '';
  @Input() maxChars: number = 180;

  expanded = false;

  get isTruncated(): boolean {
    return this.text.length > this.maxChars;
  }

  get truncatedText(): string {
    return this.text.substring(0, this.maxChars);
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
