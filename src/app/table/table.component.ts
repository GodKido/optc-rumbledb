import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { ImageUrlService } from '../services/icons.service';
import { characters } from '../../assets/characters/Characters';
import { FilterIconsService } from '../filter.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // @Input() public minUrl: any;
  // @Input() public htmlTag: any;
  // @Input() tempFileName: any;

  @Output() iconPath: any;

  imgPath: any;
  showModal = false;
  characters = characters;
  filteredCharacters = [];

  constructor(private service: ImageUrlService, private filter: FilterIconsService) {
    this.assignIcon();
    this.rumbleStyleIcon();
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

  rumbleStyleIcon(){
    for(let character of characters){
      character.rumble.styleIcon = this.service.assignStyleIcon(character.id);
    }
  }

  filterByStyle(){
    this.filter;
  }

}
