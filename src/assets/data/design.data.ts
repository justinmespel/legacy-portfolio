import { Work, WorkLink } from '../../app/models';
import { WorkImage } from '../../app/models';
import { WorkTool } from '../../app/models';

export const DesignData: Work[] =  [
	new Work({
		title: 'Example Design',
		description: 'Bringing a fresh design to life! I was the lead developer working on Hell Pizza’s new ordering website. This platform is used by Hell customers all over New Zealand so performance and design was of the utmost importance.\n\nThe objective was create a new modern web application for their most customer facing website. This involved refreshing their existing web features and implementing new ones. I went for a OOP approach using Angular 10 as this fit the clients preferred structure. Check out my design page to see how this project started.',
		tools: [
			new WorkTool({ 
				name: 'Angular 10' 
			}),
			new WorkTool({ 
				name: 'Adobe Photoshop' 
			}),
		],
		images: [
			new WorkImage({
				descrpition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				src: 'assets/temp/gallery-image.png',
				link: 'https://github.com'
			}),
			new WorkImage({
				descrpition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				src: 'assets/temp/gallery-image.png',
				link: 'https://github.com'
			}),
		]
	}),
]