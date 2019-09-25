import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapersoneComponent } from './listapersone.component';

describe('ListapersoneComponent', () => {
  let component: ListapersoneComponent;
  let fixture: ComponentFixture<ListapersoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapersoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
