<template lang="html">
    <div id="user-info-container">
        <h1>User Info</h1>
        <!-- user name -->
        <md-input-container :class="{'md-input-invalid': !user.name}">
            <md-icon>account_box</md-icon>
            <label>姓名(Name)</label>
            <md-input v-model.lazy="user.name" required></md-input>
            <span class="md-error">Name required</span>
        </md-input-container>

        <!-- user email -->
        <md-input-container :class="{'md-input-invalid': !user.email}">
            <md-icon>mail_outline</md-icon>
            <label>邮件(Email)</label>
            <md-input v-model="user.email" required></md-input>
            <span class="md-error">Email required</span>
        </md-input-container>

        <!-- school -->
        <md-input-container :class="{'md-input-invalid': !user.school}">
            <md-icon>school</md-icon>
            <label for="school">学校(School)</label>
            <md-input name="school" id="school" v-model="user.school"></md-input>
            <span class="md-error">School required</span>
        </md-input-container>

        <!-- year -->
        <md-input-container :class="{'md-input-invalid': !user.year}">
            <md-icon>account_balance</md-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label>年级(School Year)</label>
            <md-select name="year" id="year" v-model="user.year" required>
                <md-option value="year1">1</md-option>
                <md-option value="year2">2</md-option>
                <md-option value="year3">3</md-option>
                <md-option value="year4">4</md-option>
            </md-select>
            <span class="md-error">Year required</span>
        </md-input-container>

        <!-- sex/gender -->
        <md-input-container :class="{'md-input-invalid': !user.sex}">
            <md-icon>face</md-icon>
            <label for="sex">性别(Sex)</label> &nbsp;&nbsp;&nbsp;&nbsp;
            <md-select name="sex" id="sex" v-model="user.sex">
                <md-option value="male">Male</md-option>
                <md-option value="female">Female</md-option>
            </md-select>
            <span class="md-error">Sex required</span>
        </md-input-container>


        <!-- birthday -->
        <md-layout md-gutter>
          <!-- year -->
          <md-layout>
            <md-input-container :class="{'md-input-invalid': !tmp_year}">
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
            <md-input-container :class="{'md-input-invalid': !tmp_month}">
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
            <md-input-container :class="{'md-input-invalid': !tmp_day}">
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
        <md-input-container :class="{'md-input-invalid': !user.phone}">
          <md-icon>phone</md-icon>
          <label>电话(Phone)</label>
          <md-input type="tel" v-model="user.phone" required></md-input>
          <span class="md-error">Phone required</span>
        </md-input-container>

        <!-- emergent contact -->
        <md-layout md-gutter>
          <md-layout md-flex="20" md-flex-small="20">
            <md-input-container :class="{'md-input-invalid': !user.emergent_contact.relationship}">
              <md-icon>add_alert</md-icon>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <label for="emergent_contact">联系人</label>
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
            <md-input-container :class="{'md-input-invalid': !user.emergent_contact.name}">
              <label for="emergent_contact_name">联系人姓名</label>
              <md-input name="emergent_contact_name" id="emergent_contact_name" v-model="user.emergent_contact.name"></md-input>
              <span class="md-error">Name required</span>
            </md-input-container>
          </md-layout>

          <md-layout md-flex-offset="5" md-flex-small="35">
            <md-input-container :class="{'md-input-invalid': !user.emergent_contact.contact_way}">
              <label for="emergent_contact_contact_way">联系人电话</label>
              <md-input name="emergent_contact_contact_way" id="emergent_contact_contact_way" v-model="user.emergent_contact.contact_way"></md-input>
              <span class="md-error">Phone required</span>
            </md-input-container>
          </md-layout>
        </md-layout>

        <!-- program time -->
        <md-input-container class="narrow" :class="{'md-input-invalid': !user.program_time}">
          <md-icon>linear_scale</md-icon>
          <label for="sex">Program time</label> &nbsp;&nbsp;&nbsp;&nbsp;
          <md-select name="program_time" id="program_time" v-model="user.program_time">
            <md-option value="1">1</md-option>
            <md-option value="2">2</md-option>
            <md-option value="3">3</md-option>
          </md-select>
          <span class="md-error">Program time required</span>
        </md-input-container>

        <!-- faculty -->
        <md-input-container :class="{'md-input-invalid': !user.faculty}">
          <md-icon>bookmark</md-icon>
          <label>院系(Faculty)</label>
          <md-input name="faculty" id="faculty" v-model="user.faculty" required></md-input>
          <span class="md-error">Major required</span>
        </md-input-container>

        <!-- major -->
        <md-input-container :class="{'md-input-invalid': !user.major}">
          <md-icon>whatshot</md-icon>
          <label>专业(Major)</label>
          <md-input name="major" id="major" v-model="user.major" required></md-input>
          <span class="md-error">Major required</span>
        </md-input-container>

        <!-- self description -->
        <md-input-container :class="{'md-input-invalid': !user.self_description}">
          <label>自我描述</label>
          <md-textarea
                name="self_description"
                id="self_description"
                v-model="user.self_description"
                placeholder="简述个人经历，如社团、获奖情况、特长等，100字以内"
                maxlength="100"
                required
                ></md-textarea>
            <span class="md-error">Self description required</span>
        </md-input-container>

        <!-- self evaluation -->
        <md-input-container :class="{'md-input-invalid': !user.self_evaluation}">
          <label>自我评价</label>
          <md-textarea
                  name="self_evaluation"
                  id="self_evaluation"
                  v-model="user.self_evaluation"
                  placeholder="个人鉴定，用三个关键词描述自己"
                  required></md-textarea>
                <span class="md-error">Self evaluation required</span>
        </md-input-container>

        <!-- question -->
        <md-input-container :class="{'md-input-invalid': !user.question_answer}">
          <label>附加问题</label>
          <md-textarea
                      name="question_answer"
                      id="question_answer"
                      v-model="user.question_answer"
                      placeholder="你认为特朗普当选美国总统对于全球化有什么影响？简述你的观点。字数不限"
                      required></md-textarea>
                    <span class="md-error">Answer required</span>
        </md-input-container>

        <!-- 日期: <date-picker :date="date_picker.startTime" :option="date_picker.timeoption" :limit="date_picker.limit"></date-picker> -->
        <br>
        <md-button class="md-raised md-primary" v-on:click.native="submit()">
          Save
        </md-button>
    </div>
