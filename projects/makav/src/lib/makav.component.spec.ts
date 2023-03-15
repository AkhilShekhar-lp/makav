import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakavComponent } from './makav.component';

describe('MakavComponent', () => {
  let component: MakavComponent;
  let fixture: ComponentFixture<MakavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
