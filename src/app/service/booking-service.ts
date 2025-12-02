import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/CarRentalApp';

  constructor(private http: HttpClient) {}

  getAllBookings() {
    return this.http.get(this.apiUrl + '/geAllBookings');
  }

  getAllCars() {
    return this.http.get(this.apiUrl + '/GetCars');
  }

  saveBooking(obj: any) {
    return this.http.post(this.apiUrl + '/CreateNewBooking', obj);
  }
}
