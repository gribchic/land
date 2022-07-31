<template>
    <section>
        <agile
            :autoplay-speed="5000"
            :speed="2500"
            :dots="false"
            fade pause-on-hover pause-on-dots-hover autoplay>
            <div class="slide">
                <div class="content-wrapper slide1">
                    <div class="container-xl">
                        <h1>Investment Strategies</h1>
                        <div class="caption">We can help you</div>
                        <b-button
                            variant="primary"
                            class="w-auto d-inline-block"
                        >Learn more
                        </b-button>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="content-wrapper slide2">
                    <div class="container-xl">
                        <h1>Personal Finance</h1>
                        <div class="caption">Talk to us now</div>
                        <b-button
                            variant="primary"
                            class="w-auto d-inline-block">Learn more
                        </b-button>
                    </div>
                </div>
            </div>
            <template #prevButton>
                <font-awesome-icon icon="chevron-left"/>
            </template>
            <template #nextButton>
                <font-awesome-icon icon="chevron-right"/>
            </template>
        </agile>
        <div class="home-intro bg-color-secondary">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 mb-3 mb-lg-0">
                        <p class="my-1">
                            <span class="text-white d-inline-block intro">The fastest way to grow your business with the leader in investments.</span>
                            <span class="text-color-primary d-inline-block pt-0 more-link text-primary">Learn more about our strategy</span>
                        </p>
                    </div>
                    <div class="col-lg-4 text-left text-lg-right">
                        <b-button
                            variant="primary"
                            class="w-auto d-inline-block"
                        >Read More
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {VueAgile} from 'vue-agile';

    export default {
        name: "HomeSlider",
        components: {
            agile: VueAgile
        },
    }
</script>

<style lang="scss" scoped>
    @import "src/scss/tools/index";

    $header-height: 100px;
    $home-intro-height: 245px;

    @mixin screenHeight($home-intro-height, $break-point) {

        @include media-breakpoint-up($break-point) {
            .agile__slide {
                height: calc(100vh - #{$header-height + $home-intro-height});
            }
            .home-intro {
                height: $home-intro-height;
            }
        }
    }

    .agile__slide {
        height: calc(100vh - #{$header-height + $home-intro-height});
    }

    .home-intro {
        height: $home-intro-height;
    }

    $home-intro-height: 185px;
    @include screenHeight($home-intro-height, sm);

    $home-intro-height: 150px;
    @include screenHeight($home-intro-height, lg);

    $home-intro-height: 115px;
    @include screenHeight($home-intro-height, xl);

    ::v-deep {
        .agile {
            &__nav-button {
                @include media-breakpoint-down(md) {
                    display: none;
                }
                background: transparent;
                border: none;
                color: #fff;
                cursor: pointer;
                font-size: 24px;
                height: 100%;
                position: absolute;
                top: 0;
                transition-duration: .3s;
                width: 80px;
                opacity: 0;

                &:hover {
                    opacity: 1
                }

                &--prev {
                    left: 0;
                }

                &--next {
                    right: 0;
                }
            }
        }
    }

    .agile {
        &__slide {
            object-fit: cover;
            width: 100%;
            display: flex;

            h1, .caption, .btn {
                opacity: 0;
                transform-origin: 50% 50% 0;
            }

            h1 {
                transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -138, 0, 1);
            }

            .caption {
                transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -78, 0, 1);
                text-transform: uppercase;
            }

            .btn {
                transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -144, 0, 1);
            }

            &--active {
                h1, .caption, .btn {
                    transition: {
                        property: opacity, transform;
                        duration: 500ms;
                    }
                    opacity: 1;
                    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                h1 {
                    transition: {
                        delay: 800ms;
                    }
                }

                .caption {
                    transition: {
                        delay: 1200ms;
                    }
                }

                .btn {
                    transition: {
                        delay: 1500ms;
                    }
                }
            }

        }
    }


    @mixin sliderSettings(
        $padding-x,
        $h1-font-size,
        $h1-mt,
        $caption-font-size,
        $btn-font-size,
        $caption-mb:0,
        $h1-letter-spacing:-1px) {

        .content-wrapper {
            &.slide1 {
                padding: {
                    left: $padding-x;
                }
            }

            &.slide2 {
                padding: {
                    right: $padding-x;
                }
            }

            h1 {
                font-size: $h1-font-size;
                letter-spacing: $h1-letter-spacing;
                margin: {
                    bottom: 0;
                    top: $h1-mt;
                }
            }

            .caption {
                font-size: $caption-font-size;
                margin-bottom: $caption-mb;
            }

            .btn {
                font-size: $btn-font-size;
            }
        }
    }

    .content-wrapper {
        background: {
            repeat: no-repeat;
            size: cover;
            position: center center;
        }

        display: flex;
        width: 100%;
        align-items: center;
        opacity: 1;
        visibility: inherit;

    }

    .slide1 {
        background: {
            image: url('~@/assets/slide-finance-1.jpg');
        };
    }

    .slide2 {
        background: {
            image: url('~@/assets/slide-finance-2.jpg');
        };
        text-align: right;
        justify-content: flex-end;
    }

    $padding-x: 68px;
    $h1-font-size: 16px;
    $h1-mt: 25px;
    $caption-font-size: 9px;

    @include sliderSettings($padding-x, $h1-font-size, $h1-mt, $caption-font-size, $caption-font-size);
    @media (min-width: 375px) {
        $padding-x: 24px;
        $h1-font-size: 28px;
        $h1-mt: 25px;
        $caption-font-size: 15px;
        $caption-mb: 20px;
        $h1-letter-spacing: -2px;

        @include sliderSettings($padding-x, $h1-font-size, $h1-mt, $caption-font-size, $caption-font-size, $caption-mb, $h1-letter-spacing);
    }

    @include media-breakpoint-up(md) {
        $padding-x: 59px;
        $h1-font-size: 40px;
        $h1-mt: 25px;
        $caption-font-size: 22px;
        $btn-font-size: 12px;
        $caption-mb: 20px;
        $h1-letter-spacing: -2px;

        @include sliderSettings($padding-x, $h1-font-size, $h1-mt, $caption-font-size, $btn-font-size, $caption-mb, $h1-letter-spacing);
    }

    @include media-breakpoint-up(lg) {
        $padding-x: 157px;
        $h1-font-size: 40px;
        $h1-mt: 25px;
        $caption-font-size: 22px;
        $btn-font-size: 12px;
        $caption-mb: 20px;
        $h1-letter-spacing: -2px;

        @include sliderSettings($padding-x, $h1-font-size, $h1-mt, $caption-font-size, $btn-font-size, $caption-mb, $h1-letter-spacing);
    }

    @include media-breakpoint-up(xl) {
        $padding-x: 0;
        $h1-font-size: 40px;
        $h1-mt: 25px;
        $caption-font-size: 22px;
        $btn-font-size: 12px;
        $caption-mb: 20px;
        $h1-letter-spacing: -2px;

        @include sliderSettings($padding-x, $h1-font-size, $h1-mt, $caption-font-size, $btn-font-size, $caption-mb, $h1-letter-spacing);
    }

    .home-intro {
        $py: 20px;

        font-size: 1.4em;
        padding: {
            top: $py;
            bottom: $py;
        }

        .intro {
            font-weight: 600;
        }

        .more-link {
            font-size: 0.8em;
            font-weight: 300;
            opacity: 0.9;
        }
    }

</style>
