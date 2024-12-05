import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationServiceService } from './services/notification-service.service';
import { AuthService } from './services/core/auth.service';

@Component({
  selector: 'app-payroll-component',
  templateUrl: './payroll-component.component.html',
  styleUrls: ['./payroll-component.component.css']
})
export class PayrollComponentComponent {
  @ViewChild(MatSidenav) sidenav!:MatSidenav;

  constructor(private observer: BreakpointObserver,
              private changeDetectorRef: ChangeDetectorRef,
              private snackBar: MatSnackBar,
              private notificationService: NotificationServiceService,
              public authService: AuthService){
              }


  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if(res.matches){
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else{
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
      this.changeDetectorRef.detectChanges();
    });
  }

  logout(){
    this.authService.SignOut();
  }
}
