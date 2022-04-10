import { Work, WorkLink } from '../../app/models';
import { WorkImage } from '../../app/models';
import { WorkTool } from '../../app/models';

export const DesignData: Work[] =  [
	new Work({
		title: 'The Horticulturist',
		description: 'Brand design for a local horticulture business. \n\nA logo was developed to reflect the company’s wholesome values. This design is used throughout the company’s branding, including business cards and signage.',
		images: [
			new WorkImage({
				src: 'assets/gallery/design/horticulturlist.png',
			})
		]
	}),
	new Work({
		title: 'Ordering platform',
		description: 'Concept creation to bring Hell’s new ordering platform to life. \n\nThe new design was image-focused, while maintaining thier core brand design. I was able to work with external designers to create a beautiful interface that I was able to bring to life.',
		images: [
			new WorkImage({
				src: 'assets/gallery/design/ui-ordering.png',
			})
		]
	}),
	new Work({
		title: 'Posters',
		description: 'A few posters designs for clients and exhibitions.\n\nCreating a beautiful display of a company\'s values to conveying a clear message. Exhibition posters are bold, and are designed to attract an audience. ',
		images: [
			new WorkImage({
				src: 'assets/gallery/design/posters-1.png',
			}),
			new WorkImage({
				src: 'assets/gallery/design/posters-2.png',
			})
		]
	}),
	new Work({
		title: 'Application Icons',
		description: 'Clean and exciting module icons for a training application.\n\nThese were designed to engage a specific target audience, and bring a bit of fun to a process that may seem \“tedious\”.',
		images: [
			new WorkImage({
				src: 'assets/gallery/design/training.png',
			})
		]
	}),
]