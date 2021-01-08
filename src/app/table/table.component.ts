import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { Unit } from '../Unit';
import { ImageUrlService } from '../services/image-url.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() public sanitizedUrl: any;
  @Input() public htmlTag: any;
  @Input() tempFileName: any;
  @Output() iconPath: any;
  imgPath: any;
  // id: any;

  constructor(private service: ImageUrlService) {
    // this.fileNameBuilder(dummies[0].id);
    console.log('+++++ ', this.dummies[0])
  }

  ngOnInit(): void {
    console.log('DUMMIES ', this.dummies);
  }

  public dummies: Unit[] = [
    {
      id: 2958,
      icon: 'assets/icons/f2958.png',
      name: 'Luffy',
      style: 'ATK'
    },
    {
      id: 2588,
      icon: 'assets/icons/f2588.png',
      name: 'Nami',
      style: 'DEF'
    },
  ];

  fileNameBuilder(id: number) {
    for (let unit of this.dummies) {
      unit.icon = 'assets/icons/f' + id + '.png';
      this.iconPath = unit.icon;
    }
    console.log('------ ', this.iconPath)
  }

}
