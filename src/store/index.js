// Import necessary modules
import axios from 'axios';

// Initial state
const state = {
  user: null,
};

// Mutations
const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};

// Actions
const actions = {
  async login({ commit }, { username, password }) {
    try {
      let result = await axios.get(
        `http://localhost:3000/users?username=${username}&password=${password}`
      );

      if (result.status === 200 && result.data.length > 0) {
        commit('SET_USER', result.data[0]);
        localStorage.setItem('user-info', JSON.stringify(result.data[0]));
        return true; // Indicate successful login
      } else {
        return false; // Indicate failed login
      }
    } catch (error) {
      console.error('Error during login:', error);
      return false; // Indicate failed login
    }
  },

  async signUp({ commit }, { username, password, conformPassword }) {
    try {
      let result = await axios.post('http://localhost:3000/users', {
        username,
        password,
        conformPassword,
      });

      if (result.status === 201) {
        commit('SET_USER', result.data);
        localStorage.setItem('user-info', JSON.stringify(result.data));
        return true; // Indicate successful signup
      } else {
        return false; // Indicate failed signup
      }
    } catch (error) {
      console.error('Error during signup:', error);
      return false; // Indicate failed signup
    }
  },

  logout({ commit }) {
    commit('SET_USER', null);
    localStorage.removeItem('user-info');
  },
};

// Getters
const getters = {
  isAuthenticated: (state) => state.user !== null,
  getUser: (state) => state.user,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
