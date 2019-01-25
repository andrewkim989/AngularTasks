import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  newTask: any;
  tasks: any;
  task: any;
  copy: any;
  show: boolean = false;
  editTask: any;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.newTask = {task: "", created_at: Date.now(), updated_at: Date.now()};
    this.getTasks();
  }

  getTasks() {
    let t = this.taskService.getAllTasks();
    t.subscribe(data => {
      this.tasks = data;
    })
  }

  createTask() {
    let create = this.taskService.addTask({task: this.newTask.task,
      created_at: this.newTask.created_at, updated_at: this.newTask.updated_at});
    create.subscribe();
    this.newTask = {task: "", created_at: Date.now(), updated_at: Date.now()};
    this.getTasks();
  }

  getSingleTask(task) {
    this.editTask = task;
    this.task = task;
    var id = this.tasks.indexOf(this.task);
    this.taskService.getTask(id);
    this.copy = Object.assign({}, this.task);
    this.show = true;
  }

  cancel() {
    Object.assign(this.task, this.copy);
    this.show = false;
  }

  editSingleTask() {
    var id = this.tasks.indexOf(this.editTask);
    let edit = this.taskService.editTask(id, this.editTask);
    edit.subscribe();
    this.show = false;
    this.getTasks();
  }

  deleteTask(task) {
    var id = this.tasks.indexOf(task);
    let deleted = this.taskService.deleteTask(id);
    deleted.subscribe();
    this.getTasks();
    this.show = false;
  }
}