</template>

<script>
import { user } from "../data/user_data_fixture.js";
import { db } from "../data/firebase_test_database.js";
let transRef = db.ref('transactions');

//date picker
import datePicker from 'vue-datepicker'
// date picker data
import date_picker_config from '../data/vue_date_picker_config.js';

export default {
  data() {
    return {
      user,
      date_picker: date_picker_config,
      tmp_year: '',
      tmp_month: '',
      tmp_day: ''
    }
  },
  computed: {
    regular_match() {
      let name_match = /^[-'a-z\u4e00-\u9eff]{1,20}$/i.test(this.user.name);
      let email_match = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.user.email);
      let phone_match = /^1[34578]\d{9}$/.test(this.user.phone) || /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.user.phone)
      let emergent_contact_match = /^1[34578]\d{9}$/.test(this.user.emergent_contact.contact_way) || /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.user.emergent_contact.contact_way)
      return name_match && email_match && phone_match && emergent_contact_match
    },
    validation() {
      return this.user.name && this.user.email && this.user.sex && this.user.phone && this.user.major && this.user.emergent_contact.contact_way && this.user.year && this.user.self_description && this.user.self_evaluation && this.user.program_time && this.user.faculty
    },
    user_birthday() {
      return `${this.tmp_year}/${this.tmp_month}/${this.tmp_day}`
    }
  },
  methods: {
    submit() {
      if (confirm("Save your Data?")) {
        if (!this.validation) {
          alert("数据不完整");
          return;
        } else {
          // if success
          if (!this.regular_match) {
            alert("数据格式错误");
            return;
          }
          // this.user.interview_time = this.date_picker.startTime.time

          // compute birthday and add to the fields of user
          this.user.birthday = this.user_birthday;
          transRef.push(this.user);
          alert("Your data is successfully saved!");
          this.$router.push({path: '/', force: true});
        }
      }
    }
  },
  components: {
    datePicker
  }
}
</script>

<style lang="css">
#user-info-container {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

</style>
