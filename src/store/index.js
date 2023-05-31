import { createStore } from "vuex";
import getRandom from '../helper/randomNumber.js';
export default createStore({

    state:{
        count: 1,
        incrementedBy: 0
    },

    mutations:{
        incrementar(state, value){
            state.count += value 
            state.incrementedBy = value
        }

    },

    actions:{
        async incrementarRandom(context){
            const numberRandom = await getRandom();
            context.commit('incrementar', numberRandom )
        }
    }

})