import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionDetalleComponent } from './reunion-detalle.component';

describe('ReunionDetalleComponent', () => {
  let component: ReunionDetalleComponent;
  let fixture: ComponentFixture<ReunionDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReunionDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
