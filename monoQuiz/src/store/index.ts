import {createStore} from 'vuex'
import axios from 'axios'

export interface User {
    _id: number
    userName: string
}

export interface State {
    users: User[]
    isLoading: boolean
}

export default createStore<State> ({
    state: (): State => ({ 
        users: [],
        isLoading: true
     }),
     mutations: {
        SET_USERS(state, users){
            state.users = users
        },

        ADD_USER(state,user){
            state.users.push(user)
        },

        SET_LOADING(state, loading) {
            state.isLoading = loading
        },
     },

     actions: {
        async getUsers({commit, dispatch, state}) {
            if(state.users.length > 0) {
                commit('SET_LOADING', false);
                return;
            }

            commit('SET_LOADING', true);
            try {
                const userResponse = await axios.get('https://monoquiz.onrender.com/api/user')
                console.log("users", userResponse)
                commit('SET_USERS', userResponse.data)
            } catch(error) {
                console.error('err', error)
            } finally {
                commit('SET_LOADING', false)
            }
        },

        async addUser({commit}, formData) {
            const newUser = {
                userName: formData.userName
            };
                 console.log(newUser)
            const response = await axios.post('https://monoquiz.onrender.com/api/user', newUser)
            commit('ADD_USER', response.data)
            return response.data;
        }
     },
     getters: {
        users(state) {
            return state.users.map(usr => usr)
        },

        isLoading(state) {
            return state.isLoading
        }
     }
})


