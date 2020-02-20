import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/model/vehiculo';
import { VehiculoServicio } from '../../services/vehiculoServicio';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [VehiculoServicio],
})
export class RegisterComponent implements OnInit {

  displayDialog: boolean;
  vehiculo: Vehiculo = new Vehiculo();
  vehiculoSeleccionado: Vehiculo;
  nuevoVehiculo: boolean;
  vehiculos: Vehiculo[];
  cols: any[];
  constructor(
    private vehiculoServicio: VehiculoServicio) {
  }

  ngOnInit() {
    this.vehiculoServicio.obtenerTodo().then(vehiculos => this.vehiculos = vehiculos);
    this.cols = [
      { field: 'placa', header: 'Placa' },
      { field: 'color', header: 'Color' },
      { field: 'modelo', header: 'Modelo' },
      { field: 'chasis', header: 'Chasis' },
      { field: 'anio', header: 'Año' }
    ];
  }

  showDialogToAdd() {
    this.nuevoVehiculo = true;
    this.vehiculo = new Vehiculo();
    this.displayDialog = true;
  }

  crear() {
    let vehicles = [...this.vehiculos];
    if (this.nuevoVehiculo) {
      vehicles.push(this.vehiculo);
      this.vehiculoServicio.crear(this.vehiculo);
    }
    else {
      vehicles[this.obtenerVehiculoSeleccionado()] = this.vehiculo;
      this.vehiculoServicio.actualizar(this.vehiculo);
    }
    this.vehiculos = vehicles;
    this.vehiculo = null;
    this.displayDialog = false;
  }

  eliminar() {
    let index = this.obtenerVehiculoSeleccionado();
    this.vehiculos = this.vehiculos.filter((val,i) => i!=index);
    this.vehiculoServicio.eliminar(this.vehiculo.id);
    this.vehiculo = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.nuevoVehiculo = false;
    this.vehiculo = this.copiarVehiculo(event.data);
    this.displayDialog = true;
  }

  copiarVehiculo(c: Vehiculo): Vehiculo {
    let vehiculo = new Vehiculo();
    for(let prop in c) {
      vehiculo[prop] = c[prop];
    }
    return vehiculo;
  }

  obtenerVehiculoSeleccionado(): number {
    return this.vehiculos.indexOf(this.vehiculoSeleccionado);
  }
}
