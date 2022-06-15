<template>
    <div class="movie-list">
        <movie-item
            v-for="movie in movies"
            :movie="movie"
        />
    </div>
</template>

<script>
import MovieItem from "@/components/Movie/MovieItem";
export default {
    components: {MovieItem},
    props: {
        movies: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped lang="scss">
.movie-list {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 40px;

    @media (max-width: $large) {
        grid-gap: 25px;
    }

    @media (max-width: $medium) {
        grid-template-columns: repeat(3,1fr);
    }

    @media (max-width: $small) {
        grid-template-columns: repeat(2,1fr);
    }

    @media (max-width: $ex-small) {
        max-width: 375px;
        grid-template-columns: repeat(1,1fr);

        margin: 0 auto;
    }
}
</style>