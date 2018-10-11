import { TestBed } from '@angular/core/testing';

import { PropertyService } from './property.service';
import { HttpClientModule } from '@angular/common/http';

describe('PropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: PropertyService = TestBed.get(PropertyService);
    expect(service).toBeTruthy();
  });
});
