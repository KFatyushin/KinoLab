<template>
    <div class="reviews" v-if="reviews[0]">
        <h2 class="reviews__title">
            Рецензии зрителей
        </h2>

        <reviews-item :reviews="reviews"/>
    </div>
</template>

<script>
import axios from "axios";
import ReviewsItem from "@/components/Reviews/ReviewsItem";

export default {
    components: {ReviewsItem},
    props: {
        movieId: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            reviews: [],
        }
    },
    methods: {
        async fetchReviews() {
            try {
                const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + this.movieId + '/reviews', {
                    headers: {
                        'X-API-KEY': 'fe33ada0-dac7-4b35-9b0c-e912b3864608',
                        'Content-Type': 'application/json',
                    }
                })
                this.reviews = response.data.items
            } catch (err) {
                console.log(err)
            } finally {
                this.isLoading = false
            }
        },
    },
    mounted() {
        this.fetchReviews()
    }
}
</script>

<style scoped lang="scss">
.reviews {
    margin-top: 40px;

    &__title {
        font-size: 25px;
        line-height: 130%;
        letter-spacing: 1.5px;

        margin-bottom: 15px;
    }

    @media (max-width: $medium) {
        &__title {
            font-size: 20px;

            margin-bottom: 15px;
        }
    }
}
</style>