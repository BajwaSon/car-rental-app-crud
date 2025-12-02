import { Component, inject, OnInit } from '@angular/core';
import { BookingService } from '../../service/booking-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
})
export class Booking implements OnInit {
  bookingServ = inject(BookingService);
  carList: any[] = [];
  bookingList: any[] = [];

  bookingForm: FormGroup = new FormGroup({
    customerName: new FormControl(''),
    customerCity: new FormControl(''),
    mobileNo: new FormControl(''),
    email: new FormControl(''),
    bookingId: new FormControl(0),
    carId: new FormControl(0),
    bookingDate: new FormControl(''),
    discount: new FormControl(0),
    totalBillAmount: new FormControl(0),
  });

  ngOnInit() {
    this.getCarsList();
    this.getBookingsList();
  }

  getCarsList() {
    this.bookingServ.getAllCars().subscribe((res: any) => {
      this.carList = res.data;
    });
  }

  getBookingsList() {
    this.bookingServ.getAllBookings().subscribe((res: any) => {
      this.bookingList = res.data;
    });
  }

  onSaveBooking() {
    const formValue = this.bookingForm.value;
    this.bookingServ.saveBooking(formValue).subscribe((res: any) => {
      if (res.result) {
        alert('Booking created successfully.');
        this.getBookingsList();
      } else {
        alert(res.message);
      }
    });
  }
}
