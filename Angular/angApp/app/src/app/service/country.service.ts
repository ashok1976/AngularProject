import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import{Country} from './../interface/user';
import{ map} from 'rxjs/operators'


const COUNTRIES: Country[] = [
  {"countryId": "1", "name": "India", "capital": "New Delhi", "currency": "INR"},
  {"countryId": "2", "name": "China", "capital": "Beijing", "currency": "RMB"}
];

let countriesObservable = of(COUNTRIES);
let countriesToDisplayObservable = of(COUNTRIES.concat({"countryId": "3", "name": "UK", "capital": "London", "currency": "GBP"})) 


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  forEach(arg0: (val: any) => void) {
    throw new Error("Method not implemented.");
  }

  getCountries(): Observable<Country[]>{
    return countriesToDisplayObservable;

  }
  getCountry(id: string): Observable <Country> {
    return countriesObservable.pipe(
      map(countries => countries.find(country => country.countryId === id)))
    }

}

