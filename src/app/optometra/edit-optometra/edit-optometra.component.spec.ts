import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOptometraComponent } from './edit-optometra.component';

describe('EditOptometraComponent', () => {
  let component: EditOptometraComponent;
  let fixture: ComponentFixture<EditOptometraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOptometraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOptometraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
