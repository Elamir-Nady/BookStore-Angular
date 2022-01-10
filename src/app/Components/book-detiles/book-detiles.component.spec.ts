import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetilesComponent } from './book-detiles.component';

describe('BookDetilesComponent', () => {
  let component: BookDetilesComponent;
  let fixture: ComponentFixture<BookDetilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
