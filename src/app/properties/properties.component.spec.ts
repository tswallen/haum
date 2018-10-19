import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesComponent } from './properties.component';
import { PropertyComponent } from './property/property.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { PROPERTIES } from './mock-properties';
import { PropertyService } from '../property.service';

describe('PropertiesComponent', () => {
  const propertyService = jasmine.createSpyObj('PropertyService', ['getProperties']);
  let component: PropertiesComponent;
  let fixture: ComponentFixture<PropertiesComponent>;
  let getPropertiesSpy: jasmine.Spy;

  beforeEach(async(() => {
    getPropertiesSpy = propertyService.getProperties.and.returnValue(of(PROPERTIES));

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PropertiesComponent, PropertyComponent],
      providers: [
        { provide: PropertyService, useValue: propertyService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
