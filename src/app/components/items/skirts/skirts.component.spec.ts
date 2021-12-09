import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkirtsComponent } from './skirts.component';

describe('SkirtsComponent', () => {
  let component: SkirtsComponent;
  let fixture: ComponentFixture<SkirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkirtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
