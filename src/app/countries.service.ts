import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {}

  getSingleCountry() {
    const adresa = 'https://restcountries.eu/rest/v2/name/Romania';
    return this.http.get(adresa)
  }

  getAllCountries() {
    const adresaAll = 'https://restcountries.eu/rest/v2/all';
    return this.http.get(adresaAll)
  }
}

