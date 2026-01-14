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
<hr />
<div class="wrapper">
    <div class="background">
  <SignUpGumball />
</div>

<div class="background">
  <Form />
</div>
</div>
<hr />
<div class="wrapper">
  <TeamListings />
</div>

</template>


<style scoped lang="scss">

  hr{
    width: 10%;
    color: rgba($third-color,0.4);
  }
.wrapper{
    display: flex;
    justify-content: center;
}
.background{
  
    width: 50%;
    display: flex;
    justify-content: center;
    
}
.background-countdown{
    width: 50%;
    justify-content: center;
}
</style>