<template>

<div class="task-interface">
    <div>
      <h1>My Tasks</h1>

      <div class="add-task">

      <button @click="addTask"><fa :icon="['fas', 'plus']" size="2xl" color="blue" /></button>
      <input type="text" v-model="newTask" placeholder="Add a task.  .  .  ." >
      </div>
    </div>

    <div class="to-do-">
      
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <input type="radio" v-model="task.completed" @click="toggleTaskCompletion(task)">
          {{ task.text }}
          
        </li>
      </ul>
    </div>
    <div class="completed-tasks">
      <h3>Completed (<span id="completed-tasks-count">{{ completedTasksCount }}</span>)</h3>
      <ul>
        
        <li v-for="task in completedTasks" :key="task.id">
          <span class="tick-icon">&#x2714;</span>
          <del>{{ task.text }}</del>
          
        </li>
      </ul>
    </div>
  
    
</div>
<!-- <router-link to="/tasks">My Tasks</router-link> -->

</template>

<script>

export default {

    name:"HomeHeader",
  data() {
    return {
      tasks: [],
      completedTasks: [],
      newTask: '',
    };
  },
  computed: {
    completedTasksCount() {
      return this.completedTasks.length;
    }
  },
  methods: {
    addTask() {
      if (!this.newTask) {
        return;
      }

      const task = {
        id: this.tasks.length + 1,
        text: this.newTask,
        completed: false,
      };

      this.tasks.push(task);
      this.newTask = '';
    },
    toggleTaskCompletion(task) {
      if (task.completed) {
        this.removeTaskFromCompletedTasks(task);
        this.addTaskToTasks(task);
      } else {
        this.removeTaskFromTasks(task);
        this.addTaskToCompletedTasks(task);
      }
    },
    removeTaskFromTasks(task) {
      const index = this.tasks.findIndex(t => t.id === task.id);
      this.tasks.splice(index, 1);
    },
    removeTaskFromCompletedTasks(task) {
      const index = this.completedTasks.findIndex(t => t.id === task.id);
      this.completedTasks.splice(index, 1);
    },
    addTaskToTasks(task) {
      this.tasks.push(task);
    },
    addTaskToCompletedTasks(task) {
      this.completedTasks.push(task);
    },
  },


    mounted()
    {
        const user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
};

</script>

<style scoped>


.add-task {
  display: flex;
  margin-bottom: 20px;
  margin: 20px;
}

.add-task input {
  flex: 1;
  padding: 5px;
  border: rgb(206, 206, 206);
}

.add-task button {
  padding: 5px 10px;
  border: 0px solid ;
  cursor: pointer;
  position: relative;
 

}

.to-do-list,
.completed-tasks {
  border: none;
}

.to-do-list ,
.completed-tasks h3 {
  margin-bottom: 10px;
  display: flex;
  margin: 40px;
}

ul {
  list-style-type: none;
  margin: 40px;
  display: flex;
}

li {
  margin-bottom: 5px;
}

input[type="radio"] {
  margin-right: 5px;
}

del {
  text-decoration: line-through;
}

  
button{
background-color: white;
border: none;
/* border-top-left-radius: 4px;
border-bottom-left-radius: 4px; */

}


.tick-icon{
  margin: 6px;
  color: blue;
  
}


  

</style>