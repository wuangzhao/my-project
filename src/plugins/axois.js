import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = ' http://192.168.3.4:8888'
Vue.prototype.$axios = axios
