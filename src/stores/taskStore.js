import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: {
      'ID1' :{
        name: "Go to shop",
        completed: false,
        dueDate: "17/02/2032",
        dueTime: "15:45"
      },
      'ID2' :{
        name: "Get bananas",
        completed: false,
        dueDate: "18/02/2032",
        dueTime: "18:45"
      },
      'ID3' :{
        name: "Go to shell",
        completed: false,
        dueDate: "25/02/2032",
        dueTime: "10:45"
      }
    }
  }),
  actions:{
    updateTask(task) {
      console.log(task)
      return task.completed = !task.completed;
    },
    deleteTask(id){
      console.log("deleteTask" + id)
      delete this.tasks[id]
    }
  },
  getters:{
    // Puedes definir getters aquí si los necesitas
  }
});
