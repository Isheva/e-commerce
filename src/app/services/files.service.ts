import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private apiUrl = 'http://localhost:5000/files'

  constructor(private http:HttpClient) { }

  getFiles() : Observable<File[]>{
    return this.http.get<File[]>(this.apiUrl)
}

  addFile(files: File): Observable<File> {
    return this.http.post<File>(this.apiUrl, files, httpOptions);
  }
}
