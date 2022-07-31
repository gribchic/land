<template>
    <div id="app">
        <main-header class="main-header"/>
        <main class="content">
            <transition
                name="fade"
                mode="out-in"
                @beforeLeave="beforeLeave"
                @enter="enter"
                @afterEnter="afterEnter">
                <router-view/>
            </transition>
        </main>
        <main-footer class="main-footer"/>
    </div>
</template>

<script>
    import MainHeader from "@/components/layout/MainHeader";
    import MainFooter from "@/components/layout/MainFooter";

    export default {
        components: {
            MainFooter,
            MainHeader
        },
        data() {
            return {
                prevHeight: 0,
            };
        },
        methods: {
            beforeLeave(element) {
                this.prevHeight = getComputedStyle(element).height;
            },
            enter(element) {
                const {height} = getComputedStyle(element);

                element.style.height = this.prevHeight;

                setTimeout(() => {
                    element.style.height = height;
                });
            },
            afterEnter(element) {
                element.style.height = 'auto';
            },
        }
    }
</script>


<style lang="scss">

    .fade-enter-active,
    .fade-leave-active {
        transition: {
            duration: 0.3s;
            property: height, opacity;
            timing-function: ease;
        }

        overflow: hidden;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }


    html, body {
        height: 100%;
    }

    #app {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    .content {
        flex: 1 0 auto;
    }

    .main-header, .main-footer {
        flex: 0 0 auto;
    }

    /*#app {*/
    /*    font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*    -webkit-font-smoothing: antialiased;*/
    /*    -moz-osx-font-smoothing: grayscale;*/
    /*    text-align: center;*/
    /*    color: #2c3e50;*/
    /*}*/

    /*#nav {*/
    /*    padding: 30px;*/

    /*    a {*/
    /*        font-weight: bold;*/
    /*        color: #2c3e50;*/

    /*        &.router-link-exact-active {*/
    /*            color: #42b983;*/
    /*        }*/
    /*    }*/
    /*}*/
</style>
