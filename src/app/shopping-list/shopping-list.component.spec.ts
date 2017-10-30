import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListtComponent } from './shopping-list.component';

describe('ShoppingListtComponent', () => {
  let component: ShoppingListtComponent;
  let fixture: ComponentFixture<ShoppingListtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
