/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';


import { PlantaListComponent } from './planta-list.component';
import { Planta } from '../planta';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    component.plantas = [
      new Planta(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence()),
      new Planta(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence()),
      new Planta(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence())
    ]
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it("Component has a table with header", () => {
    expect(debug.query(By.css("thead")).children.length).toEqual(1);
  });

  it("Component has a table with three rows of elements", () => {
    expect(debug.query(By.css("tbody")).children.length).toEqual(component.plantas.length);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
