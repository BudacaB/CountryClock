import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  tari: any;
  hasServerResponded: boolean = false
  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getAllCountries().subscribe(
      (response) => {
        //this.romania = response[0]
        this.tari = response
        this.hasServerResponded = true;
      }
      )
  }
}

