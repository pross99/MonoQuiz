<script lang="ts">
import Countdown from '@/components/CountdownClock.vue';
import InformationPane from '@/components/InformationPane.vue';
import SignUpGumball from '@/components/SignUpGumball.vue';
import Form  from '@/components/Form.vue'


export default {
    components: {
        Countdown,
        InformationPane,
        SignUpGumball,
        Form
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

</template>


<style scoped lang="scss">
.wrapper{
    display: flex;
    justify-content: center;
    background: linear-gradient(-67deg, rgba(255, 255, 255, 0.4), rgba(246, 247, 249, 0.9));
    background: linear-gradient(-67deg, rgba($third-color, .7), $secondary-color);
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