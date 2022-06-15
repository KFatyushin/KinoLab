<template>
    <div class="movie-about">
        <div class="movie-about__item" v-for="(aboutItem, title, i) in movieAbout">
            <div class="movie-about__title" v-if="!(title === 'Рейтинг') || Number(aboutItem)">
                {{ title }}
            </div>

            <!--  Print if object  -->
            <div class="movie-about__desc" v-if="typeof(aboutItem) == 'object'" v-for="item in aboutItem">
                {{ item }}
            </div>

            <!--  Print if rating  -->
            <rating v-else-if="(title === 'Рейтинг') && Number(aboutItem)" :rating-num="aboutItem"/>

            <!--  Else  -->
            <div class="movie-about__desc" v-else>
                {{ aboutItem }}
            </div>
        </div>
    </div>
</template>

<script>
import Rating from "@/components/Rating";
export default {
    components: {Rating},
    props: {
        movieAbout: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped lang="scss">
.movie-about {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 40px;

    &__title {
        font-size: 15px;
        letter-spacing: 1.2px;

        margin-bottom: 16px;
    }

    &__desc {
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1.1px;

        line-height: 140%;
    }

    @media (max-width: $small) {
        grid-template-columns: repeat(2,1fr);
        grid-gap: 30px 50px;

        &__title {
            margin-bottom: 10px;
        }
        &__desc {
            font-size: 15px;
        }
    }

    @media (max-width: $ex-small) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &__item {
            width: 38%;
        }
    }
}
</style>