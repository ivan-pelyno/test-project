<template>
    <div class="cb-item-pics">
        <div :class=" currentItem === index ? 'current  cb-item-pic' : 'cb-item-pic' " v-for="(item, index) in pictures" @click.prevent="changePicture(item, index)">
            <img :src="item.path" :alt="item.descr" :title="item.descr" width="176" height="220"> 
        </div>
    </div>
</template>
<script>
    export default {
        props:['pictures'],
        data () {
            return {
                currentItem: 0
            }
        },
        mounted(){
            this.$store.commit('changePicture', this.pictures[0])
        },
        methods:{
            
            changePicture: function(obj, index){
                this.currentItem = index;
                this.$store.commit('changePicture', obj)
            }
        },
        computed:{

        }
    }
</script>
