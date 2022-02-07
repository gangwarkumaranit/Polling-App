import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private httpClient: HttpClient) { }

  public vote(_id: string, option_text: string) {
    const access_token = localStorage.getItem('access_token')
    const httpOptions = {
        headers: new HttpHeaders({
          'access_token':  access_token
        })
      };
      return this.httpClient.get(`https://secure-refuge-14993.herokuapp.com/do_vote?id=577212fdd1bba33c17b5b64e&option_text=nodejs _id=${_id}&option_text=${option_text}`, httpOptions);
}
}
