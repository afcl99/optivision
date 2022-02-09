import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoriaComponent } from './view-historia.component';

describe('ViewHistoriaComponent', () => {
  let component: ViewHistoriaComponent;
  let fixture: ComponentFixture<ViewHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
