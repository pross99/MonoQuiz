<script lang="ts">
import Countdown from '@/components/CountdownClock.vue';
import InformationPane from '@/components/InformationPane.vue';
import SignUpGumball from '@/components/SignUpGumball.vue';
import Form  from '@/components/Form.vue'
import TeamListings from '@/components/TeamListings.vue';


export default {
    components: {
        Countdown,
        InformationPane,
        SignUpGumball,
        Form,
        TeamListings
    }
}

</script>



<template>
<div class="wrapper">
  <div class="background-countdown">
    <Countdown />
  </div>
  <div class="background">
    <InformationPane />
  </div>
</div>

<div class="wrapper">
    <div class="background">
  <SignUpGumball />
</div>

<div class="background">
  <Form />
</div>
</div>

<div class="wrapper">
  <TeamListings />
</div>

</template>


<style scoped lang="scss">
.wrapper{
    display: flex;
    justify-content: center;
}
.background{
  
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.background-countdown{
    width: 50%;
    justify-content: center;
}
</style>