export class WorkImage {

    alt!: string;
    src!: string;
    link?: string;

    constructor(
        private data: Partial<WorkImage>
    ) {
    	Object.assign(this, data)
    }
}