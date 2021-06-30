import { Component, OnInit } from '@angular/core';
import { WorkImage } from 'src/app/models/work-image.model';
import { WorkLink } from 'src/app/models/work-link.model';
import { WorkTool } from 'src/app/models/work-tool.model';
import { Work } from 'src/app/models/work.model';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    public fetchedWorks!: Work[];

    constructor() { }

    ngOnInit(): void {

    	//TODO: Implement DB fetching of works

    	this.fetchedWorks = [
    		new Work({
    			title: 'Test Website',
    			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    			tools: [
    				new WorkTool({ 
                        name: 'Adobe Photoshop' 
                    }),
    				new WorkTool({ 
                        name: 'VS Code' 
                    })
    			],
    			images: [
    				new WorkImage({
                        descrpition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        src: '',
                        link: 'https://github.com'
    				}),
                    new WorkImage({
                        descrpition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        src: '',
                        link: 'https://github.com'
    				}),
    			]
    		}),
    	]

    	console.log(this.fetchedWorks);
    }

}
