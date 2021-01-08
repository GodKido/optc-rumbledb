import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageUrlService {
  // public template = 'https://onepiece-treasurecruise.com/wp-content/uploads/f2958.png';
  public minUrl: any;
  // public imgTemplate = 'http://onepiece-treasurecruise.com/wp-content/uploads/c3062.png';
  public artworkUrl: any;

  constructor(private sanitizer: DomSanitizer) { }

  // build the URL for the image retrieving the unit ID
  assignImage(id: number) {
    console.log('---ASSIGN URL FUNCTION---')

    this.minUrl = 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';
    console.log('icon url: --> ', this.minUrl)
    console.log('Icon assigned!')

    return this.minUrl;
  }

  assignArtworkUrl(id: number){
    console.log('---ASSIGN ART URL FUNCTION---')

    this.artworkUrl = 'http://onepiece-treasurecruise.com/wp-content/uploads/c' + id + '.png';
    console.log('artwork url: --> ', this.artworkUrl)
    console.log('Artwork assigned!')

    return this.artworkUrl;
  }

}
