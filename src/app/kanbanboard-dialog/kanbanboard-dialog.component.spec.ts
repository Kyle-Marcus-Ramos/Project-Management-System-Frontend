import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanboardDialogComponent } from './kanbanboard-dialog.component';

describe('KanbanboardDialogComponent', () => {
  let component: KanbanboardDialogComponent;
  let fixture: ComponentFixture<KanbanboardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanboardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
