import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class MetaService {

    private tagTitle: string = "title"
    private tagDescription: string = "description";

    private defaultTitle: string = "Just.in";
    private defaultDescription: string = "A UX/UI showcase for Web and Apps";

    constructor(
        private meta: Meta,
        private title: Title
    ) { 

    }

    public updateTitle(content?: string) {

        let newTitle = this.defaultTitle;

        if (content) {
          newTitle = newTitle + " - " + content;
        }

        // Set browser title
        this.title.setTitle(newTitle);

        // Update meta title
        this.meta.updateTag({name: this.tagTitle, content: newTitle}, "name=" + this.tagTitle);
    }

    public updateDescription(content: string) {

      let newDescription = this.defaultDescription;

      if (content) {
          newDescription = newDescription + " - " + content;
      }

      this.meta.updateTag({name: this.tagDescription, content: newDescription}, "name=" + this.tagDescription);
    }

}
