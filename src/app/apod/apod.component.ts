import { Component, OnInit } from '@angular/core';
// import ActivatedRouter
import { ActivatedRouter, ActivatedRoute } from '@angular/router';
import { ApodService } from '../api/apod.service';
import { Apod } from '../models/apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {
  // import and assign model
  apod: Apod;

  constructor(
    private apodService: ApodService,
    // inject ActivatedRoute
    private router: ActivatedRoute  
  ) { }

  ngOnInit() {
    // sucscribe to param route
    this.router.params.subscribe((params) => {
      this.getApod(params['date']);
    });
  }

  // run request and assign response to model variable
  // call getApod w/ date as param
  getApod(date: string): void {

    this.apodService.getApod(date).subscribe(
      (response: any) => {
        this.apod = response;
        console.log(response);
      }
    );
  }

}
