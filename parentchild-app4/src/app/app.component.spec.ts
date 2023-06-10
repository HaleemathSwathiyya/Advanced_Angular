import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
//import { ChildComponent } from './child/child.component';
//import { ChildComponent } from './child.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
//import { ChildComponent } from './child.component';



describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule], // Add this line
    }).compileComponents();
  
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ChildComponent], // Add ChildComponent here
      imports: [FormsModule],
    }).compileComponents();
  
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'parentchild-app4'`, () => {
    expect(component.title).toEqual('parentchild-app4');
  });

  it('should change the parent color when the button is clicked', () => {
    component.entercolor = 'red';
    component.changeColor();
    expect(component.parentColor).toBe('red');
  });
});
