import { Component, OnInit } from '@angular/core';
import { Property } from './property';
import { PropertyService } from '../property.service';
import { Filters } from './filters';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.sass']
})
export class PropertiesComponent implements OnInit {
  properties: Property[];

  showFilters: boolean;
  selectedFilters: Filters;
  filterOptions = {
    bathrooms: [1, 2, 3],
    bedrooms: [1, 2, 3],
    parking: [1, 2, 3],
    price: ['<500', '1000 - 2000', '>2000']
  };

  adding: boolean;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.selectedFilters = new Filters();
    this.getProperties();
  }

  /** Subscribes to an array of properties */
  getProperties(): void {
    this.propertyService.getProperties()
      .subscribe(properties => this.properties = properties);
  }

  /** Subscribes to an array of filtered properties then navigates to the results */
  search(): void {
    if (!this.selectedFilters.location) { delete this.selectedFilters.location; }
    this.propertyService.searchProperties(this.selectedFilters)
      .subscribe(properties => this.properties = properties);
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }

  /** Adds a new property to the API then appends it to the properties list
    @param name the name of the new property
   */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.propertyService.addProperty({ name } as Property)
      .subscribe(property => {
        this.properties.push(property);
      });
  }

  /** Toggles the filters focused/unfocused
    @param focus sets focused or unfocused
   */
  focus(focus: boolean): void {
    const search = document.getElementById('search');
    if (!focus) {
      search.setAttribute('placeholder', 'Type anything...');
      search.blur();
      return;
    }
    search.setAttribute('placeholder', '');
    search.focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /** Removes the desired value from the selected filters
    @param index the index of the value to be deleted
   */
  clear(index: string | number): void {
    delete this.selectedFilters[index];
  }
}
