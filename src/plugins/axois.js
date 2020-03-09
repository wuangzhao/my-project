import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = ' http://localhost:8090/'
Vue.prototype.$axios = axios
