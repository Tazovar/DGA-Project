import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  private showAlert(icon: any, title: string, text?: string, position?: any) {
    return Swal.fire({
      position: position || "top-end",
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 1500
    });
  }

  errorOnRemoveAlert(name: string) {
    return this.showAlert("error", `You can't delete ${name} because it's the last one`);
  }

  sucessOnSubmitAlert() {
    return this.showAlert("success", "Form sent Thank you");
  }

  addPositionOrJob(name: string) {
    return this.showAlert("success", `${name} added`);
  }

  removePositionOrJob(name: string) {
    return this.showAlert("warning", `${name} deleted`);
  }

  errorMoviesSearchAlert(searchQuery: string) {
    return this.showAlert("error", "Oops...", `Something went wrong! There is no film with such a name "${searchQuery}"`);
  }

  successMovieSearchAlert() {
    return this.showAlert("success", "fetch Data successfully");
  }

  constructor() { }
}
