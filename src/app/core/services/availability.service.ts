import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

export interface AvailabilityPayload {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  notes: string;
  preferredLanguage: string;
}

@Injectable({ providedIn: 'root' })
export class AvailabilityService {
  submitRequest(payload: AvailabilityPayload): Observable<{ reference: string }> {
    const now = Date.now().toString().slice(-6);
    const first = payload.name.trim().charAt(0).toUpperCase() || 'R';

    return of({ reference: `${first}-${now}` }).pipe(delay(650));
  }
}
