<template lang="html">
    <div id="show-detail-container">
        <!-- trans name -->
        <md-input-container >
            <md-icon>account_box</md-icon>
            <label>Name</label>
            <md-input v-model.lazy="trans.name" required></md-input>
            <span class="md-error">Name required</span>
        </md-input-container>

        <!-- trans email -->
        <md-input-container >
            <md-icon>mail_outline</md-icon>
            <label>Email</label>
            <md-input v-model="trans.email" required></md-input>
            <span class="md-error">Email required</span>
        </md-input-container>

        <!-- school -->
        <md-input-container>
            <md-icon>school</md-icon>
            <label for="school">School</label>
            <md-input name="school" id="school" v-model="trans.school"></md-input>
            <span class="md-error">School required</span>
        </md-input-container>

        <!-- sex/gender -->
        <md-input-container class="narrow">
            <md-icon>face</md-icon>
            <label for="sex">Sex</label> &nbsp;&nbsp;&nbsp;&nbsp;
            <md-select name="sex" id="sex" v-model="trans.sex">
                <md-option value="male">Male</md-option>
                <md-option value="female">Female</md-option>
            </md-select>
            <span class="md-error">Sex required</span>
        </md-input-container>

        <!-- phone number -->
        <md-input-container>
            <md-icon>phone</md-icon>
            <label>Phone</label>
            <md-input type="tel" v-model="trans.phone" required></md-input>
            <span class="md-error">Phone required</span>
        </md-input-container>

        <!-- emergent contact -->
        <md-layout md-gutter>
            <md-layout md-flex="20" md-flex-small="20">
                <md-input-container >
                    <md-icon>add_alert</md-icon>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label for="emergent_contact">Contact</label>
                    <md-select name="emergent_contact" id="emergent_contact" v-model="trans.emergent_contact.relationship">
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
                <md-input-container >
                    <label for="emergent_contact_name">Name</label>
                    <md-input name="emergent_contact_name" id="emergent_contact_name" v-model="trans.emergent_contact.name"></md-input>
                    <span class="md-error">Name required</span>
                </md-input-container>
            </md-layout>

            <md-layout md-flex-offset="5" md-flex-small="35">
                <md-input-container >
                    <label for="emergent_contact_contact_way">Contact Phone</label>
                    <md-input name="emergent_contact_contact_way" id="emergent_contact_contact_way" v-model="trans.emergent_contact.contact_way"></md-input>
                    <span class="md-error">Phone required</span>
                </md-input-container>
            </md-layout>
        </md-layout>

       <!-- birthday -->
        <md-layout md-gutter>
            <!-- year -->
            <md-layout>
                <md-input-container>
                    <md-icon>cake</md-icon>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label for="birth_year">Year</label>
                    <md-select name="birth_year" id="birth_year" v-model="user_birthday.year">
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
                    <md-select name="birth_month" id="birth_month" v-model="user_birthday.month">
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
                    <md-select name="birth_day" id="birth_day" v-model="user_birthday.day">
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
                        <md-option v-show="user_birthday.month != 2" value="30">30</md-option>
                        <md-option v-show="user_birthday.month != 2" value="31">31</md-option>
                    </md-select>
                </md-input-container>
            </md-layout>
        </md-layout>

        <!-- major -->
        <md-input-container >
            <md-icon>whatshot</md-icon>
            <label>Major</label>
            <md-input name="major" id="major" v-model="trans.major" required></md-input>
            <span class="md-error">Major required</span>
        </md-input-container>

        <!-- year -->
        <md-input-container class="narrow">
            <md-icon>account_balance</md-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label>School Year</label>
            <md-select name="year" id="year" v-model="trans.year" required>
                <md-option value="year1">1</md-option>
                <md-option value="year2">2</md-option>
                <md-option value="year3">3</md-option>
                <md-option value="year4">4</md-option>
            </md-select>
            <span class="md-error">Year required</span>
        </md-input-container>

        <!-- program time -->
        <md-input-container class="narrow">
            <md-icon>linear_scale</md-icon>
            <label for="sex">Program time</label> &nbsp;&nbsp;&nbsp;&nbsp;
            <md-select name="program_time" id="program_time" v-model="trans.program_time">
                <md-option value="1">1</md-option>
                <md-option value="2">2</md-option>
                <md-option value="3">3</md-option>
            </md-select>
            <span class="md-error">Program time required</span>
        </md-input-container>

        <!-- self description -->
        <md-input-container>
            <label>自我描述</label>
            <md-textarea
                name="self_description"
                id="self_description"
                v-model="trans.self_description"
                maxlength="100"
                required
                ></md-textarea>
            <span class="md-error">Self description required</span>
        </md-input-container>

        <!-- self evaluation -->
        <md-input-container>
            <label>自我评价</label>
            <md-textarea
            name="self_evaluation"
            id="self_evaluation"
            v-model="trans.self_evaluation"
            required></md-textarea>
            <span class="md-error">Self evaluation required</span>
        </md-input-container>

        <!-- question answer -->
        <md-input-container>
            <label>附加问题</label>
            <md-textarea
            name="question_answer"
            id="question_answer"
            v-model="trans.question_answer"
            required></md-textarea>
            <span class="md-error">Answer required</span>
        </md-input-container>

        <!-- program start time -->
        <md-layout md-gutter>
            <md-layout md-flex="20" md-flex-small="20">
                <md-input-container>
                    <md-icon>add_alert</md-icon>
                    &nbsp;&nbsp;
                    <label for="program_year">Program Year</label>
                    <md-input name="program_year" id="program_year" v-model="program_time.start_year"></md-input>
                    <span class="md-error">Program year required</span>
                </md-input-container>
            </md-layout>

            <md-layout md-flex-offset="5" md-flex-small="35">
                <md-input-container>
                    <label for="program_month">Program Month</label>
                    <md-input name="program_month" id="program_month" v-model="program_time.start_month"></md-input>
                    <span class="md-error">Program Month required</span>
                </md-input-container>
            </md-layout>

            <md-layout md-flex-offset="5" md-flex-small="35">
                <md-input-container>
                    <label for="program_day">Program Day</label>
                    <md-input name="program_day" id="program_day" v-model="program_time.start_day"></md-input>
                    <span class="md-error">Program Day required</span>
                </md-input-container>
            </md-layout>
        </md-layout>


        <md-table>
            <md-table-header>
                <md-table-row>
                    <md-table-head>款项</md-table-head>
                    <md-table-head md-numeric>数量</md-table-head>
                </md-table-row>
            </md-table-header>

            <md-table-body>
                <md-table-row v-for="(row, index) in trans.transaction.trans_fees">
                    <md-table-cell>
                        <md-input-container md-inline>
                            <label>Fee name</label>
                            <md-input v-model="row.name"></md-input>
                        </md-input-container>
                    </md-table-cell>

                    <md-table-cell>
                        <md-input-container md-inline>
                            <label>Fee amount</label>
                            <md-input type="number" v-model.number="row.amount"></md-input>
                        </md-input-container>
                    </md-table-cell>

                    <md-table-cell>
                        <a href="#" @click.prevent="removeRow(index)">
                            <md-button class="md-accent">X</md-button>
                        </a>
                    </md-table-cell>
                </md-table-row>
            </md-table-body>
        </md-table>

        <md-layout md-gutter>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <md-layout md-flex="20">
                <md-input-container md-inline>
                    <md-icon>attach_money</md-icon>
                    <label>Discount</label>
                    <md-input name="discount" id="discount" v-model.number="trans.transaction.discount" type="number"></md-input>
                </md-input-container>
            </md-layout>
        </md-layout>

        <md-layout md-gutter>
            <md-layout md-flex="10">
                <a href="#" @click.prevent="addRow">
                    <md-button class="md-raised md-accent">
                        Add expense
                    </md-button>
                </a>
            </md-layout>
        </md-layout>
        <!-- interview time -->
        <!-- <md-input-container>
            <label>面试时间</label>
            <md-input v-model="trans.interview_time" required></md-input>
        </md-input-container> -->

        <md-button class="md-primary" v-on:click.native="submit()">
            {{ trans.status == true ? 'Update' : 'Save' }}
        </md-button>

        <md-button v-if="trans.status" class="md-primary" v-on:click.native="print(trans)">
            Print
        </md-button>
    </div>
