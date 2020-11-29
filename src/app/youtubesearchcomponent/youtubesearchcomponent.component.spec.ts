import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubesearchcomponentComponent } from './youtubesearchcomponent.component';

describe('YoutubesearchcomponentComponent', () => {
  let component: YoutubesearchcomponentComponent;
  let fixture: ComponentFixture<YoutubesearchcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubesearchcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubesearchcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
