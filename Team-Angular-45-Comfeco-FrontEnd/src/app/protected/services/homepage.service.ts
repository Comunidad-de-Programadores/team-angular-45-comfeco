import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Comunity, Sponsor, ContentCreator, Technologies, Area } from '../interfaces/interfaces';
import { Pagination } from '../../auth/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private baseUrl: String = environment.baseUrl;
  private _evento: Event;

  constructor(private http: HttpClient) {

   }

   get event() {
    return { ...this._evento };
  }

  eventInfo() {
    const url = `${this.baseUrl}/events`;
    return this.http.get(url).pipe(
      tap((resp) => {
        console.log(resp);
      }),
      catchError((err) => of(err.error))
    );
  }

  getTecnologias() {
    const url = `${this.baseUrl}/technologies`;
    return this.http.get(url).pipe(
      tap((resp) => {
        console.log(resp);
      }),
      catchError((err) => of(err.error))
    );
  }

  getComunidades(pagination:Pagination){
    const url = `${this.baseUrl}/communities`

    let queryParams = this.getPaginationParams(new HttpParams(),pagination);




    return this.http.get<Comunity[]>(url,{params:queryParams})
  }

  getSponsors(pagination:Pagination)
  {
    const url = `${this.baseUrl}/sponsors`;

       let queryParams = this.getPaginationParams(new HttpParams(),pagination);

       return this.http.get<Sponsor[]>(url,{params:queryParams});

  }

  getContentCreators(pagination:Pagination){

    const url = `${this.baseUrl}/users/contentcreators`

    let queryParams = this.getPaginationParams(new HttpParams(),pagination);



    return this.http.get<ContentCreator[]>(url,{params:queryParams})

  }

  getArea(id:number){
    const url =`${this.baseUrl}/areas/${id}`

    return this.http.get<Area>(url);

  }
  private getPaginationParams(params:HttpParams ,pagination:Pagination):HttpParams{

    return params.append('page',pagination.Page.toString())
    .append('RecordsPerPage',pagination.RecordsPerPage.toString());

  }


}

