<template>
    <b-container class="page-404">
        <!-- TODO: create template -->
        <section class="page-content text-center">
            <h1>404
                <font-awesome-icon icon="file"></font-awesome-icon>
            </h1>
            <p>We're sorry, but the page you were looking for doesn't exist.</p>
        </section>
    </b-container>
</template>
<script>
    import ROUTER_CONSTANTS from "../constants/RouterConstants";

    export default {
        name: "NotFound",
        RouterConstants: ROUTER_CONSTANTS

    };
</script>

<style lang="scss" scoped>
    @import "src/scss/tools/index";
    .page {
        &-404 {
            display: table;
            @include media-breakpoint-up(sm) {
                //height: 100vh !important;
                top: 50%;
                transform: translate(-50%, -70%);
                left: 50%;
                position: absolute;
            }
        }

        &-content {
            display: table-cell;
            vertical-align: middle;

            @include media-breakpoint-up(sm) {
                h1 {
                    font: {
                        size: 10rem;
                    }
                }
            }
        }
    }
</style>
