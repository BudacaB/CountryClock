import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  //romania: any;
  tari: any;
  hasServerResponded: boolean = false
  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
   /*  this.countriesService.getSingleCountry().subscribe(
    (response) => {
      this.romania = response[0]
      this.hasServerResponded = true;
    }
    ) */
    
    this.countriesService.getAllCountries().subscribe(
      (response) => {
        //this.romania = response[0]
        this.tari = response
        this.hasServerResponded = true;
      }
      )
  }

}
