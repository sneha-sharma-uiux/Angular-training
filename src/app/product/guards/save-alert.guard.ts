import { Injectable } from '@angular/core';
import { CanDeactivate  } from '@angular/router';
import { Observable } from 'rxjs';
import { Editable } from '../models/editable';

@Injectable({
   providedIn: 'root'
})
export class SaveAlertGuard implements CanDeactivate<Editable> {
   canDeactivate(target: Editable) {
      if (target.isSaved())
        return true;

      return window.confirm("Unsaved changes, continue?")
   } 
}