import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   public userData:any = [];
   public userTitle:string='';
  constructor(private userService: UserService){
  }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.userService.getUSerData().subscribe((res: any) => {
      this.userData = res;
      console.log(this.userData);
    })
  }
 showTitle(event: any, title: string) {
  this.userTitle = title;
 }
}
