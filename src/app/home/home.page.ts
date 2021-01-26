import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from '../model/colors.model';
import { ColorsService } from '../services/colors.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  colors: Color[] = [];
  constructor(private colorService: ColorsService, private router: Router) {
    this.colorService.getColors().subscribe(res => {
      this.colors = res.data;
    })
  }

  itemClick(id: number){
    this.router.navigate(['color', id]);
  }
  
}
