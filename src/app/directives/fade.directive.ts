import { AnimationPlayer, AnimationBuilder, AnimationMetadata, style, animate } from "@angular/animations";
import { Directive, Input, ElementRef } from "@angular/core";
import { FaderProperties } from "../interfaces/fader.interface";

@Directive({
	selector: '[appFader]', 
})

export class FadeInOutDirective {

    player!: AnimationPlayer;
    speed: number = 300;

    @Input() set fadeSettings(params: FaderProperties) {

    	if (this.player) {
    		this.player.destroy();
    	}

    	// Dynamically set the fader speed if provided
    	if (params.speed) {
    		this.speed = params.speed
    	}
  
    	const metadata = params.show ? this.fadeIn() : this.fadeOut();
  
    	const factory = this.builder.build(metadata);
    	const player = factory.create(this.el.nativeElement);
  
    	player.play();
    }
  
    constructor(
        private builder: AnimationBuilder,
        private el: ElementRef
    ) 
    {}
  
    private fadeIn(): AnimationMetadata[] {
    	return [
    		style({ opacity: 0 }),
    		animate(`${this.speed}ms ease-in`, style({ opacity: 1 })),
    	];
    }
  
    private fadeOut(): AnimationMetadata[] {
    	return [
    		style({ opacity: '*' }),
    		animate(`${this.speed}ms ease-in`, style({ opacity: 0 })),
    	];
    }
}