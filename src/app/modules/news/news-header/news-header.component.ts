import { Component } from '@angular/core';
import { NavLinkComponent } from '../../../shared/components/ui/nav-link/nav-link.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'news-header',
  standalone: true,
  imports: [NavLinkComponent, RouterLink],
  templateUrl: './news-header.component.html',
  styleUrl: './news-header.component.scss',
})
export class NewsHeaderComponent {}
