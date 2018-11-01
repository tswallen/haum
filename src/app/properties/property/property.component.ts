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
    this.features = {
      bath: 0,
      bed: 0,
      car: 0
    };
  }

  getProperty(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.propertyService.getProperty(id)
      .subscribe(property => this.property = property)
      .add(() => this.selectedImage = this.property.images[0]
      );
  }

  goBack(): void {
    this.location.back();
  }

}
