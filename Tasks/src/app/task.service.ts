import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private _http: HttpClient) { }

  getAllTasks() {
    return this._http.get("/tasks");
  }

  addTask(newtask) {
    return this._http.post("/tasks", newtask);
  }

  getTask(id) {
    return this._http.get("/tasks/" + id);
  }

  editTask(id, edittask) {
    return this._http.put("/tasks/" + id, edittask);
  }

  deleteTask(id) {
    return this._http.delete("/tasks/" + id);
  }
}
