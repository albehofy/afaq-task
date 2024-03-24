import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  show: boolean = false;
  edit: boolean = false;
  del: boolean = false;
  showDialog() {
      this.show = true;
  }
  editDialog(){
    this.edit = true;
  }
  deleteDialog(){
    this.del = true;
  }
}
