import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Class, Style } from 'src/assets/Enums';
import { characters } from '../../assets/characters/Characters'

@Injectable({
  providedIn: 'root'
})
export class ImageUrlService {
  // public template = 'https://onepiece-treasurecruise.com/wp-content/uploads/f2958.png';
  public minUrl: any;

  // public imgTemplate = 'http://onepiece-treasurecruise.com/wp-content/uploads/c3062.png';
  public artworkUrl: any;

  characters = characters;
  iconsFolder = "assets/icons/";
  classIcon = "";
  class2Icon = "";

  constructor(private sanitizer: DomSanitizer) { }

  // build the URL for the image retrieving the unit ID
  assignImage(id: number) {
    this.minUrl = 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';

    return this.minUrl;
  }

  assignArtworkUrl(id: number) {
    this.artworkUrl = 'http://onepiece-treasurecruise.com/wp-content/uploads/c' + id + '.png';

    return this.artworkUrl;
  }

  assignStyleIcon(id: any) {
    for (let character of characters) {
      if (character.rumble.style === Style.ATK) {
        character.rumble.styleIcon = this.iconsFolder + "style_atk.png"
      }
      else if (character.rumble.style === Style.DEF) {
        character.rumble.styleIcon = this.iconsFolder + "style_defense.png"
      }
      else if (character.rumble.style === Style.HLR) {
        character.rumble.styleIcon = this.iconsFolder + "style_heal.png"
      }
      else if (character.rumble.style === Style.OBS) {
        character.rumble.styleIcon = this.iconsFolder + "style_debuff.png"
      }
      else if (character.rumble.style === Style.SUP) {
        character.rumble.styleIcon = this.iconsFolder + "style_support.png"
      }
    }
  }

  assignClassIcon(id: any) {
    for (let character of characters) {

      if (character.classIcon === '' || character.classIcon === undefined) {
        if (character.class === Class.FTR) {
          character.classIcon = this.iconsFolder + "class_fgt.png";
        }
        else if (character.class === Class.SHT) {
          character.classIcon = this.iconsFolder + "class_sht.png";
        }
        else if (character.class === Class.STK) {
          character.classIcon = this.iconsFolder + "class_stk.png";
        }
        else if (character.class === Class.SLA) {
          character.classIcon = this.iconsFolder + "class_sla.png";
        }
        else if (character.class === Class.PWH) {
          character.classIcon = this.iconsFolder + "class_pwh.png";
        }
        else if (character.class === Class.FSP) {
          character.classIcon = this.iconsFolder + "class_fsp.png";
        }
        else if (character.class === Class.DRV) {
          character.classIcon = this.iconsFolder + "class_drv.png";
        }
        else if (character.class === Class.CER) {
          character.classIcon = this.iconsFolder + "class_cer.png";
        }
        else if (character.class === Class.DUAL) {
          character.classIcon = this.iconsFolder + "class_dual.png";
        }
      }
    }
  }

  assignClass2Icon(id: any) {
    for (let character of characters) {
      if (character.class != Class.DUAL && (
          character.class2Icon === '' ||
          character.class2Icon === undefined)
      ) {
        if (character.class2 === Class.FTR) {
          character.class2Icon = this.iconsFolder + "class_fgt.png";
        }
        else if (character.class2 === Class.SHT) {
          character.class2Icon = this.iconsFolder + "class_sht.png";
        }
        else if (character.class2 === Class.STK) {
          character.class2Icon = this.iconsFolder + "class_stk.png";
        }
        else if (character.class2 === Class.SLA) {
          character.class2Icon = this.iconsFolder + "class_sla.png";
        }
        else if (character.class2 === Class.PWH) {
          character.class2Icon = this.iconsFolder + "class_pwh.png";
        }
        else if (character.class2 === Class.FSP) {
          character.class2Icon = this.iconsFolder + "class_fsp.png";
        }
        else if (character.class2 === Class.DRV) {
          character.class2Icon = this.iconsFolder + "class_drv.png";
        }
        else if (character.class2 === Class.CER) {
          character.class2Icon = this.iconsFolder + "class_cer.png";
        }
        else if (character.class2 === Class.NONE) { }
      }
    }
  }
}


