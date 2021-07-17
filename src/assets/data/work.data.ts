import { Work } from '../../app/models';
import { WorkImage } from '../../app/models';
import { WorkTool } from '../../app/models';

export const Data: Work[] =  [
    new Work({
        title: 'Test Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        tools: [
            new WorkTool({ 
                name: 'Adobe Photoshop' 
            }),
            new WorkTool({ 
                name: 'Angular' 
            }),
            new WorkTool({ 
                name: 'PHP' 
            }),
            new WorkTool({ 
                name: 'SCSS Stylesheet' 
            }),
            new WorkTool({ 
                name: 'VS Code' 
            })
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
    new Work({
        title: 'Another Website',
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