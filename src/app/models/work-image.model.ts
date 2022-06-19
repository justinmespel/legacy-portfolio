export class WorkImage {

    alt!: string;
    src!: string;
    link?: string;
    loaded?: boolean;

    constructor(
        private data: Partial<WorkImage>
    ) {
    	Object.assign(this, data)
    }
}