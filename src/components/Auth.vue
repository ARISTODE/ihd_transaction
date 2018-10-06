<template>
    <div>
        <md-whiteframe v-if="!currentUser" md-elevation="3" class="form-container">
            <h1>Admin</h1>
            <div class="auth-form">
                <md-input-container>
                    <label>Username</label>
                    <md-input placeholder="Username" v-model="username"></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Password</label>
                    <md-input placeholder="Password" type="password" v-model="password"></md-input>
                </md-input-container>
            </div>

            <md-button class="md-raised md-primary" v-on:click.native="login()">Login</md-button>
        </md-whiteframe>

        <vue-loading v-else spinner="circles"></vue-loading>
        <md-whiteframe v-show="showErrorMsg" md-tag="section" class="alert-form form-container">No such user!</md-whiteframe>
    </div>
</template>

<script>
// import { auth } from '../data/firebase'
// import admin from '../data/tmpId';

// get the auth module from firebase
import { auth } from '../data/firebase_test_database';
import VueLoading from 'vue-simple-loading';

export default {
    data() {
        return {
            username:'',
            password:'',
            showErrorMsg: false
        }
    },
    computed: {
        currentUser() {
            return auth.currentUser
        }
    },
    methods: {
        login() {
            auth.signInWithEmailAndPassword(this.username, this.password).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode + errorMessage);
            });
        }
    },
    components: {
        VueLoading
    },
    created() {
        auth.onAuthStateChanged((user) => {
            if(user) {
                this.$router.push({path: "dashboard"})
            } else {
                this.showErrorMsg = true;
            }
        });
    }
}
</script>

<style lang="css">

.form-container {
    text-align: center;
    padding: 15px 10px;
    width: 60%;
    margin-left: 20%;
    margin-top: 10%;
}

.auth-form {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
}
.error-info {
    color: red
}

.alert-form {
    border: 1px solid red;
    color: red;
}

</style>
