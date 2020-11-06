import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionCrearComponent } from './reunion-crear.component';

describe('ReunionCrearComponent', () => {
  let component: ReunionCrearComponent;
  let fixture: ComponentFixture<ReunionCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReunionCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
