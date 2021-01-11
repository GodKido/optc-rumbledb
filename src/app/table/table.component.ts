import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ImageUrlService } from '../services/icons.service';
import { characters } from '../../assets/characters/Characters';
import { Class, Style } from '../../assets/Enums';
import { Unit } from 'src/assets/Unit';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RumbleAbilities } from 'src/assets/RumbleAbilities';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {

  @Output() iconPath: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  imgPath: any;
  dataSource = new MatTableDataSource<Unit>(characters);
  rumbleDataSource = new MatTableDataSource<RumbleAbilities>();
  rumbles;
  isDual = false;
  isTableExpanded = false;
  columnsToDisplay: string[] = ['id', 'icon', 'name', 'classes', 'style'];

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private service: ImageUrlService) { }
  
  ngOnInit(): void {
    // this.rumbleDataSource = [];
    console.log(this.rumbleDataSource);
    
    for (let character of characters) {
      // this.rumbleDataSource.push(character.rumble);
      // console.log('RUMBLE ABILITIES ', character.rumble)
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
    console.log(this.dataSource);
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
      character.styleIcon = this.service.assignStyleIcon(character.id);
    }
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterRumble(filterValue: string){
    this.rumbleDataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleRumble() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataSource.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    })
  }

}
