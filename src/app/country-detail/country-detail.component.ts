import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  countryName: string;
  country: any;

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
        (response) => this.country = response
      )
      
    })
  }
}

