import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Vehiculo } from '../model/vehiculo';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class VehiculoServicio {
    private headers = new Headers({'Content-Type': 'application/json'});
    private url = environment.noCirculaServicio + 'vehiculo';

    constructor(private http: Http) {

    }

    obtenerTodo() {
        return this.http.get(this.url)
                    .toPromise()
                    .then((res: Response) =>  res.json())
                    .then(data => data._embedded.vehiculos as Vehiculo[]);
    }

    crear(vehiculo: Vehiculo) {
        let options = new RequestOptions({ headers: this.headers });
        let body = JSON.stringify(vehiculo);
        return this.http
            .post(this.url, body, options ).toPromise()
            .then((res: Response) => res.json())
            .catch(this.error);
    }

    eliminar(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        let options = new RequestOptions({headers: this.headers});
        return this.http.delete(url, options)
            .toPromise()
            .then(() => null)
            .catch(this.error);
    }

    actualizar(vehiculo: Vehiculo): Promise<Vehiculo> {
        const url = `${this.url}/${vehiculo.id}`;
        let options = new RequestOptions({headers: this.headers});
        return this.http
            .put(url, JSON.stringify(vehiculo), options)
            .toPromise()
            .then(() => vehiculo)
            .catch(this.error);
    }

    private error(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
