import { Work, WorkLink } from '../../app/models';
import { WorkImage } from '../../app/models';
import { WorkTool } from '../../app/models';

export const CodeData: Work[] =  [
	new Work({
		title: 'Hell Ordering',
		description: 'It was pleasure to be able to bring an modern design to life and develop a brand new ordering application for Hell. \n\nThis involved refreshing their existing web features and implementing exciting new ones.',
		tools: [
			new WorkTool({ 
				name: 'Angular 10' 
			}),
			new WorkTool({ 
				name: 'Typescript' 
			}),
			new WorkTool({ 
				name: 'PHP' 
			}),
			new WorkTool({ 
				name: 'SCSS' 
			}),
			new WorkTool({ 
				name: 'MySQL' 
			}),
			new WorkTool({
				name: 'Angular Universal'
			}),
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
				title: 'Hell Pizza Ordering',
				src: 'https://online.hellpizza.com'
			})
		]
	}),
	new Work({
		title: 'Uber Eats Intergration',
		description: 'Led development between Uber Eats and the client to create a seamless platform integration that scales for their increasing number of sites.\n\nIntegrating into their existing infastructure allowed me to send the converted order striaght to their kitchens. Logging has been setup throughout the order\'s build proccess to monitor integration health. ',
		tools: [ 
			new WorkTool({ 
				name: 'PHP'
			}),
			new WorkTool({
				name: 'MySql'
			}),
			new WorkTool({ 
				name: 'Angular JS' 
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
		description: 'A in-house driver app for Android. This was developed using the Nativescript and Angular 8 framework. \n\n The app communicates with a API to complete various internal tasks.',
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
			})
		]
	}),
	new Work({
		title: 'Training Portal',
		description: 'A web-based application integrated into the existing intranet, built on AngularJS. \n\n Devloped using the mobile-first approach to best suit the target audience. Mixing beautiful design with intuitive functionality allowed me to create an easy to use platform for both the end user and content manager.',
		tools: [
			new WorkTool({ 
				name: 'Angular JS' 
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
	})
]