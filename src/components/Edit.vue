<template>
    <div id="page-wrap">
        <h1>User Info</h1>
        <div id="contact-area">
            <form>
                <!-- user name -->
                <md-input-container :class="{'md-input-invalid': !user.name && showError}">
                    <md-icon>account_box</md-icon>
                    <label>Name</label>
                    <md-input v-model.lazy="user.name" required></md-input>
                    <span class="md-error">Name required</span>
                </md-input-container>

                <!-- user email -->
                <md-input-container :class="{'md-input-invalid': !user.email && showError}">
                    <md-icon>mail_outline</md-icon>
                    <label>Email</label>
                    <md-input v-model="user.email" required></md-input>
                    <span class="md-error">Email required</span>
                </md-input-container>

                <!-- school -->
                <md-input-container :class="{'md-input-invalid': !user.school && showError}">
                    <md-icon>school</md-icon>
                    <label for="school">School</label>
                    <md-input name="school" id="school" v-model="user.school"></md-input>
                    <span class="md-error">School required</span>
                </md-input-container>

                <!-- sex/gender -->
                <md-input-container :class="{'md-input-invalid': !user.sex && showError}">
                    <md-icon>face</md-icon>
                    <label for="sex">Sex</label> &nbsp;&nbsp;&nbsp;&nbsp;
                    <md-select name="sex" id="sex" v-model="user.sex">
                        <md-option value="male">Male</md-option>
                        <md-option value="female">Female</md-option>
                    </md-select>
                    <span class="md-error">Sex required</span>
                </md-input-container>

                <!-- program time -->
                <md-input-container :class="{'md-input-invalid': !user.program_time && showError}">
                    <md-icon>linear_scale</md-icon>
                    <label for="sex">Program time</label> &nbsp;&nbsp;&nbsp;&nbsp;
                    <md-select name="program_time" id="program_time" v-model="user.program_time">
                        <md-option value="1">1</md-option>
                        <md-option value="2">2</md-option>
                        <md-option value="3">3</md-option>
                    </md-select>
                    <span class="md-error">Program time required</span>
                </md-input-container>

                <!-- birthday -->
                <md-layout md-gutter>
                    <!-- year -->
                    <md-layout>
                        <md-input-container>
                            <md-icon>cake</md-icon>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label for="birth_year">Year</label>
                            <md-select name="birth_year" id="birth_year" v-model="tmp_year">
                                <md-option value="1990">1990</md-option>
                                <md-option value="1991">1991</md-option>
                                <md-option value="1992">1992</md-option>
                                <md-option value="1993">1993</md-option>
                                <md-option value="1994">1994</md-option>
                                <md-option value="1995">1995</md-option>
                                <md-option value="1996">1996</md-option>
                                <md-option value="1997">1997</md-option>
                                <md-option value="1998">1998</md-option>
                                <md-option value="1999">1999</md-option>
                                <md-option value="2000">2000</md-option>
                            </md-select>
                        </md-input-container>
                    </md-layout>

                    <!-- month -->
                    <md-layout md-flex-offset="5">
                        <md-input-container>
                            <label for="birth_month">Month</label>
                            <md-select name="birth_month" id="birth_month" v-model="tmp_month">
                                <md-option value="1">1</md-option>
                                <md-option value="2">2</md-option>
                                <md-option value="3">3</md-option>
                                <md-option value="4">4</md-option>
                                <md-option value="5">5</md-option>
                                <md-option value="6">6</md-option>
                                <md-option value="7">7</md-option>
                                <md-option value="8">8</md-option>
                                <md-option value="9">9</md-option>
                                <md-option value="10">10</md-option>
                                <md-option value="11">11</md-option>
                                <md-option value="12">12</md-option>
                            </md-select>
                        </md-input-container>
                    </md-layout>

                    <!-- day -->
                    <md-layout md-flex-offset="5">
                        <md-input-container>
                            <label for="birth_day">Day</label>
                            <md-select name="birth_day" id="birth_day" v-model="tmp_day">
                                <md-option value="1">1</md-option>
                                <md-option value="2">2</md-option>
                                <md-option value="3">3</md-option>
                                <md-option value="4">4</md-option>
                                <md-option value="5">5</md-option>
                                <md-option value="6">6</md-option>
                                <md-option value="7">7</md-option>
                                <md-option value="8">8</md-option>
                                <md-option value="9">9</md-option>
                                <md-option value="10">10</md-option>
                                <md-option value="11">11</md-option>
                                <md-option value="12">12</md-option>
                                <md-option value="13">13</md-option>
                                <md-option value="14">14</md-option>
                                <md-option value="15">15</md-option>
                                <md-option value="16">16</md-option>
                                <md-option value="17">17</md-option>
                                <md-option value="18">18</md-option>
                                <md-option value="19">19</md-option>
                                <md-option value="20">20</md-option>
                                <md-option value="21">21</md-option>
                                <md-option value="22">22</md-option>
                                <md-option value="23">23</md-option>
                                <md-option value="24">24</md-option>
                                <md-option value="25">25</md-option>
                                <md-option value="26">26</md-option>
                                <md-option value="27">27</md-option>
                                <md-option value="28">28</md-option>
                                <md-option value="29">29</md-option>
                                <md-option v-show="tmp_month != 2" value="30">30</md-option>
                                <md-option v-show="tmp_month != 2" value="31">31</md-option>
                            </md-select>
                        </md-input-container>
                    </md-layout>
                </md-layout>

                <!-- phone number -->
                <md-input-container :class="{'md-input-invalid': !user.phone && showError}">
                    <md-icon>phone</md-icon>
                    <label>Phone</label>
                    <md-input type="tel" v-model="user.phone" required></md-input>
                    <span class="md-error">Phone required</span>
                </md-input-container>

                <!-- year -->
                <md-input-container :class="{'md-input-invalid': !user.year && showError}">
                    <md-icon>account_balance</md-icon>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label>School Year</label>
                    <md-select name="year" id="year" v-model="user.year" required>
                        <md-option value="year1">1</md-option>
                        <md-option value="year2">2</md-option>
                        <md-option value="year3">3</md-option>
                        <md-option value="year4">4</md-option>
                    </md-select>
                    <span class="md-error">Year required</span>
                </md-input-container>

                <!-- emergent contact -->
                <md-layout md-gutter>
                    <md-layout md-flex="20" md-flex-small="20">
                        <md-input-container :class="{'md-input-invalid': !user.emergent_contact.relationship && showError}">
                            <md-icon>add_alert</md-icon>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label for="emergent_contact">Contact</label>
                            <md-select name="emergent_contact" id="emergent_contact" v-model="user.emergent_contact.relationship">
                                <md-option value="father">Father</md-option>
                                <md-option value="mother">Mother</md-option>
                                <md-option value="grandmother">Grandmother</md-option>
                                <md-option value="grandfather">Grandfather</md-option>
                                <md-option value="other">Other</md-option>
                            </md-select>
                            <span class="md-error">Relationship required</span>
                        </md-input-container>
                    </md-layout>

                    <md-layout md-flex-offset="5" md-flex-small="35">
                        <md-input-container :class="{'md-input-invalid': !user.emergent_contact.name && showError}">
                            <label for="emergent_contact_name">Name</label>
                            <md-input name="emergent_contact_name" id="emergent_contact_name" v-model="user.emergent_contact.name"></md-input>
                            <span class="md-error">Name required</span>
                        </md-input-container>
                    </md-layout>

                    <md-layout md-flex-offset="5" md-flex-small="35">
                        <md-input-container :class="{'md-input-invalid': !user.emergent_contact.contact_way && showError}">
                            <label for="emergent_contact_contact_way">Contact Phone</label>
                            <md-input name="emergent_contact_contact_way" id="emergent_contact_contact_way" v-model="user.emergent_contact.contact_way"></md-input>
                            <span class="md-error">Phone required</span>
                        </md-input-container>
                    </md-layout>
                </md-layout>

                <!-- major -->
                <md-input-container :class="{'md-input-invalid': showError}">
                    <md-icon>whatshot</md-icon>
                    <label>Major</label>
                    <md-input name="major" id="major" v-model="user.major" required></md-input>
                    <span class="md-error">Major required</span>
                </md-input-container>

                <br>
                <br>
                <br>
                <br>
                <md-divider></md-divider>

                <md-table>
                    <md-table-header>
                        <md-table-row>
                            <md-table-head>款项</md-table-head>
                            <md-table-head md-numeric>数量</md-table-head>
                        </md-table-row>
                    </md-table-header>

                    <md-table-body>
                        <md-table-row v-for="(row, index) in user.transaction.trans_fees">
                            <md-table-cell>
                                <md-input-container md-inline>
                                    <label>Inline field</label>
                                    <md-input v-model="row.name"></md-input>
                                </md-input-container>
                            </md-table-cell>

                            <md-table-cell>
                                <md-input-container md-inline>
                                    <label>Inline field</label>
                                    <md-input v-model="row.amount"></md-input>
                                </md-input-container>
                            </md-table-cell>

                            <md-table-cell>
                                <a href="#" @click="removeRow(index)">
                                    <md-button class="md-accent">X</md-button>
                                </a>
                            </md-table-cell>
                        </md-table-row>
                    </md-table-body>
                </md-table>

                <a href="#" @click="addRow">
                    <md-button class="md-raised md-accent">
                        Add
                    </md-button>
                </a>

                <br>

                <a href="#" @click="preview()">
                    <md-button class="md-raised md-primary" >Submit</md-button>
                </a>
            </form>
            <div style="clear: both"></div>
        </div>
    </div>
