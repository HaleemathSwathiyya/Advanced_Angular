import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the background color of the color box', () => {
    const color = 'blue';
    component.childColor = color;
    fixture.detectChanges();
    const colorBox = fixture.nativeElement.querySelector('.color-box');
    expect(colorBox.style.backgroundColor).toBe(color);
  });
});
