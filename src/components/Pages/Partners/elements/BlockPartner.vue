<template>
    <b-card no-body class="h-100">
        <b-card-body @click="open">
            <header>
                <img :src="model.imageURL" class="mb-3 d-inline-block" alt="logo"/>
                <h3 class="text-left mb-3">
                    {{model.title}}
                </h3>
            </header>
            <div>
                {{model.content}}
            </div>
        </b-card-body>
    </b-card>
</template>

<script>
    import BlockPartnersModel from "@/components/Pages/Partners/elements/block-partners.model";

    export default {
        name: "BlockPartner",
        props: {
            model: {
                type: BlockPartnersModel
            }
        },
        methods: {
            open(e) {
                if(e.target.href){
                    return;
                }
                window.open(this.model.link, '_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/scss/theme/animations/index";

    img {
        height: 70px;
        max-width: 100%;
    }

    article {
        //margin-bottom: 60px;
    }

    .card {
        cursor: pointer;
        transition: box-shadow $t-animation-input-settings;

        &:hover {
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }
    }
</style>
