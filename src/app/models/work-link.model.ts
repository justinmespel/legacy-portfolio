export class WorkLink {

    title!: string;
    src!: string; 

    constructor(
        private data: Partial<WorkLink>
    ) {
    	Object.assign(this, data)
    }
}