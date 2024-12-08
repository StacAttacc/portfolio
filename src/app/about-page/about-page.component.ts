import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  cols$ = this.breakpointObserver
  .observe([Breakpoints.XSmall, Breakpoints.Small])
  .pipe(map(({ matches }) => matches ? 1 : 2));

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {}
}
