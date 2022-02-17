import { TestBed } from '@angular/core/testing';

import { SqlConexionService } from './sql-conexion.service';

describe('SqlConexionService', () => {
  let service: SqlConexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlConexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
