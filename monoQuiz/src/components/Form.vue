<template>
<div class="form-wrapper">

    <div class="header">
<h3> Sign up now!</h3>
<p> Join the first mono quiz</p>
</div>
 <form @submit="checkForm" method="post" novalidate="true">
      <p v-if="errors.length">
        <b> Please correct the following error(s): </b>
        <ul>
        <li v-for="error in errors"> {{ error }}</li>
        </ul>
      </p>

    <div class="input-group">
        <label>First name</label>
        <input type="text" id="nameInput" placeholder="Peter" :required="true"
        v-model="formData.userName">
    </div>

    <div class="input-group">
        <label>Mono Email</label>
        <input type="email"
         id="emailInput"
         placeholder="pero@monosolutions.com"
         :required="true"
         v-model="formData.email">
    </div>

    <button type="button" class="btn-submit" v-on:click="checkForm">Submit</button>

 </form>
</div>
</template>

<script lang="ts">
    import { useToast } from 'vue-toastification';
    export default{
        emits: ["submit", "add"],
        data() {
            return {
                formData: {
                    userName: "",
                    email: ""
                },
                errors: [] as string[],
                toast : useToast(),
                monoEmails: ["pero@monosolutions.com","ddl@monosolutions.com","hero@monosolutions.com"]
            }
        },

        methods: {
            checkForm(error: Event) {
                 this.errors = [];
                 let validEmail = false
                if(!this.formData.userName) {
                    this.errors.push('Please enter your first name')
                }
                if(!this.formData.email) {
                    this.errors.push('Please enter your mono email')
                }
                
                this.monoEmails.forEach(email => {
                    console.log(email)
                    if(email === this.formData.email ) {
                        validEmail = true
                    } 
                })



                if(
                (this.formData.email) &&
                (this.formData.userName)
                ) {
                    if(validEmail) {
                         this.handleFormSubmit(this.formData)
                    } else {
                        this.errors.push(`${this.formData.email} is invalid. Contact Peter or check typo`)
                    }
                   
                }
               

              

                error.preventDefault();
            },
             async handleFormSubmit(formData: {}) {
        try {
            const newUser = await this.$store.dispatch('addUser', formData)
            this.$emit('add', newUser)

            this.toast.success("Signup confirmed!")
        } catch( error) {
            this.toast.error("Error updating listing")
            console.error(error)
        }
    }
        }
    }
</script>

<style lang="scss" src="../assets/form.scss">

</style>