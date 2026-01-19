<script lang="ts">
import {RouterLink} from 'vue-router'

export default {
    components: {
        RouterLink
    },

    data() {
        return {
            isMenuOpen: false
        }
    },

    computed: {
        route() {
            return this.$route
        },
        isActive() {
            return (routePath: string) => {
                return this.$route.path == routePath
            }
        }
    },

    methods: {
        toggleMenu() {
           this.isMenuOpen = !this.isMenuOpen
        },

        closeMenu() {
            this.isMenuOpen = false
        }
    }
}

</script>


<template>
    <nav class="nav">
       
        <div class="main left">
              
            <a class="nav-img" href="/home"></a>
            <img id="henrik" src="../assets/img/Henrik.png"/>
        </div>
          <div class="navbarMenu">
                        
                            <RouterLink to="/">
                                <button @click="closeMenu" :class="[isActive('/') ? 'active' : 'notActive']">
                                Home
                                 </button>
                            </RouterLink>
                       

                 
                            <RouterLink to="/leaderboard">
                                <button @click="closeMenu" :class="[isActive('/leaderboard') ? 'active' : 'notActive']" >
                               Leaderboard   
                                </button>
                            </RouterLink>
                       
                        
                            <RouterLink to="/images" >
                                <button @click="closeMenu" :class="[isActive('/images') ? 'active' : 'notActive']">
                                 
                               Images
                               </button>
                            </RouterLink>
                              
                       
                    </div>
                   
    </nav>
</template>

<style lang="scss" src="../assets/navbar.scss"></style>