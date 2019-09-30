import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function(){
            return{
                msg: "this store message!!"
            }
        }
    })
}
export default createStore