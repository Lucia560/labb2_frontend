<script setup>
import { ref, onMounted, watch,computed } from 'vue';

const tasks = ref([]);
const inputContent = ref(""); 
const originalContent = ref({}); 
const userIsLoggedIn = computed(() => sessionStorage.getItem('loggedIn') === 'true');

const addTask = () => {
  if (!userIsLoggedIn.value) {
    alert("Please log in to add tasks.");
    return;
  }
  if (inputContent.value.trim()) {
    tasks.value.push({
      content: inputContent.value,
      id: Date.now(),
      isEditing: false
    });
    inputContent.value = "";
  }
};



const loadTasks = () => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks);
  }
};

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
};

onMounted(() => {
  loadTasks();
});

watch(tasks, () => {
  saveTasks();
}, { deep: true });



const deleteTask = (taskId) => {
  tasks.value = tasks.value.filter(task => task.id !== taskId);
};

const editTask = (task) => {
  originalContent.value[task.id] = task.content; // Store original content
  task.isEditing = true;
};

const saveEdit = (task) => {
  task.isEditing = false;
  delete originalContent.value[task.id]; // Remove original content from the temp. storage
};

const cancelEdit = (task) => {
  task.content = originalContent.value[task.id]; // Restore original content
  task.isEditing = false;
  delete originalContent.value[task.id]; // Clean up temp. storage
};

const logout = () => {
  sessionStorage.removeItem('userName');
  sessionStorage.removeItem('loggedIn'); 
  userIsLoggedIn.value = false; 
 
  alert("You have been logged out."); 
  window.location.reload();
};
</script>



<template>
   <div id="text_container" class="text_container">
   <p>Welcome to Daily Task Manager! Here, you can effortlessly create a list of your daily tasks. 
      Feel free to add, edit, or delete tasks as needed to organize your day efficiently. 
      We're here to help you stay on top of your responsibilities!</p><br>
      <button class="logout" @click="logout">Log Out</button><br><br>
    <form @submit.prevent="addTask" v-if="userIsLoggedIn">
      <h3>Enter your task:</h3><br>
      <input type="text" placeholder="Task" v-model="inputContent">
      <button type="submit" class="add">Add Task</button>
    </form>
    <p v-else>Please log in to manage tasks.</p><br>
    
    <h3>Here are your tasks:</h3><br>
    <div v-for="task in tasks" :key="task.id" class="list_tasks">
      <template v-if="task.isEditing">
        <input type="text" v-model="task.content">
        <button class="save" @click="saveEdit(task)">Save</button>
        <button class="cancel" @click="cancelEdit(task)">Cancel</button>
      </template>
      <template v-else>
        <span>{{ task.content }}</span>
        <button class="edit" @click="editTask(task)">Edit</button>
        <button class="remove" @click="deleteTask(task.id)">Delete</button>
      </template>
    </div>
  </div>
</template>




  
<style scoped>
.text_container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 200px 40px 40px;
  font-size: 1.2em;
  color: #590A4C;
}

h2, h3 {
  color: #590A4C;
}

p {
  line-height: 1.6;
}

.list_tasks {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  padding-right: 10px; 
}

.list_tasks span {
  margin-right: 20px; 
  flex-grow: 1; 
}

.add, .remove, .edit,.save,.cancel {
  background-color: #590A4C;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer; 
}

.add:hover, .remove:hover, .edit:hover {
  background-color: #470037; 
  transform: translateY(-2px); 
}

.save, .cancel {
  margin-left: 10px;
  padding: 5px 10px;
}

.logout {
  background-color: #590A4C;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer; 
}

.logout:hover {
  background-color: #470037; 
  transform: translateY(-2px); 
}


</style>
  
  

  