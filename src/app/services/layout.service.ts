import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LayoutService {
    flexLayout = new BehaviorSubject(false)
    
}