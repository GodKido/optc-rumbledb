import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Luffy, Nami as dummy } from '../dummy'

@Injectable({
  providedIn: 'root'
})
export class ImageUrlService {
  public imgUrl: any;
  private sanitizedUrl: any;
  public tempFileName: any;
  public htmlTag: any;

  constructor(private sanitizer: DomSanitizer) { }

  tempFileNameGen(id: number) {
    if(id != null || id != undefined){
      this.tempFileName = `/home/luca/Scrivania/optc-rumble/rumble-db/src/app/icons/f` + id +`.png`;
    }
    console.log(this.tempFileName);
  }

  assignImage(id: number){
      this.imgUrl = 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustHtml(this.imgUrl);
      this.htmlTagGenerator(id);
      return this.sanitizedUrl;
  }

  htmlTagGenerator(id: number) {
    if(id != null || id != undefined){
      this.htmlTag = `<img src="` + this.sanitizedUrl + `">`
    }
    return this.htmlTag;
  }

}
