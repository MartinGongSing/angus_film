import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  title = 'Mes Films App';

  constructor(private user:UsersService) { 

    this.user.getData().subscribe(data=>{
      console.warn(data);
    })
  }
}
