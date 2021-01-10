import { ChangeDetectorRef, Component, OnInit, Output, ViewChild } from '@angular/core';
import { ImageUrlService } from '../services/icons.service';
import { characters } from '../../assets/characters/Characters';
import { FilterIconsService } from '../filter.service';
import { Class } from '../../assets/Enums';
import { Unit } from 'src/assets/Unit';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Output() iconPath: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  imgPath: any;
  dataSource = new MatTableDataSource<Unit>(characters);
  isDual = false;
  columnsToDisplay = ['id', 'icon', 'name', 'classes', 'style'];
  
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private service: ImageUrlService, private filter: FilterIconsService) { }
  
  ngOnInit(): void {
    
    for (let character of characters) {
      this.assignIcon();
      this.rumbleStyleIcon();
      
      if (character.class === Class.DUAL) {
        character.class2 = Class.NONE;
        this.isDual = true;
      } else {
        this.isDual = false;
      }
      this.assignClassIcon();
      
    }
    // document.getElementById('searchBar');
  }

  
  assignIcon() {
    for (let character of characters) {
      character.icon = this.service.assignImage(character.id);
      character.artwork = this.service.assignArtworkUrl(character.id);
    }
  }

  assignClassIcon() {
    for (let character of characters) {
      character.classIcon = this.service.assignClassIcon(character.id);
      character.class2Icon = this.service.assignClass2Icon(character.id);
    }
  }

  rumbleStyleIcon() {
    for (let character of characters) {
      character.rumble.styleIcon = this.service.assignStyleIcon(character.id);
    }
  }

}
