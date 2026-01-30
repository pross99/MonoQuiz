<script lang="ts">
import { gsap, Linear} from "gsap"
    export default {
        name: "GlitterAnimation",
        mounted() {
            const timeline = gsap.timeline();

            const glitters = this.$el.querySelectorAll(".glitter");

            glitters.forEach((glitterEl: Element, i: number) => {
      const glitter = gsap.fromTo(
        glitterEl,
        {
          top: 0,
          opacity: 1
        },
        {
          opacity: 0,
          duration: this.randomBetween(22, 58),
          top: "110%",
          repeat: -1,
          repeatDelay: this.randomBetween(1, 3),
          rotate: "random([0, -10, 0, -15, 0, 75, 0, 0, -60])",
          yoyo: false,
          repeatRefresh: true,
          ease: Linear.easeNone
        }
      );

     timeline.add(glitter, (i + 1) / 0.5);
    });

    timeline.seek(100);
    timeline.timeScale(15);
        },
        methods: {
            randomBetween(min: number,max: number) {
                return Math.floor(Math.random()*(max-min+1)+min);
            }
        },
        created: function() {
            
        }
    }
</script>

<template>
    <div class="team-container">

   
    <div class="team-header">
         <h3> TEAMS</h3>
    </div>
   

    <div class="team-wrapper">
        <div class="team">
            <h4>Team Otter</h4>
            <fa class="icon" icon="fa-otter" />
            <div class="team-listing">
                <div class="team-listing-name">
                    Marian
                </div>
                <div class="team-listing-name">
                    Bence
                </div>
                <div class="team-listing-name">
                    Henrik
                </div>
            </div>
        </div>

        <div class="team">
            <h4>Team Dragon</h4>
            <fa class="icon" icon="fa-dragon" />
            <div class="team-listing">
                <div class="team-listing-name">
                    Joakim
                </div>
                <div class="team-listing-name">
                    Tuncay
                </div>
                <div class="team-listing-name">
                    Michal
                </div>  
            </div>
        </div>

        <div class="team">
            <h4>Team Hippo</h4>
            <fa class="icon" icon="fa-hippo" />
            <div class="team-listing"> 
            </div>
        </div>
       
        <div class="team">
             <div class="glitter">
            </div>
             <div class="glitter">
            </div>
             <div class="glitter">
            </div>
             <div class="glitter">
            </div>
             <div class="glitter">
            </div>
             <div class="glitter">
            </div>
             <div class="glitter">
            </div>
             <div class="glitter">
            </div>
             <div class="glitter">
            </div>
             <div class="glitter">
            </div>
             <div class="glitter">
            </div>
            <h4>Team Shrimp</h4>
            <fa class="icon" icon="fa-shrimp" />
            <div class="team-listing">
                <div class="team-listing-name">
                    Anna
                </div>
                <div class="team-listing-name">
                    Surbhi
                </div>
                <div class="team-listing-name">
                    Davide
                </div>
                <div class="team-listing-name">
                    Chris
                </div>  
            </div>
        
        </div>
    </div>
     </div>
</template>

<style lang="scss" src="../assets/teamlisting.scss" scoped>
    
</style>