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

  getAllCountries() {
    const adresaAll = 'https://restcountries.eu/rest/v2/all';
    return this.httpService.get(adresaAll)
  }

  test() {

  }
}


