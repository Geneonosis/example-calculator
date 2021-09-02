import { TestBed, TestBedStatic, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { helpers } from './helper';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        helpers,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    expect(TestBed.createComponent(AppComponent).componentInstance).toBeTruthy();
  });

  it('should render Hello World!', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello World!');
  });

  it('should render a button!', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toEqual('Click Me!');
    expect(compiled.querySelector('button')).toBeTruthy();
    expect(compiled.querySelector('button')).not.toBe(null);
  });

  it('should create a variable expected to be a string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const APPLES = fixture.componentInstance;
    expect(APPLES.hello).toBeFalsy();
  });

  it("hello should be set to 'whatever'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const APPLES = fixture.componentInstance;
    APPLES.hello = "whatever";
    expect(APPLES.hello).toEqual("whatever");
  });

  it("should create a boolean value called testButton with the value set to false", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const ORANGES = fixture.componentInstance;
    expect(ORANGES.testButton).not.toBeTrue();
  });

  it("should create a boolean value called testButton with the value set to true", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const ORANGES = fixture.componentInstance;
    ORANGES.testButton = true;
    expect(ORANGES.testButton).toBeTrue();
  });

  it("test button click event", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const BANANAS = fixture.componentInstance;
    expect(BANANAS.testButton).toBeFalse;
    compiled.querySelector('button')?.click();
    expect(BANANAS.testButton).toBeTrue;
  });

  it("should should add 1 and 1 to make 2", () => {
    let helper: helpers = new helpers();
    expect(helper.addition(1,1)).toEqual(2);
  });

  it("should should add 1 and 1 to make 2", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const ORANGES = fixture.componentInstance;
    expect(ORANGES.helper.addition(1,1)).toEqual(2);
  });






  // it(`should have as title 'example-calculator'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('example-calculator');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('example-calculator app is running!');
  // });
});
