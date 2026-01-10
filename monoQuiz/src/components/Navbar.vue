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
        }
    },

    methods: {
        isActive(routePath: string) {
            return this.route.path = routePath
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
        <div class="main right">
            <div class="right-container">
                <p>Mono Quiz</p>
            </div>
            
        </div>
    </nav>
</template>

<style lang="scss" src="../assets/navbar.scss"></style>