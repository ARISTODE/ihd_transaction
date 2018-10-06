<template lang="html">
    <div class="transaction-show">
        <h1>Transaction List</h1>
        <md-list class="transaction-list">
            <md-list-item v-for="trans in current_trans_list">
                <md-icon>monetization_on</md-icon>
                <span>{{ trans.transaction.trans_id ? trans.transaction.trans_id : trans.name }}</span>
                <md-list-expand>
                    <md-whiteframe md-elevation="5" class="trans-info">
                        <app-show-detail :trans="trans"></app-show-detail>
                    </md-whiteframe>
                </md-list-expand>

                <md-button class="md-warn" v-on:click.native="openDialog('deletetrans', trans)">X</md-button>
                <md-divider class="md-inset"></md-divider>
            </md-list-item>
        </md-list>

        <div class="trans-operations">
            <md-button class="md-raised md-accent" v-on:click.native="loadUncompeleteTrans()">New Clients</md-button>
            <md-button class="md-raised md-primary" v-on:click.native="loadCompeleteTrans()">Transactions</md-button>
            <md-button class="md-primary" v-on:click.native="exportData()">Export Data</md-button>
        </div>

        <!-- delete transaction dialog     -->
        <md-dialog-prompt
        :md-title="prompt.title"
        :md-ok-text="prompt.ok"
        :md-cancel-text="prompt.cancel"
        v-model="prompt.value"
        @open="onOpen"
        @close="onClose"
        ref="deletetrans">
    </md-dialog-prompt>

</div>
</template>

<script>
import { db } from '../data/firebase_test_database.js'
let transRef = db.ref('transactions')
import ShowDetail from './ShowDetail.vue';

let initialPromptState = {
    title: 'Please Confirm delete Trans Id:',
    ok: 'Delete',
    cancel: 'Cancel',
    id: 'trans_delete',
    name: 'trans_delete',
    placeholder: 'Type transaction id',
    maxlength: 30,
    value: '',
    trans_ref: null
}

function flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object') {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}

export default {
    data() {
        return {
            current_trans_list: [],
            prompt: {
                title: 'Please Confirm delete Trans Id:',
                ok: 'Delete',
                cancel: 'Cancel',
                id: 'trans_delete',
                name: 'trans_delete',
                placeholder: 'Type transaction id',
                maxlength: 30,
                value: '',
                trans_ref: null
            }
        }
    },
    components: {
        appShowDetail: ShowDetail
    },
    firebase: {
        transactions: transRef
    },
    methods: {
        openDialog(ref, trans_ref) {
            console.log('openDiaglog');
            // assign the current item ref the the trans_ref
            this.prompt.trans_ref = trans_ref;
            this.$refs[ref].open();
        },
        closeDialog(ref) {
            console.log("closeDialog");
            //reset trans_ref
            this.prompt.trans_ref = null;
            this.$refs[ref].close();
        },
        onOpen() {
            console.log('Opened');
        },
        onClose(type) {
            console.log("onClose");
            if (type === "ok") {
                if (this.prompt.value === this.prompt.trans_ref.transaction.trans_id) {
                    this.deleteTrans(this.prompt.trans_ref);
                    this.$nextTick();
                } else {
                    alert("Wrong id");
                }
            }
            //reset all data
            this.prompt = initialPromptState;
            console.log('Closed', type);
        },
        deleteTrans(trans) {
            transRef.child(trans['.key']).remove()
            this.$router.go({name: 'dashboard', force: true})
        },
        loadCompeleteTrans() {
            let arr = this.transactions.filter((val) => {
                return val.status == true;
            });

            this.current_trans_list = arr;
        },
        loadUncompeleteTrans() {
            let arr = this.transactions.filter((val) => {
                return val.status == false;
            });
            this.current_trans_list = arr;
        },
        exportData() {
            let res = []
            for(var i in this.transactions) {
                let trans = this.transactions[i]
                // flatten array of trans fee
                let trans_fee = trans.transaction.trans_fees

                let str_trans_fee = ''
                for(var fee in trans_fee) {
                    str_trans_fee += `Name: ${fee.name}, Amount: ${fee.amount},`
                }

                trans.transaction.trans_fees = str_trans_fee.slice(0,-1)
                // flatten the whole object
                trans = flattenObject(trans)
                res.push(trans)
            }
            let res_str = JSON.stringify(res)
            window.open("data:text/json;charset=utf-8,"+res_str, "", "_blank")
        }
    }
}
</script>

<style lang="css">
.transaction-show {
    width: 70%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.transaction-list {
    width: 80%;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
}

.trans-info p{
    width: 80%;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
}

</style>
