/* Import all the stores in this store manager, those that needs to be made global */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import customer from 'state/modules/customerList'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        customer
    },
    strict: debug,
    plugins: debug ? [createLogger({
        collapsed: true,
        transformer (state) {
            return state.subTree;
        },
        mutationTransformer (mutation) {
            return mutation.type;
        }
    })] : []
})
