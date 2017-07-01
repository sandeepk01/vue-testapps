import _ from 'underscore'
import * as types from '../mutationcodes'
export default {
    state: {
        list: []
    },
    mutations: {
        [types.DEL_CUSTOMER] (state, id) {
            state.list = _.filter(state.list, (v, k) => { return v.customerId != id })
        },
        [types.ADD_CUSTOMER] (state, o) {
            if (_.isArray(o)) {
                state.list = _.sortBy(o, 'customerName')
            } else {
                state.list.push(o)
                state.list = _.sortBy(state.list, 'customerName')
            }
        }
    },
    getters: {
        allCustomers: (state, getters) => {
            return state.list
        },
        getCustomer: (state, getters) => (id) => {
            return _.findWhere(state.list, {customerId: Number(id)})
        },
        alphaKeys: (state, getters) => {
            return _.uniq(_.map(_.pluck(state.list, 'customerName'), (n) => { return n.charAt(0) })).toString().toUpperCase()
        },
        hasDuplicateCustomer: (state, getters) => (name) => {
            return state.list.some((c) => { return c.customerName == name.toUpperCase() })
        }
    },
    actions: {
        addCustomer ({commit}, l) {
            commit(types.ADD_CUSTOMER, l)
        },
        deleteCustomer ({commit}, o) {
            commit(types.DEL_CUSTOMER, o)
        }
    }
}
