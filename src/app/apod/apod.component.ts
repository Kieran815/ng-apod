import { Component, OnInit } from '@angular/core';
// import ActivatedRouter
import { ActivatedRoute } from '@angular/router';
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
  // create date as instance var
  date: string;

  constructor(
    // assign apod var
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
    if (!date) {
      date = new Date().toISOString().slice(0, 10)
    }

    this.apodService.getApod(date).subscribe(
      (response: any) => {
        // assign res obj to apod model
        this.apod = response;
        // update this.date on api call
        this.date = this.randomDate(new Date(1995, 5, 16), new Date());
        console.log(this.date);
      }
    );
  }

  // create randomDate method
  randomDate(start, end): string {
    let date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return new Date(date).toISOString().slice(0, 10);
  }

}
