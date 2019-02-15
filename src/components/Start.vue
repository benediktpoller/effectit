<template>
    <div>
        <!--
        <Slider></Slider>
        -->
        <Slogan></Slogan>
        <Boxes></Boxes>
        <Partners></Partners>

    </div>
</template>

<script>

    import Slider from '../components/home/Slider.vue'
    import Slogan from '../components/home/Slogan.vue'
    import Boxes from '../components/home/Boxes.vue'
    import Partners from '../components/home/Partners.vue'

    export default {
        name: 'Start',
        components: {
            Slogan,
            Boxes,
            Partners,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
