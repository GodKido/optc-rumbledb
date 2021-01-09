import { Injectable } from '@angular/core';
import { Style } from '../assets/Enums';
import { characters } from '../assets/characters/Characters';

@Injectable({
  providedIn: 'root'
})
export class FilterIconsService {
  characters = characters;

  constructor() { }

  filterByStyle(){
    window.alert('not implemented');
  }
  
}
