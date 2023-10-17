import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }
  
  showCartPopup(message:string) {
    var cartPopup = document.getElementById("cartPopup") as HTMLDivElement;
    cartPopup.innerHTML = message;
    cartPopup.style.display = "block";
    setTimeout(function(){ cartPopup.style.display = "none"; }, 2500); // Hide after 2.5 seconds
  }
}
