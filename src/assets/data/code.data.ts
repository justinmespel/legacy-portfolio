import { Work, WorkLink } from '../../app/models';
import { WorkImage } from '../../app/models';
import { WorkTool } from '../../app/models';

export const CodeData: Work[] =  [
	new Work({
		title: 'Hell Ordering',
		description: 'Bringing a fresh design to life! I was the lead developer working on Hell Pizza’s new ordering website. This platform is used by Hell customers all over New Zealand so performance and design was of the utmost importance.\n\nThe objective was create a new modern web application for their most customer facing website. This involved refreshing their existing web features and implementing new ones. I went for a OOP approach using Angular 10 as this fit the clients preferred structure. Check out my design page to see how this project started.',
		tools: [
			new WorkTool({ 
				name: 'Angular 10' 
			}),
			new WorkTool({ 
				name: 'Typescript' 
			}),
			new WorkTool({ 
				name: 'SCSS Stylesheet' 
			}),
			new WorkTool({
				name: 'HTML'
			}),
			new WorkTool({ 
				name: 'PHP' 
			}),
			new WorkTool({ 
				name: 'MySQL' 
			})
		],
		images: [
			new WorkImage({
				src: 'assets/gallery/develop/ordering-1.png',
			}),
			new WorkImage({
				src: 'assets/gallery/develop/ordering-3.png',
			}),
			new WorkImage({
				src: 'assets/gallery/develop/ordering-2.png',
			}),
		],
		links: [
			new WorkLink({
				title: 'Hell\'s Ordering Website',
				src: 'https://online.hellpizza.com'
			})
		]
	}),
	new Work({
		title: 'Uber Intergration',
		description: 'Managed development and communication between Uber Eats and Hell to create a seamless platform integration that scales for their increasing number of stores.\n\nDevelopment time was around 1 week using the existing API and backend to build the order. Logging and notifications are setup throughout the build proccess to help monitor the integration health. ',
		tools: [ 
			new WorkTool({ 
				name: 'PHP'
			}),
			new WorkTool({
				name: 'MySql'
			}),
			new WorkTool({ 
				name: 'Postman' 
			}),
			new WorkTool({ 
				name: 'Phinx' 
			})
		],
		images: [
			new WorkImage({
				src: 'assets/gallery/develop/uber.png',
			}),
		]
	}),
	new Work({
		title: 'Driver App',
		description: 'Sole developer of Hell’s in-house driver performance Android app - Styx Drive. This was developed using the Nativescript and Angular 8 framework as per the project specifications. \n\n The app communicates with Hell’s API to complete to do various internal tasks. It uses QR authentication and has a custom Java background service for location polling. You can view the asset creation on my design page.',
		tools: [
			new WorkTool({ 
				name: 'Nativescript' 
			}),
			new WorkTool({ 
				name: 'Angular 8' 
			}),
			new WorkTool({ 
				name: 'PHP API' 
			}),
			new WorkTool({
				name: 'Java'
			})
		],
		images: [
			new WorkImage({
				src: 'assets/gallery/develop/drive-1.png',
			}),
			new WorkImage({
				src: 'assets/gallery/develop/drive-2.png',
			}),
			new WorkImage({
				src: 'assets/gallery/develop/drive-3.png',
			}),
		]
	}),
	new Work({
		title: 'Training Portal',
		description: 'A web application utilising the clients existing intranet, built on AngularJS. \n\n A mobile first approach was taken to capture the majority of their target audience. Mixing beautiful design with easy functionality allowed me to create an engaging platform for both the content creator and trainees.',
		tools: [
			new WorkTool({ 
				name: 'AngularJS' 
			}),
			new WorkTool({ 
				name: 'PHP' 
			}),
		],
		images: [
			new WorkImage({
				src: 'assets/gallery/develop/training-1.png',
			}),
		]
	}),
	new Work({
		title: 'Roster',
		description: 'Created a in-house roster used by each store to create their weekly employee shifts. The roster tied in other features such as leave requests and upcoming special events to help the user create a balanced work flow for every day.',
		tools: [
			new WorkTool({ 
				name: 'AngularJS' 
			}),
			new WorkTool({ 
				name: 'MySQL' 
			}),
		],
		images: [
			new WorkImage({
				src: 'assets/gallery/develop/roster-1.png',
			}),
			new WorkImage({
				src: 'assets/gallery/develop/roster-2.png',
			}),
		]
	}),
]