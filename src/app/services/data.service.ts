import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const transactions = '../assets/data/transactions.json'
const transactions = 'http://ellefu.eu/ind/assets/data/transactions.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient ) { }

    getTransactions() {
        return this.http.get(transactions)
    }

}
