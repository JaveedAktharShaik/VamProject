import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavacompComponent } from './javacomp.component';

describe('JavacompComponent', () => {
  let component: JavacompComponent;
  let fixture: ComponentFixture<JavacompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavacompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavacompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
