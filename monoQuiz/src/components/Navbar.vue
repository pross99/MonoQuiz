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
        </div>
          <div class="navbarMenu">
                        <button @click="closeMenu">
                            <RouterLink to="/" :class="[isActive('/') ? 'active' : 'notActive']">
                                Home
                            </RouterLink>
                        </button>

                        <button @click="closeMenu" >
                            <RouterLink to="/leaderboard" :class="[isActive('/leaderboard') ? 'active' : 'notActive']">
                               Leaderboard
                            </RouterLink>
                        </button>
                        <button @click="closeMenu">
                            <RouterLink to="/images" :class="[isActive('/images') ? 'active' : 'notActive']">
                               Images
                            </RouterLink>
                        </button>
                    </div>
    </nav>
</template>

<style lang="scss" src="../assets/navbar.scss"></style>