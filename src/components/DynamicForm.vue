<template>
  <div>
    <q-card>
      <button type="submit" class="btn btn-primary mb-3" @click="handleSubmit()"></button>
    </q-card>
    <q-card>
      <label for="email-check" class="col-sm-4 form-label">Email: </label>
      <input
        type="checkbox"
        v-model="emailCheck"
        name="RoundTrip"
        class="form-check-label"
        id="email-check"
      />
      <label for="password-check" class="col-sm-4 form-label">Password: </label>
      <input
        type="checkbox"
        v-model="passwordCheck"
        name="RoundTrip"
        class="form-check-label"
        id="password-check"
      />
      <label for="phone-check" class="col-sm-4 form-label">Phone No.: </label>
      <input
        type="checkbox"
        v-model="phoneCheck"
        name="RoundTrip"
        class="form-check-label"
        id="phone-check"
      />
      <label for="csulbid-check" class="col-sm-4 form-label">CsulbId: </label>
      <input
        type="checkbox"
        v-model="CsulbIdCheck"
        name="RoundTrip"
        class="form-check-label"
        id="csulbid-check"
      />
    </q-card>
    <form class="container border mt-5" @submit.prevent="handleSubmit()">
      <div class="mb-3 mt-3" v-if="emailCheck">
        <label for="Email" class="form-label">Email</label>
        <input
          type="email"
          v-model="emailValue"
          id="Email"
          class="form-control"
          @change="validateEmail()"
        />
        <p class="msgErr">{{ setEmailError }}</p>
      </div>
      <div class="mb-3 mt-3" v-if="passwordCheck">
        <label for="Password" class="form-label">Password</label>
        <input
          type="password"
          v-model="passwordValue"
          id="Password"
          class="form-control"
          @change="validatePassword()"
        />
        <p class="msgErr">{{ setPasswordError }}</p>
      </div>
      <div class="mb-3 mt-3" v-if="phoneCheck">
        <label for="Phone" class="form-label">Phone</label>
        <input
          type="text"
          v-model="phoneValue"
          id="Phone"
          class="form-control"
          @change="validatePhone()"
        />
        <p class="msgErr">{{ setPhoneError }}</p>
      </div>
      <div class="mb-3" v-if="CsulbIdCheck">
        <label for="CSULBId" class="form-label">CSULB ID</label>
        <input
          type="email"
          v-model="CsulbIdValue"
          id="CSULBId"
          class="form-control"
          @change="validateCSULDId()"
        />
        <p class="msgErr">{{ setCsuidError }}</p>
      </div>
    </form>
    <button type="submit" class="btn btn-primary mb-3" @click="handleSubmit()">Submit</button>
  </div>
</template>

<script>
// import draggable from 'vuedraggable';

export default {
  // components: {draggable},
  data() {
    return {
      emailCheck: false,
      passwordCheck: false,
      phoneCheck: false,
      CsulbIdCheck: false,

      emailValue: '',
      passwordValue: '',
      phoneValue: '',
      CsulbIdValue: '',

      setEmailError: '',
      setPasswordError: '',
      setPhoneError: '',
      setCsuidError: '',

      sourceFields: [
        {
          type: 'text',
          icon: 'text_format',
          label: 'Text',
          defaultLabel: 'Text'
        },
        {
          type: 'textarea',
          icon: 'text_format',
          label: 'Text Area',
          defaultLabel: 'Text'
        },

        { type: 'radio', icon: 'check_box', label: 'Radio' },
        {
          type: 'checkbox',
          icon: 'radio_button_checked',
          label: 'Multi Choice'
        },
        { type: 'date', icon: 'event', label: 'Date' },
        { type: 'single_select', icon: 'arrow_drop_down', label: 'Dropdown' },
        {
          type: 'multiple_select',
          icon: 'arrow_drop_down',
          label: 'Multiple Select'
        },
        { type: 'email', icon: 'email', label: 'Email' },
        { type: 'phone', icon: 'phone', label: 'Phone' },
        { type: 'file', icon: 'cloud_upload', label: 'File Upload' },
        { type: 'csulb', icon: 'cloud_upload', label: 'Csulb Id' }
      ]
    }
  },
  methods: {
    validateEmail() {
      if (this.emailValue) {
        let emailRegex = /^\S+@\S+$/
        if (emailRegex.test(this.emailValue)) {
          this.setEmailError = ''
          return true
        } else {
          this.setEmailError = '* enter valid email'
        }
      } else {
        this.setEmailError = '*email is required'
      }
    },
    validatePassword() {
      if (this.passwordValue) {
        let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if (passRegex.test(this.passwordValue)) {
          this.setPasswordError = ''
          return true
        } else {
          this.setPasswordError = '*enter valid password,minimum 8 characters'
        }
      } else {
        this.setPasswordError = '*password is required'
      }
    },
    validatePhone() {
      if (this.phoneValue) {
        let phoneRegex =
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
        if (phoneRegex.test(this.phoneValue)) {
          this.setPhoneError = ''
          return true
        } else {
          this.setPhoneError = '*enter valid phone number,minimum 10 numbers'
        }
      } else {
        this.setPhoneError = '*phone number required'
      }
    },
    validateCSULDId() {
      if (this.CsulbIdValue) {
        let csuidRegex = /^[0-9]{8}$/
        if (csuidRegex.test(this.CsulbIdValue)) {
          this.setCsuidError = ''
          return true
        } else {
          this.setCsuidError = '* enter valid csulbid, it should be 8 characters'
        }
      } else {
        this.setCsuidError = '*csulb id required'
      }
    },
    handleSubmit() {
      //   this.validateEmail();
      // this.validatePassword();
      // this.validatePhone()
      // this.validateCSULDId();
      // if (this.validateEmail() && this.validatePassword() && this.validatePhone() && this.validateCSULDId()) {
      //     alert("Form submitted successfully");
      //   // console.log("formData",this.formData);
      // }
    }
  }
}
</script>
