import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Work } from '../models/work.model';
import { RequestsService } from './requests.service';

//TODO: Implement DB fetching of works
import { CodeData } from '../../assets/data/code.data';
import { DesignData } from '../../assets/data/design.data';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor(
        private requestsService: RequestsService
	) {
	}
 
	public getCodeGalleryData(): Observable<Work[]> 
	{
    	//TODO: Implement DB fetching of works
		return of(CodeData);
	}

	public getDesignGalleryData(): Observable<Work[]>
	{
		//TODO: Implement DB fetching of works
		return of(DesignData);
	}

}
