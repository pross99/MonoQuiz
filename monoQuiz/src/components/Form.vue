<template>
<div class="form-wrapper" id="form-narrow">

    <div class="header">
<h3> Sign up now!</h3>
</div>
 <form @submit="checkForm" method="post" novalidate="true" ref="form">
      <p v-if="errors.length">
        <b> Please correct the following error(s): </b>
        <ul>
        <li v-for="error in errors"> {{ error }}</li>
        </ul>
      </p>

    <div class="input-group">
        <label>First name</label>
        <input type="text" id="nameInput" placeholder="Peter" :required="true"
        ref="name"
        v-model="formData.userName">
    </div>

    <div class="input-group">
        <label>Mono Email</label>
        <input type="email"
         id="emailInput"
         placeholder="pero@monosolutions.com"
         :required="true"
         ref="email"
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
                monoEmails: ["pero@monosolutions.com","ddl@monosolutions.com","hero@monosolutions.com","anz@monosolutions.com","bv@monosolutions.com","bm@monosolutions.com","cvl@monosolutions.com","ef@monosolutions.com","ft@monosolutions.com","gw@monosolutions.com","ha@monosolutions.com","jg@monosolutions.com","jk@monosolutions.com","js@monosolutions.com","mgm@monosolutions.com","jn@monosolutions.com","laja@monosolutions.com","mp@monosolutions.com","meb@monosolutions.com","mip@monosolutions.com","rs@monosolutions.com","sk@monosolutions.com","suar@monosolutions.com","tar@monosolutions.com","ter@monosolutions.com"]
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

                if(this.formData.userName.length > 20) {
                    this.errors.push("Please use a shorter name")
                    return
                }
                
                this.monoEmails.forEach(email => {
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
                    } 

                     else {
                        this.errors.push(`${this.formData.email} is invalid. Contact Peter or check typo`)
                    }
                   
                }
               

              
                error.preventDefault();
            },
             async handleFormSubmit(formData: {}) {
                
        try {
            const newUser = await this.$store.dispatch('addUser', formData);
            
            this.$emit('add', newUser)
            this.toast.success("Signup confirmed!");
            (this.$refs.form as HTMLFormElement).reset();
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