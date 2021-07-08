import { Component, OnInit } from '@angular/core';
import { WorkImage } from 'src/app/models/work-image.model';
import { WorkLink } from 'src/app/models/work-link.model';
import { WorkTool } from 'src/app/models/work-tool.model';
import { Work } from 'src/app/models/work.model';
import { AppService } from 'src/app/services/app.service';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    public fetchedWorks!: Work[];

    constructor(
        private appService: AppService
    ) { }

    ngOnInit(): void {

    	//TODO: Implement DB fetching of works

    	this.appService.getGalleryWorks()
            .subscribe((response: Work[]) => {
                this.fetchedWorks = response;
            }, (error) => {
                // TODO: Error
            })

    	console.log(this.fetchedWorks);
    }

}
