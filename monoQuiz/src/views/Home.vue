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
  <div class="background" id="column-background">
    <Countdown />
  </div>
  <div class="background">
    <InformationPane />
  </div>
</div>
<div class="spinhover">
<hr />
</div>
<div class="wrapper">
    <div class="background">
  <SignUpGumball />

</div>
<div class="background">
  <Form />
</div>
</div>
<div class="spinhover">
<hr />
</div>

<div class="wrapper">
  <TeamListings />
</div>



</template>


<style scoped lang="scss">

  hr{
    width: 10%;
    color: rgba($third-color,0.4);
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 5px;
    transition: all 0.3s;
    box-sizing: border-box;
    max-width: 100%;

    &:hover{
      transform: scale(1.3) rotate(5deg);
    }
  }

  .spinhover {
    width: 100%;
    margin: 0;
    height: 50px;
    padding-top: 60px;
    margin-bottom: 5px;
    background-color: rgba($third-color, 0.05);
    transition: all 0.3s;
    box-sizing: border-box;
    max-width: 100%;

    &:hover{
      hr {
      transform: scale(1.3) rotate(5deg);
      }
      
    }
  }
.wrapper{
    display: flex;
    justify-content: center;
      
}

.wrapper:nth-child(1) {
  background-color:  rgba($third-color, 0.05);
}
.background{
  
    width: 50%;
    display: flex;
    justify-content: center;
     box-sizing: border-box;
    
}

#column-background {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.background-countdown{
  margin: 1rem;
  background-color: $primary-color;
  border-radius: 1rem;
  box-sizing: border-box;
   width: 50%;
  padding: 0px 50px 50px 50px;
  box-shadow: 0 8px 16px rgba($third-color, 0.2);
}

</style>