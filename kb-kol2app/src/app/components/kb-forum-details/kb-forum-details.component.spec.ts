import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbForumDetailsComponent } from './kb-forum-details.component';

describe('KbForumDetailsComponent', () => {
  let component: KbForumDetailsComponent;
  let fixture: ComponentFixture<KbForumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbForumDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