</template>

<script>
// utilis for generate ID etc...
import helper from '../helper';
// firebase database import
import { db } from '../data/firebase_test_database.js';
let transRef = db.ref('transactions');

export default {
    props: ['trans'],
    data() {
        return {
            program_time: {
                start_year: '',
                start_month: '',
                start_day: ''
            },
            user_birthday: {
                year: '',
                month: '',
                day: ''
            }
        }
    },
    computed: {
        programStartTime() {
            return `${this.program_time.start_year}/${this.program_time.start_month}/${this.program_time.start_day}`;
        },
        userBirthday() {
            return `${this.user_birthday.year}/${this.user_birthday.month}/${this.user_birthday.day}`
        }
    },
    methods: {
        submit() {
            // generate the trans id
            this.trans.transaction.trans_id = this.generateTransID(this.trans.program_time);
            // save the program time string
            this.trans.transaction.start_date = this.programStartTime;
            // save the birthday string
            this.trans.birthday = this.userBirthday;
            // set transaction status to true
            this.trans.status = true;
            // store old key value
            let key_ref = this.trans['.key'];
            // delete the key for updates
            delete this.trans['.key'];
            transRef.child(key_ref).update(this.trans).then((val) => {
                alert('update successfully!');
            });
        },
        print(user) {
            this.$store.dispatch('updateUser', user)
            this.$router.push({path:'/transaction'})
        },
        addRow() {
            this.trans.transaction.trans_fees.push({name:"",amount:0});
        },
        removeRow(index) {
            this.trans.transaction.trans_fees.splice(index, 1);
        }
    },
    created() {
        // program time string -> year, month, day
        if(this.trans.transaction.start_date !== '') {
            this.program_time.start_year = this.trans.transaction.start_date.split("/")[0];
            this.program_time.start_month = this.trans.transaction.start_date.split("/")[1];
            this.program_time.start_day = this.trans.transaction.start_date.split("/")[2];
        }

        // retrive user birthday
        if(this.trans.birthday !== '') {
            this.user_birthday.year = this.trans.birthday.split("/")[0];
            this.user_birthday.month = this.trans.birthday.split("/")[1];
            this.user_birthday.day = this.trans.birthday.split("/")[2];
        }
    },
    mixins: [helper]
}
</script>

<style lang="css">
#show-detail-container {
    background-color: #eee;
}

.narrow {
    width: 25%;
}
</style>
