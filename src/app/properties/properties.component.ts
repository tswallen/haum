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

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.selectedFilters = new Filters();
    this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getProperties()
      .subscribe(properties => this.properties = properties);
  }

  search(): void {
    if (!this.selectedFilters.location) { delete this.selectedFilters.location; }
    this.propertyService.searchProperties(this.selectedFilters)
      .subscribe(properties => this.properties = properties);
    window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.propertyService.addProperty({ name } as Property)
      .subscribe(property => {
        this.properties.push(property);
      });
  }

  focus(focus: boolean): void {
    if (!focus) {
      document.getElementById('search').blur();
      return;
    }
    document.getElementById('search').focus();
  }
}
