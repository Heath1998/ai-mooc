<template>
    <div class="box">
        <banner></banner>
        <mainContent></mainContent>
        <relation></relation>
    </div>
</template>

<script>
import banner from '@/components/thirdPage/banner.vue'
import mainContent from '@/components/thirdPage/mainContent.vue'
import relation from '@/components/thirdPage/relation.vue'

export default {
    name: 'Video',
    components: {
        banner,
        mainContent,
        relation
    },
    data () {
        return {

        }
    }
}
</script>

<style> 
.box {
    width: 100%;
}
</style>
