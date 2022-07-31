<template>
    <div class="custom-timeline-box" ref="container">
        <span class="before"></span>
        <span class="date font-weight-bold text-color-primary line-height-6">{{model.year}}</span>
        <h4 class="text-color-dark font-weight-semibold">{{model.title}}</h4>
        <p class="custom-text-color-1">{{model.content}}</p>
        <span class="after"></span>
    </div>
</template>

<script>
    import AboutHistoryBlockModel from "@/components/Pages/About/models/about-history-block.model";
    import {TimelineLite, Back} from "gsap";

    export default {
        name: "AboutHistoryBlock",
        props: {
            model: {
                type: AboutHistoryBlockModel
            }
        },
        mounted() {
            this.setAnimation();
        },
        methods:{
            setAnimation(){
                const container = this.$refs.container;
                const year = container.querySelector('.date');
                const title = container.querySelector('h4');
                const content = container.querySelector('p');
                const before = container.querySelector('.before');
                const after = container.querySelector('.after');
                const tl1 = new TimelineLite({
                    scrollTrigger: {
                        trigger: container,
                        start: "top 90%"
                    }
                });
                const tl2 = new TimelineLite({
                    scrollTrigger: {
                        trigger: container,
                        start: "top 90%",
                        end: () => '+=' + container.offsetHeight,
                        scrub: true
                    }
                });


                tl1
                    .from(before, 0.5, {
                        scale: 0,
                        ease: Back.easeOut
                    }, )
                    .from(year, 0.5, {
                        x: '50px',
                        opacity: 0,
                        ease: Back.easeOut
                    }, '<')
                    .from(title, 0.5, {
                        x: '-5px',
                        opacity: 0,
                    }, '<')
                    .from(content, 0.5, {
                        x: '-5px',
                        opacity: 0
                    }, '<');

                tl2.from(after, {
                    height: 0
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .custom-timeline-box {
        position: relative;
        padding-left: 105px;

        .date {
            position: absolute;
            top: 0;
            left: 0;
        }

        .before {
            border-radius: 50%;
            content: "";
            display: block;
            height: 6px;
            margin-left: -5px;
            position: absolute;
            left: 68px;
            top: 6px;
            width: 6px;
            z-index: 2;
            background-color: #6a80a9;
            box-shadow: 0 0 0 3px #FFF, 0 0 0 6px #6a80a9;
        }

        .after {
            content: '';
            display: block;
            position: absolute;
            left: 65px;
            top: 3px;
            height: 100%;
            border-left: 1px solid #d5dee1;
            z-index: 1;
        }
    }
</style>
