<template>
    <div
        class="block-video"
        @click="openVideoPopup">
        <img
            class="img-fluid"
            alt="video"
            :src="model.imageURL"/>
        <button class="y-button" aria-label="Play">
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                <path class="y-button-bg"
                      d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                      fill="#f00"></path>
                <path d="M 45,24 27,14 27,34" fill="#fff"></path>
            </svg>
        </button>
        <modal-video :id="`video-${_uid}`" :video-url="model.videoURL"/>
    </div>
</template>

<script>
    import BlockVideoModel from "@/components/Pages/Services/elements/models/block-video.model";
    import ModalVideo from "@/components/Pages/Services/elements/ModalVideo";

    export default {
        name: "BlockVideo",
        components: {ModalVideo},
        props: {
            model: {
                type: BlockVideoModel
            }
        },
        methods: {
            openVideoPopup() {
                console.log('video');
                this.$bvModal.show(`video-${this._uid}`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/scss/tools/index";

    .block-video {
        position: relative;
        cursor: pointer;
        text-align: center;
        width: 100%;
        >img {
            width: 100%;
        }
        @include media-breakpoint-up(lg){
            width: auto;
            >img {
                width: auto;
            }
        }


        .y-button {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 68px;
            height: 48px;
            transform: translate(-50%, -50%);
            transition: opacity .25s cubic-bezier(0.0, 0.0, 0.2, 1);
            z-index: 63;
            outline: 0;
            border: none;
            background-color: transparent;
            padding: 0;
            color: inherit;
            text-align: inherit;
            line-height: inherit;

            &-bg {
                fill: #212121;
                fill-opacity: .8;
                transition: fill .1s cubic-bezier(0.4, 0.0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0.0, 1, 1);
            }
        }

        &:hover {
            .y-button {
                &-bg {
                    fill: #f00;
                    fill-opacity: 1;
                }
            }

        }
    }
</style>
