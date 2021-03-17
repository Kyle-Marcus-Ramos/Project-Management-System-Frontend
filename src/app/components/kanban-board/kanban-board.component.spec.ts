import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { KanbanBoardComponent } from './kanban-board.component';

describe('KanbanBoardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        KanbanBoardComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(KanbanBoardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ProjectManagementSystem'`, () => {
    const fixture = TestBed.createComponent(KanbanBoardComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProjectManagementSystem');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(KanbanBoardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ProjectManagementSystem app is running!');
  });
});
