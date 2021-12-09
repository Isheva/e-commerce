import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensAccessoriesComponent } from './womens-accessories.component';

describe('WomensAccessoriesComponent', () => {
  let component: WomensAccessoriesComponent;
  let fixture: ComponentFixture<WomensAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensAccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
