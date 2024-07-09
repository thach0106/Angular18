import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailViewComponent } from './blog-detail-view.component';

describe('BlogDetailViewComponent', () => {
  let component: BlogDetailViewComponent;
  let fixture: ComponentFixture<BlogDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
