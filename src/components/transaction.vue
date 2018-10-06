<template>
    <div>
        <div class="transaction-container">
            <div class="block-start"></div>
            <div class="row transaction-header">
                <div class="col span-1-of-2">
                    <img src="../assets/resources/img/ihd-logo.png" alt="ihd_logo" class="ihd_logo">
                </div>
                <div class="col span-1-of-2 transaction-date"> <p>Date: {{ date | moment("MMMM Do YYYY") }}</p> </div>
            </div>

            <hr>

            <div class="row transaction-body">
                <h3>订单号 Transaction ID:</h3>
                <p>{{ user.transaction.trans_id }}</p>
                <h4>姓名 Name:</h4>
                <p>{{ user.name }}</p>
                <h3>项目开始日期 Project Start Date:</h3>
                <p>{{ date | moment("MMMM Do YYYY") }}</p>
                <h3>收款明细 Your Receipt:</h3>
                <table class="transaction-infos">
                    <thead>
                        <tr>
                            <td><strong>款项</strong></td>
                            <td><strong>名称</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(fee, index) in user.transaction.trans_fees">
                            <td> {{ fee.name }} </td>
                            <td> {{ fee.amount }} </td>
                        </tr>
                        <tr>
                            <td>Total: </td>
                            <td>{{ $store.getters.trans_fee_total }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <br>
            <hr>

            <div class="row transaction-footer">
                <h3>联系我们 Contact Us:</h3>
                <p>客服微信 WeChat： tucsizyinfo</p>
                <p>Official Website: www.myihd.hk</p>
                <p>官方邮箱 E-mail: info@tucsizy.com</p>
                <p>我们将在一个工作日内联系 <u>We will inform you in 24 hours.</u> </p>
            </div>
        </div>

        <div class="btn-group">
            <router-link
                tag="a"
                to="/" >
                <md-button class="md-raised md-primary">
                    Edit
                </md-button>
            </router-link>

            <a href="" @click="saveData()">
                <md-button class="md-raised md-primary">
                    Save
                </md-button>
            </a>
        </div>
</div>
</template>

<script>
import Firebase from 'firebase';
import { config } from '../data/config.js';

// Initialize Firebase
let app = Firebase.initializeApp(config);
let db = app.database();

let transRef = db.ref('transactions');

export default {
    data() {
        return {
            user: this.$store.getters.user,
            date: (new Date()).toLocaleDateString()
        }
    },
    methods: {
        saveData() {
            if(confirm("Save User Data?")) {
                transRef.push(this.user);
                this.$store.dispatch('resetUserInfo');
                this.$router.push({path: '/'});
            }
        }
    },
    firebase: {
        transactions: transRef
    }
}
</script>

<style>
html {
    color: rgb(42,114,175);
    padding: 30px;
}

p {
    font-weight: 300;
}

.transaction-container {
    width: 50%;
    margin: auto;
    padding: 0 80px;
    border: 1px solid #c7c7c7;
    border-radius: 8px;
    box-shadow: 0 4px 4px #efefef;
}

.block-start {
    height: 25px;
    background-color: rgb(42,114,175);
}

.ihd_logo {
    height: 250px;
    width: auto;
    float: left;
}

.transaction-header {
    margin-top: 60px;
}

.transaction-infos {
    width: 80%;
}

.transaction-infos td {
    padding: 8px;
}

.transaction-date {
    vertical-align: center;
    margin-top: 12%;
    text-align: center;
}

.transaction-date p {
    font-size: 110%;
}

.transaction-footer {
    margin-top: 80px;
    margin-bottom: 30px;
}

.btn-group {
    width: 10%;
    margin: 20px auto;
}

</style>
