import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionListaComponent } from './reunion-lista.component';

describe('ReunionListaComponent', () => {
  let component: ReunionListaComponent;
  let fixture: ComponentFixture<ReunionListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReunionListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
