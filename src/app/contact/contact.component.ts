import { Component, inject, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  layoutService = inject(LayoutService)
ngOnInit(): void {
  this.layoutService.flexLayout.next(true)
}
}
