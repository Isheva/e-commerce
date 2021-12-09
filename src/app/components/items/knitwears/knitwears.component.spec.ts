import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnitwearsComponent } from './knitwears.component';

describe('KnitwearsComponent', () => {
  let component: KnitwearsComponent;
  let fixture: ComponentFixture<KnitwearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnitwearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnitwearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
