import {Injectable} from '@angular/core';
import {Post} from '../../model/Post';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KBDataService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiServerUrl}/api/forum/posts`);
  }

  public getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiServerUrl}/api/forum/posts/` + id);
  }
}
