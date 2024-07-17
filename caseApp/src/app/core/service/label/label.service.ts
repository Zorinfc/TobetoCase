import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LabelDTO } from '../../module/label/label';

@Injectable({
  providedIn: 'root',
})
export class LabelService {
  constructor(private httpClient: HttpClient) {}

  getAllLabels(): Observable<LabelDTO> {
    return this.httpClient.get<LabelDTO>('/label');
  }

  createLabel(val: any): Observable<any> {
    return this.httpClient.post<LabelDTO>('/label/create', { labelName: val });
  }

  deleteLabel(id: number): Observable<any> {
    return this.httpClient.post<LabelDTO>('/label/create', { id: id });
  }
}
