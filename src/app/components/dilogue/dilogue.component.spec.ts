import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogueComponent } from './dilogue.component';

describe('DilogueComponent', () => {
  let component: DilogueComponent;
  let fixture: ComponentFixture<DilogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DilogueComponent]
    });
    fixture = TestBed.createComponent(DilogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
