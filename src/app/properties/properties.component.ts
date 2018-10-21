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
    this.selectedFilters = {
      bathrooms: 1,
      bedrooms: 2,
      parking: 2,
      price: '<500'
    };
    this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getProperties()
      .subscribe(properties => this.properties = properties);
  }

}
