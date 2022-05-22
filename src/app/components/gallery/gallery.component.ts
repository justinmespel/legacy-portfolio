import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core'
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

import { Work } from 'src/app/models/work.model';

import { AppService } from 'src/app/services/app.service';
import { MetaService } from 'src/app/services/meta.service';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

	private CODE_VIEW = 'develop';
	private DESIGN_VIEW = 'design';
    public fetchedWorks!: Work[];

	public view: string | null = null;
    public isCodeView: boolean = false;

    constructor(
		private router: Router,
        private appService: AppService,
		private metaService: MetaService
    ) { 
        // Get the current route via the router to determine the view
		this.view = this.router.url.substring(1);
	}

    ngOnInit(): void {
		
		if (this.view === this.CODE_VIEW) {

            this.isCodeView = true;
			this.metaService.updateTitle("Develop");

			this.appService.getCodeGalleryData()
    		.subscribe((response: Work[]) => {
    			this.fetchedWorks = response;
    		}, (error) => {
				// TODO: Error handler service
    		})
		} else if (this.view === this.DESIGN_VIEW) {

			this.metaService.updateTitle("Design");

			this.appService.getDesignGalleryData()
			.subscribe((response: Work[]) => {
				this.fetchedWorks = response;
			}, (error) => {
				// TODO: Error handler service
			})
		} else {
			// Unknown - navigate home
			this.router.navigate(['']);
        }
	
    }
    

}
