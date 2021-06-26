import { Component, OnInit } from '@angular/core';
import { WorkLink } from 'src/app/models/work-link.model';
import { WorkTool } from 'src/app/models/work-tool.model';
import { Work } from 'src/app/models/work.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public fetchedWorks!: Work[];

  constructor() { }

  ngOnInit(): void {

    //TODO: Implement DB fetching of works

    this.fetchedWorks = [
      new Work({
          title: 'Work 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          tools: [
            new WorkTool({name: 'Hello'}),
            new WorkTool({name: 'Hello'})
          ],
          links: [
            new WorkLink({title: 'Hello', src:'https://'}),
            new WorkLink({title: 'Hello', src:'https://'}),
            new WorkLink({title: 'Hello', src:'https://'})
          ]
      }),
    ]

    console.log(this.fetchedWorks);
  }

}
