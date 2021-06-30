export class WorkTool {

    name?: string; 

    constructor(
        private data: Partial<WorkTool>
    ) {
    	Object.assign(this, data)
    }
}