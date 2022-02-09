import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptometraComponent } from './add-optometra.component';

describe('AddOptometraComponent', () => {
  let component: AddOptometraComponent;
  let fixture: ComponentFixture<AddOptometraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOptometraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOptometraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
