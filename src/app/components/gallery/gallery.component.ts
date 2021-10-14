import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkImage } from 'src/app/models/work-image.model';
import { WorkLink } from 'src/app/models/work-link.model';
import { WorkTool } from 'src/app/models/work-tool.model';
import { Work } from 'src/app/models/work.model';
import { AppService } from 'src/app/services/app.service';
import { MetaService } from 'src/app/services/meta.service';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

	private CODE_VIEW = 'develop';
    public fetchedWorks!: Work[];

	public view: string = 'Design';

    constructor(
		private router: Router,
        private appService: AppService,
		private metaService: MetaService
    ) { 
	}

    ngOnInit(): void {

		// TODO: Implement DB fetching of works
		this.view = this.router.url.substring(1);

		if (this.view === this.CODE_VIEW) {

			this.metaService.updateTitle("Develop");

			this.appService.getCodeGalleryData()
    		.subscribe((response: Work[]) => {
    			this.fetchedWorks = response;
    		}, (error) => {
    			// TODO: Error
    		})
		} else {

			this.metaService.updateTitle("Design");

			this.appService.getDesignGalleryData()
			.subscribe((response: Work[]) => {
				this.fetchedWorks = response;
			}, (error) => {
				// TODO: Error
			})
		}

		
    }

	public isCodeView(): boolean {
		return this.view === this.CODE_VIEW;
	}
    

}
