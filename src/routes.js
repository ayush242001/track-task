import Home from './components/TaskForm.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
// import Task from './Task.vue'; // Import the Task component


const routes = [
    {
        name:"Home",
        component:Home,
        path:'/home'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router