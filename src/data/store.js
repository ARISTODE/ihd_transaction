import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    user: {
        name:'',
        sex:'',
        phone:'',
        email:'',
        birthday:'',
        year:'',
        major:'',
        program_time: '1',
        emergent_contact: {
            contact_way: '',
            name: '',
            relationship: ''
        },
        transaction: {
            trans_id: '',
            start_date: '',
            trans_fees: [
                {name: "Entry Fee",amount: 500},
                {name: "Program Fee", amount: 3980},
                {name: "Hotel Expense", amount: 2300}
            ]
        }
    }

}

const getters = {
    user: state => {
        return state.user
    },
    trans_fee_total: state => {
        return state.user.transaction.trans_fees.reduce((sum, val) => {
            return val.amount + sum;
        }, 0);
    }
}

const mutations = {
    mutateUser: (state, payload) => {
        state.user = payload
    }
}

const actions = {
    updateUser: ({ commit }, payload) => {
        commit('mutateUser', payload);
    },
    resetUserInfo: ({ commit }) => {
        let newUser = {
            name:'',
            sex:'',
            phone:'',
            email:'',
            birthday:'',
            year:'',
            major:'',
            program_time: '1',
            emergent_contact: {
                contact_way: '',
                name: '',
                relationship: ''
            },
            transaction: {
                trans_id: '',
                start_date: '',
                trans_fees: [
                    {name: "Registration Fee",amount: 3980}
                ]
            }
        };

        commit('mutateUser', newUser);
    }
}

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
