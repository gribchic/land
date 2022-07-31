<template>
    <b-modal
        :id="id"
        :hide-footer="true"
        :hide-header="true"
        size="xl"
        centered>
        <slot>
            <b-button @click="close">
                <!--                <font-awesome-icon size="2x" :icon="['far','times-circle']"/>-->
                ×
            </b-button>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe
                    :src="`${videoUrl}?autoplay=1`"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </slot>
    </b-modal>
</template>

<script>
    export default {
        name: "ModalVideo",
        props: {
            id: {
                type: String
            },
            videoUrl: {
                type: String
            }
        },
        methods: {
            close() {
                this.$bvModal.hide(this.id);
            }
        }
    }
</script>

<style lang="scss" scoped>
    iframe {
        width: 100%;
    }

    .btn {
        position: absolute;
        bottom: 100%;
        right: 0;
        padding: 0;
        width: 28px;
        height: 28px;
        background-color: #fff;
        border-width: 0;
        line-height: 1;
        font: {
            size: 2em;
            weight: normal;
        }

        &, &:focus {
            box-shadow: none;
            background-color: transparent !important;
        }
    }

    ::v-deep {
        .modal-content {
            background-color: #000;
        }

        .modal-body {
            padding: 0;
            background-color: transparent;
        }
    }
</style>
