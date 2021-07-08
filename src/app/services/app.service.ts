import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Work } from '../models/work.model';
import { RequestsService } from './requests.service';

//TODO: Implement DB fetching of works
import { Data } from '../../assets/data/work.data';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor(
        private requestsService: RequestsService
	) {
	}
 
    public getGalleryWorks(): Observable<Work[]>  {
    	//TODO: Implement DB fetching of works
        return of(Data)
    }

}
