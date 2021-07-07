import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcompComponent } from './webcomp.component';

describe('WebcompComponent', () => {
  let component: WebcompComponent;
  let fixture: ComponentFixture<WebcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
