import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresultComponentComponent } from './searchresult-component.component';

describe('SearchresultComponentComponent', () => {
  let component: SearchresultComponentComponent;
  let fixture: ComponentFixture<SearchresultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchresultComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
