import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {  // 10
  state: () => ({
    tasks: [],
    nextTaskId: 1,
    filter: 'all'
  }),
  getters: {
    filteredTasks: (state) => { // 4
      switch (state.filter) {
        case 'active':
          return state.tasks.filter(task => !task.done);
        case 'done':
          return state.tasks.filter(task => task.done);
        default:
          return state.tasks;
      }
    }
  },
  actions: {
    addTask(text) {
      if (text.trim() !== '') {
        this.tasks.push({
          id: this.nextTaskId++,
          text: text,
          done: false
        });
      }
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    toggleTaskStatus(task) {
      task.done = !task.done;
    },
    setFilter(filter) {
      this.filter = filter;
    },
    saveTasks() {  // 11
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    loadTasks() {  // 11
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks);
      }
    }
  }
});
