export class Todo {
  id: string;
  title: string;
  isDone: boolean;

  constructor(todoTexto: string) {
    this.title = todoTexto;
    this.id = new Date().toISOString()
    this.isDone = false;
  }
}
