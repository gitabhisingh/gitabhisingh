import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-card',
  templateUrl: './highlight-card.component.html',
  styleUrls: ['./highlight-card.component.scss']
})
export class HighlightCardComponent {
  @Input() title ='';
}
