import { WorkTool } from './work-tool.model';
import { WorkLink } from './work-link.model';
import { ThrowStmt } from '@angular/compiler';
import { WorkImage } from './work-image.model';

export class Work {

    title!: string;
    description!: string;

    images!: WorkImage[];
    tools!: WorkTool[];
    links?: WorkLink[];

    constructor(
        private data: Partial<Work>
    ) {
        Object.assign(this, data)

        if (data.images?.length) {
            this.images = [];
            data.images.forEach((img) => this.images.push(new WorkImage(img)));
        }

        if (data.tools?.length) {
            this.tools = [];
            data.tools.forEach((tool) => this.tools.push(new WorkTool(tool)));
        }

        if (data.links?.length) {
            this.links = [];
            data.links.forEach((link) => this.links?.push(new WorkLink(link)));
        }
    }
}