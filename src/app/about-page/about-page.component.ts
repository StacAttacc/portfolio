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
    .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
    .pipe(
      map(({ breakpoints }) => {
        if (breakpoints[Breakpoints.XSmall]) {
          return 1;
        } else if (breakpoints[Breakpoints.Small]) {
          return 1;
        } else if (breakpoints[Breakpoints.Medium]) {
          return 2;
        }
        return 2;
      })
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {}
}
