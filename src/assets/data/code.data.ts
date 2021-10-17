import { Work, WorkLink } from '../../app/models';
import { WorkImage } from '../../app/models';
import { WorkTool } from '../../app/models';

export const CodeData: Work[] =  [
	new Work({
		title: 'Hell Ordering',
		description: 'Bringing a fresh design to life! It was a blast working on Hell Pizza’s new ordering website. This platform is used by Hell customers all over New Zealand.\n\nWe aimed to create a new, modern web application for their most customer facing website. This involved refreshing their existing web features and implementing exciting new ones. We went for a OOP approach using Angular 10 as this fit their preferred structure.',
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
				title: 'Coming Soon!',
				src: 'https://online.hellpizza.com'
			})
		]
	}),
	new Work({
		title: 'Driver App',
		description: 'Lead developer of Hell’s in-house driver performance Android app - Styx Drive. This was developed using the Nativescript and Angular 8 framework as per the project\'s specifications. \n\n The app communicates with their API to complete various internal tasks. It features QR authentication and implements a custom Java background service for location data.',
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
			})
		]
	}),
	new Work({
		title: 'Training Portal',
		description: 'A web application utilising the clients existing intranet, built on AngularJS. \n\n A mobile first approach was taken to capture the majority of the target audience. Mixing beautiful design with intuitive functionality allowed me to create an easy to use platform for both the end user and content manager.',
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
		title: 'Uber Intergration',
		description: 'Managed development and communication between Uber Eats and Hell to create a seamless platform integration that scales for their increasing number of stores.\n\nI used the existing API and backend, I was able to send the order striaght to their kitchens. Logging is setup throughout the order\'s build proccess to help monitor the integration health. ',
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
		title: 'Roster',
		description: 'A in-house roster used by store\'s to create their weekly shifts. The roster ties in other features such as leave requests and upcoming special events to help the user create a balanced work flow for each day.',
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
			})
		]
	}),
]