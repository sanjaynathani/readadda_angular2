import {Inject, Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';
import {MatDialog} from '@angular/material';
import {InfoDialogComponent} from '../component/info.dialog';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<any> {

  constructor(private dialog: MatDialog) {}
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let val: boolean;
    val = true;
    if (component.canDeactivate && !component.canDeactivate()) {
      const dialogRef = this.dialog.open(InfoDialogComponent,
        {data : {title: 'Confirmation', information: 'Data is not saved! Still navigate away?'}})
      return dialogRef.afterClosed().toPromise();
    }
    return true;
  }
}

