import { Work, WorkLink } from '../../app/models';
import { WorkImage } from '../../app/models';
import { WorkTool } from '../../app/models';

export const CodeData: Work[] =  [
	new Work({
		title: 'Hell Ordering',
		description: 'It was an honour to be able to bring an awseome design to life and develop a brand new ordering application for Hell. \n\nThis involved refreshing their existing web features and implementing exciting new ones.',
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
				title: 'Order Hell Pizza',
				src: 'https://online.hellpizza.com'
			})
		]
	}),
	new Work({
		title: 'Uber Eats Intergration',
		description: 'Led development between Uber Eats and the client to create a seamless platform integration that scales for their increasing number of stores.\n\nI was able to adapt their existing infastructure to send the converted order striaght to their kitchens. Logging has been setup throughout the order\'s build proccess to help monitor the integration health. ',
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
		description: 'Developed an in-house driver app for Android - Styx Drive. This was developed using the Nativescript and Angular 8 framework. \n\n The app communicates with their API to complete various internal tasks. It features QR authentication and implements a custom Java background service.',
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
	}),
	new Work({
		title: 'Roster',
		description: 'A specialised roster for each businesses\'s for creating their weekly work schedule. The roster ties in leave requests and upcoming special events to help the user create a balanced work flow for each day.',
		tools: [
			new WorkTool({ 
				name: 'Angular JS' 
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