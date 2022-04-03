import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentslistService {
  heroes: any = [
    { id: 1, name: 'Dr Nice', email: 'nice@gmail.com', gender: 'male', date_of_birth: '1994-03-23', mobile: '9866543457' },
    { id: 2, name: 'Narco', email: 'narco@gmail.com', gender: 'male', date_of_birth: '1994-03-23', mobile: '9866543457'  },
    { id: 3, name: 'Bombasto', email: 'bombasto@gmail.com', gender: 'male',date_of_birth: '1994-03-23', mobile: '9866543457'  },
    { id: 4, name: 'Celeritas', email: 'celeritas@gmail.com', gender: 'female',date_of_birth: '1994-03-23', mobile: '9866543457'  },
    { id: 5, name: 'Magneta', email: 'magenta@gmail.com', gender: 'female', date_of_birth: '1994-03-23', mobile: '9866543457'  }
  ];
  constructor() { }
  getStudentsList(): Observable<any> {
    return this.heroes;
  }
  
}
