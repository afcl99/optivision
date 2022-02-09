import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOptometraComponent } from './view-optometra.component';

describe('ViewOptometraComponent', () => {
  let component: ViewOptometraComponent;
  let fixture: ComponentFixture<ViewOptometraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOptometraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOptometraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
