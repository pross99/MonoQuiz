<script lang="ts">
import Countdown from '@/components/CountdownClock.vue';
import InformationPane from '@/components/InformationPane.vue';
import SignUpGumball from '@/components/SignUpGumball.vue';


export default {
    components: {
        Countdown,
        InformationPane,
        SignUpGumball
    }
}

</script>



<template>
    <div class="wrapper">
<div class="background">
    <Countdown />
</div>
<div class="background">
    <InformationPane />
</div>


</div>
<SignUpGumball />
</template>


<style scoped>
.wrapper{
    display: flex;
    justify-content: center;
    background: linear-gradient(-67deg, rgba(255, 255, 255, 0.4), rgba(246, 247, 249, 0.9));
}
.background{
    border: 1px solid red;
    width: 50%;
    
}
</style>