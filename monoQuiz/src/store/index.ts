import {createStore} from 'vuex'
import axios from 'axios'


interface State {
    user: string
}

export default createStore<State>({
    state: () => {
        user: ''
    }
})