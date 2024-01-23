import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    nextTaskId: 1,
    filter: 'all'
  }),
  getters: {
    filteredTasks: (state) => {
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
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    loadTasks() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks);
      }
    }
  }
});
