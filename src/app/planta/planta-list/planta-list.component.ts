import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {
  plantas: Array<Planta> = [];
  countPlantasInterior = 0;
  countPlantasExterior = 0;
  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.countPlantasInterior = plantas.filter(planta => planta.tipo === "Interior").length;
      this.countPlantasExterior = plantas.filter(planta => planta.tipo === "Exterior").length;
    });
  }

  ngOnInit() {
    this.getPlantas();
  }

}
