import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  add:boolean = false; 
  addDialog(){
    this.add = true;
  }
  users = [
    {
      'photo': 'https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/417577514_298148129966854_8220368977268909937_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=W3sApRYq0WYAX9LSgdo&_nc_ht=scontent.fcai19-5.fna&oh=00_AfBBysG3AwnO6578zcPm6RTN5aUWSVjLz6B0OCK-oocmgg&oe=66038730',
      'fullName': 'Mohamed Reda', 
      'userName': 'albhoffy.dev', 
      'email': 'moreda272@gmil.com'
    },
    {
      'photo': 'https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/417577514_298148129966854_8220368977268909937_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=W3sApRYq0WYAX9LSgdo&_nc_ht=scontent.fcai19-5.fna&oh=00_AfBBysG3AwnO6578zcPm6RTN5aUWSVjLz6B0OCK-oocmgg&oe=66038730',
      'fullName': 'Mohamed Reda', 
      'userName': 'albhoffy.dev', 
      'email': 'moreda272@gmil.com'
    },
    {
      'photo': 'https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/417577514_298148129966854_8220368977268909937_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=W3sApRYq0WYAX9LSgdo&_nc_ht=scontent.fcai19-5.fna&oh=00_AfBBysG3AwnO6578zcPm6RTN5aUWSVjLz6B0OCK-oocmgg&oe=66038730',
      'fullName': 'Mohamed Reda', 
      'userName': 'albhoffy.dev', 
      'email': 'moreda272@gmil.com'
    },
    {
      'photo': 'https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/417577514_298148129966854_8220368977268909937_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=W3sApRYq0WYAX9LSgdo&_nc_ht=scontent.fcai19-5.fna&oh=00_AfBBysG3AwnO6578zcPm6RTN5aUWSVjLz6B0OCK-oocmgg&oe=66038730',
      'fullName': 'Mohamed Reda', 
      'userName': 'albhoffy.dev', 
      'email': 'moreda272@gmil.com'
    },
    {
      'photo': 'https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/417577514_298148129966854_8220368977268909937_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=W3sApRYq0WYAX9LSgdo&_nc_ht=scontent.fcai19-5.fna&oh=00_AfBBysG3AwnO6578zcPm6RTN5aUWSVjLz6B0OCK-oocmgg&oe=66038730',
      'fullName': 'Mohamed Reda', 
      'userName': 'albhoffy.dev', 
      'email': 'moreda272@gmil.com'
    },
    {
      'photo': 'https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/417577514_298148129966854_8220368977268909937_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=W3sApRYq0WYAX9LSgdo&_nc_ht=scontent.fcai19-5.fna&oh=00_AfBBysG3AwnO6578zcPm6RTN5aUWSVjLz6B0OCK-oocmgg&oe=66038730',
      'fullName': 'Mohamed Reda', 
      'userName': 'albhoffy.dev', 
      'email': 'moreda272@gmil.com'
    },

    
  ];
}
