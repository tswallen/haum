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
    Bathrooms: [1, 2, 3],
    Bedrooms: [1, 2, 3],
    Parking: [1, 2, 3],
    Price: ['<500', '1000 - 2000', '>2000']
  };

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getProperties()
      .subscribe(properties => this.properties = properties);
  }

}
