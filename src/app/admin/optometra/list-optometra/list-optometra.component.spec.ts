import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOptometraComponent } from './list-optometra.component';

describe('ListOptometraComponent', () => {
  let component: ListOptometraComponent;
  let fixture: ComponentFixture<ListOptometraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOptometraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOptometraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
