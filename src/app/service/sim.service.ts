import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SimComponent } from '../components/sim/sim.component';

@Injectable({
  providedIn: 'root'
})
export class SimService {
  private apiUrl = 'http://backend.com/api/sim-card-subscriptions/getall';
  private http = inject(HttpClient);

  listsims(): Observable<SimComponent[]> {
    return this.http.get<SimComponent[]>(this.apiUrl);
  }
}
