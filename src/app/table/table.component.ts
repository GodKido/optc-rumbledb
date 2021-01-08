import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { ImageUrlService } from '../services/image-url.service';
import { characters } from '../../assets/characters/Characters';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() public minUrl: any;
  @Input() public htmlTag: any;
  @Input() tempFileName: any;

  @Output() iconPath: any;

  imgPath: any;
  characters = characters;

  constructor(private service: ImageUrlService) {
    this.assignIcon();
  }

  ngOnInit(): void {
  }

  assignIcon(){
    for(let character of characters){
      console.log('UNIT   ', characters);

      character.icon = this.service.assignImage(character.id);
      console.log('UNIT plus img   ', character);

      character.artwork = this.service.assignArtworkUrl(character.id);
      console.log("UNIT plus art: ", character);
    }
  }

}
