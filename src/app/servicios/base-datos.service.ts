import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {

  databaseObj :SQLiteObject;
  tables = {
    login : "login",
  
  };
  
  constructor(private sqlite: SQLite) { }

  async createDatabase() {
    await this.sqlite.create({
      name : "data_local",
      location: "default"
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      //this.createTables();
      return 'ok';
    }).catch;((e) => {
      alert("error al crear la base de datos "+ JSON.stringify(e));
    })
  }
}
