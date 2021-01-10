import { Component, OnInit } from '@angular/core';
import { FilterIconsService } from '../filter.service';
import { Style } from '../../assets/Enums';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private filter: FilterIconsService) { }

  ngOnInit(): void {
  }

  filterByStyle() {
    this.filter.filterByStyle();
  }

}
