import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, CarModel } from '../../model/vehicleModel';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  imports: [FormsModule, CommonModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.scss',
})
export class Vehicles implements OnInit {
  newCarObj: CarModel;
  http = inject(HttpClient);
  carsList: CarModel[] = [];

  constructor() {
    this.newCarObj = new CarModel();
  }

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.http
      .get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars')
      .subscribe((res: APIResponseModel) => {
        this.carsList = res.data;
      });
  }

  onSaveVehicle() {
    this.http
      .post<APIResponseModel>(
        'https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar',
        this.newCarObj
      )
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Vehicle added successfully.');
          this.getAllCars();
          const form = document.getElementById('dataInputForm') as HTMLFormElement;
          form?.reset();
        } else {
          alert(res.message);
        }
      });
  }

  onUpdateVehicle() {
    this.http
      .put<APIResponseModel>(
        'https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar',
        this.newCarObj
      )
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Vehicle updated successfully.');
          this.getAllCars();
        } else {
          alert(res.message);
        }
      });
  }

  onDeleteVehicleById(id: number) {
    this.http
      .delete<APIResponseModel>(
        'https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=' + id
      )
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Vehicle deleted successfully.');
          this.getAllCars();
        } else {
          alert(res.message);
        }
      });
  }

  onEditVehicle(data: CarModel) {
    this.newCarObj = data;
  }

  // openAddModal() {
  //   const form = document.getElementById('dataInputForm') as HTMLFormElement;
  //   form?.reset();
  // }
}
