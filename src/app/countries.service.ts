import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpService: HttpClient) {}

  getSingleCountry(countryIndicator) {
    const adresa = 'https://restcountries.eu/rest/v2/name/' + countryIndicator;
    return this.httpService.get(adresa)
  }

  // Trying to replicate above pointing to timezones property
  /* getSingleCountryTZ(tz) {
    const timezone = 'https://restcountries.eu/rest/v2/name?fields=timezones';
    tz = tz;
    return this.httpService.get(timezone)
  } */

  getAllCountries() {
    const adresaAll = 'https://restcountries.eu/rest/v2/all';
    return this.httpService.get(adresaAll)
  }

  test() {

  }
}



