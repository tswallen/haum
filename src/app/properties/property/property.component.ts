import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { Property, Image } from '../property';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PropertyService } from 'src/app/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.sass']
})
export class PropertyComponent implements OnInit {
  @Input() property: Property;

  selectedImage: Image;

  features: {
    bath: Number,
    bed: Number,
    car: Number
  };

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProperty();
  }

  /** Subscribes to a property */
  getProperty(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.propertyService.getProperty(id)
      .subscribe(property => this.property = property)
      .add(() => this.selectedImage = this.property.images[0])
      .add(() => this.features = {
        bath: this.property.bathrooms,
        bed: this.property.bedrooms,
        car: this.property.parking
      });
  }

  /** Navigates to the previous page */
  goBack(): void {
    this.location.back();
  }

}
