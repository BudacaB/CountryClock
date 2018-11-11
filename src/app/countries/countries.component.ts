import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  //romania: any;
  tari: any;
  hasServerResponded: boolean = false
  constructor(private countriesService: CountriesService, private router: Router) { }


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

    seeCountryDetails(tara) {
      this.router.navigate(["/country-detail/", tara]) 
    }

}


