import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchboxcomponentComponent } from './searchboxcomponent.component';

describe('SearchboxcomponentComponent', () => {
  let component: SearchboxcomponentComponent;
  let fixture: ComponentFixture<SearchboxcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchboxcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchboxcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
