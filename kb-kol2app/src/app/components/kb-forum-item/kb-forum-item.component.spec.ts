import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbForumItemComponent } from './kb-forum-item.component';

describe('KbForumItemComponent', () => {
  let component: KbForumItemComponent;
  let fixture: ComponentFixture<KbForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbForumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
