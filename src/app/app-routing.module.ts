import { CommonModule } from '@angular/common';
import { Injector, NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { EmployeesComponent } from './payroll-component/employees/employees.component';
import { NotFoundComponentComponent } from './payroll-component/not-found-component/not-found-component.component';
import { HomeComponent } from './payroll-component/home/home.component';
import { TaxesComponent } from './payroll-component/taxes/taxes.component';
import { FiscalYearsComponent } from './payroll-component/fiscal-years/fiscal-years.component';
import { GovernmentComponent } from './payroll-component/government/government.component';
import { TaxBracketsComponent } from './payroll-component/tax-brackets/tax-brackets.component';
import { TaxesEmployerComponent } from './payroll-component/taxes-employer/taxes-employer.component';
import { WithheldSalaryComponent } from './payroll-component/withheld-salary/withheld-salary.component';
import { LoginComponent } from './payroll-component/users/login/login.component';
import { authguardGuard } from './payroll-component/services/authguard.guard';
import { AuthService } from './payroll-component/services/core/auth.service';
import { AuthGuard } from './payroll-component/services/guard-service.guard';
import { HelpComponentComponent } from './payroll-component/help-component/help-component.component';
import { LogoutComponent } from './payroll-component/logout/logout.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'employees',
  },
  /*{
    path: 'login',
    component: LoginComponent
  },*/
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(route, state)],
   },
  {
    path: 'taxes',
    component: TaxesComponent,
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(route, state)],
  },
  {
    path: 'taxes-employer',
    component: TaxesEmployerComponent,
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(route, state)],
  },
  {
    path: 'fiscal-years',
    component: FiscalYearsComponent,
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(route, state)],
  },
  {
    path: 'governments',
    component: GovernmentComponent,
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(route, state)],
  },
  {
    path: 'tax-brackets',
    component: TaxBracketsComponent,
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(route, state)],
  },
  {
    path: 'withheld-salary',
    component: WithheldSalaryComponent,
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(route, state)],
  },
  {
    path: 'help',
    component: HelpComponentComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '**',
    component: NotFoundComponentComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