</template>

<script>
import helper from '../helper';

export default {
    data() {
        return {
            trans_start_date_default: (new Date()).toLocaleDateString(),
            user: this.$store.getters.user,
            showError: false,
            tmp_year:'',
            tmp_month: '',
            tmp_day: '',
            // TODO: user transaction unique order id
        }
    },
    computed: {
        validation() {
            return this.user.name || this.user.email || this.user.sex || this.user.phone || this.user.program_time || this.user.major
        },
        user_birthday() {
            return `${this.tmp_year}/${this.tmp_month}/${this.tmp_day}`;
        }
    },
    methods: {
        addRow() {
            this.user.transaction.trans_fees.push({name:"",job:""});
        },
        removeRow(index) {
            this.user.transaction.trans_fees.splice(index, 1);
        },
        preview() {
            if (this.validation) {
                this.user.birthday = this.user_birthday;
                this.user.transaction.trans_id = this.generateTransID(this.user.program_time);
                this.$store.dispatch('updateUser', this.user);
                this.$router.push({path: 'transaction'});
            } else {
                this.showError = true;
            }
        }
    },
    mixins: [helper]
}
</script>

<style lang="css">
#page-wrap h1 {
    text-align: center;;
}

#page-wrap {
    width: 80%;
    background: white;
    margin: 20px auto;
    min-height: 500px;
    height: auto !important;
}

#contact-area {
    width: 80%;
    margin: 25px auto;
}

</style>
