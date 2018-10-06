<template>
    <div>
        <div class="dashboard-container">
            <md-toolbar class="md-transparent">
                <md-button class="md-icon-button">
                    <md-icon>menu</md-icon>
                </md-button>

                <h2 class="md-title" style="flex: 1">DashBoard</h2>

                <md-button class="md-primary" v-on:click.native="signout()">
                    SignOut
                </md-button>
            </md-toolbar>
        </div>

        <md-tabs class="md-transparent" md-fixed>
            <md-tab id="trans_opr" md-label="Trans Operations">
                <app-show></app-show>
            </md-tab>
        </md-tabs>
    </div>
</template>

<script>
// component showing transactions in database
import Show from './Show.vue';
import { auth } from '../data/firebase_test_database';

export default {
    components: {
        appShow: Show
    },
    methods: {
        signout() {
            auth.signOut().then((val) => {
                alert("sign out successfully!")
                this.$router.push({path: "admin"});
            });
        }
    },
    created() {
        if (!auth.currentUser) {
            alert(" You do not have the access to admin panel!")
            this.$router.push({path: "admin"})
        }
    }
}
</script>

<style lang="css">
.dashboard-container {
    width: 60%;
    margin-left: 20%;
}

.dashboard-operations {
    width: 70%;
    margin-left: 15%;
    text-align: center;
    margin-top: 60px;
}
</style>
