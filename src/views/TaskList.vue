<template>
  <div class="task-list">
    <h1>Zadaci</h1>
    <input v-model="taskStore.newTaskText" @keyup.enter="taskStore.addTask(taskStore.newTaskText)" placeholder="Dodaj novi zadatak...">
    <button @click="taskStore.addTask(taskStore.newTaskText)">Dodaj</button>
    
    <div>
      Prikaži:
      <button @click="taskStore.setFilter('all')">Sve</button>
      <button @click="taskStore.setFilter('active')">Aktivne</button>
      <button @click="taskStore.setFilter('done')">Završene</button>
    </div>

    <ul>
      <li v-for="task in taskStore.filteredTasks" :key="task.id">
        <label>
          <input type="checkbox" v-model="task.done">  <!-- 2 -->
          <span :class="{ done: task.done }">{{ task.text }}</span>  <!-- 1 -->
        </label>
        <button @click="taskStore.removeTask(task.id)">Obriši</button>
      </li>
    </ul>
  </div>
</template>
  
<script>
import { useTaskStore } from '@/store/taskStore';
import { watch } from 'vue';

export default {
  name: 'TaskList',
  setup() {
    const taskStore = useTaskStore();

    taskStore.loadTasks();

    watch(() => taskStore.tasks, () => { // 6
      taskStore.saveTasks();
    }, { deep: true });

    return { taskStore };
  }
}
</script>


<!-- 5 -->
<style scoped>
.task-list {
  padding: 20px;
}
.done {
  text-decoration: line-through;
}
</style>
  

<!-- Kako je izgledalo prije implementacije Pinia store-a -->
<!--
<template>
  <div class="task-list">
    <h1>Zadaci</h1>
    <input v-model="newTaskText" @keyup.enter="addTask" placeholder="Dodaj novi zadatak...">
    <button @click="addTask">Dodaj</button>

    <div>
      Prikaži:
      <button @click="setFilter('active')">Aktivne</button>
      <button @click="setFilter('done')">Završene</button>
    </div>

    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <label>
          <input type="checkbox" v-model="task.done">
          <span :class="{ done: task.done }">{{ task.text }}</span>
        </label>
        <button @click="removeTask(task.id)">Obriši</button>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  name: 'TaskList',
  data() {
    return {
      newTaskText: '',
      tasks: [],
      nextTaskId: 1,
      filter: 'all'
    }
  },
  methods: {
    addTask() {
      if (this.newTaskText.trim() !== '') {
        this.tasks.push({
          id: this.nextTaskId++,
          text: this.newTaskText,
          done: false
        });
        this.newTaskText = '';
      }
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    toggleTaskStatus(task) {
      task.done = !task.done;
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    setFilter(filter) {
      this.filter = filter;
    }
  },
  computed: {
    filteredTasks() {
      switch (this.filter) {
        case 'active':
          return this.tasks.filter(task => !task.done);
        case 'done':
          return this.tasks.filter(task => task.done);
        default:
          return this.tasks;
      }
    }
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        this.saveTasks();
      }
    },
  },
  mounted() {
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  }
}
</script>
-->