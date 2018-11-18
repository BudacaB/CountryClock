import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit, OnDestroy {
  
  countryName: string;
  country: any = {};
  hasServerResponded: boolean = false;
  localTime: string;
  timezone: Array<string> = [];
  intervalReference: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountriesService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => {
        var id = params.get('id')
        return id;
      })
    ).subscribe((result) => {
      this.countryName = result;
      this.countryService.getSingleCountry(this.countryName).subscribe(
        (response) => {
          this.country = response[0];
          this.timezone = this.country.timezones;
          //console.log(this.timezone);
          //this.localTime = moment().zone(timezone[0]).format('HH:mm:ss')
          this.intervalReference = setInterval(() => {this.updateTime()}, 1000);
        }
      )
      /* this.countryService.getSingleCountry(this.countryTimezone).subscribe(
        (response) => this.countryTZ = response
        ) */
    })


    // Tested -> pulled all TZs unformatted
    /* this.countryService.getSingleCountryTZ().subscribe(
      (response) => {
        this.countryTimezone = response;
        this.hasServerResponded = true;
      }
      ) */


  }

  updateTime() {
    this.localTime = moment().zone(this.timezone[0]).format('HH:mm:ss');
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalReference)
  }

}

