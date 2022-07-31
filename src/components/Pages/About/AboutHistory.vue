<template>
    <section class="page-section container">
        <div class="row">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <h2>Our History</h2>
                <p class="text-intro text-dark">Our Way of Success</p>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
                    iste necessitatibus velit eum quis, dignissimos modi atque libero magni, explicabo nihil illo soluta
                    accusantium suscipit, nobis maiores deleniti mollitia, quod id nam assumenda ducimus.</p>
                <div class="custom-timeline">
                    <about-history-block
                        v-for="(model, index) in timeLine"
                        :key="index"
                        :model="model"/>
                </div>
            </div>
            <div class="col-lg-6 text-center">
                <img src="@/assets/about-our-history-1.jpg" alt="" class="img-fluid">
            </div>
        </div>
    </section>
</template>

<script>
    import AboutHistoryBlock from "@/components/Pages/About/elements/AboutHistoryBlock";
    import AboutHistoryBlockModel from "@/components/Pages/About/models/about-history-block.model";

    export default {
        name: "AboutHistory",
        components: {AboutHistoryBlock},
        created() {
            this.timeLine = [
                new AboutHistoryBlockModel({
                    year: '2001',
                    title: 'Company formed',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, rem labore facere. Veritatis enim laborum facilis minima, illo ratione?'
                }),
                new AboutHistoryBlockModel({
                    year: '2005',
                    title: 'Suspendisse tincidunt nibh',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumeos quas, explicabo, possimus harum optio consequuntur quod veniam.'
                }),
                new AboutHistoryBlockModel({
                    year: '2020',
                    title: 'Awards and 300 empolyees',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, molestias numquam culpa, eligendi debitis dicta, hic delectus obcaecati accusantium quaerat magni explicabo et dolorem mollitia cumque sint deserunt. Labore vel magnam quasi.'
                })
            ];
        }
    }
</script>

<style lang="scss" scoped>
    .custom-timeline {
        margin-top: 50px;
    }
</style>
