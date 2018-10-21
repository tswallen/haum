import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../property';
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

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProperty();
  }

  getProperty(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.propertyService.getProperty(id)
      .subscribe(property => this.property = property);
  }

  goBack(): void {
    this.location.back();
  }

}
