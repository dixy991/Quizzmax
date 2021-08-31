import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryQuizzesComponent } from './category-quizzes.component';

describe('CategoryQuizzesComponent', () => {
  let component: CategoryQuizzesComponent;
  let fixture: ComponentFixture<CategoryQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryQuizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
