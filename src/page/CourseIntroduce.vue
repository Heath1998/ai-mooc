<template>
    <div>
        <sec-header></sec-header>
        <sec-content></sec-content>
    </div>
</template>

<script>
import secondHeader from '@/components/secondPage/secondHeader'
import secondContent from '@/components/secondPage/secondContent'

export default {
    components:{
        "sec-header":secondHeader,
        "sec-content":secondContent,
    }
}
</script>

<style scoped>

</style>

