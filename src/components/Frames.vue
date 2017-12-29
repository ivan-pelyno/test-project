<template>
        <div class="cb-item-borders"> 
            <div :class=" currentItem === index ? 'current  cb-item-border' : 'cb-item-border' " v-for="(frame, index) in frames" @click.prevent="changeFrame(frame, index)">
                    <img :src="frame.path" :alt="frame.descr" :title="frame.descr" width="120" height="150">
                    <a v-if="frame.prev"  v-for="(item, index) in frame.prev" class="cb-item-border__prev fancybox gallery"
                                            :href="item" :title="frame.descr"
                                           ></a>
                </div>
        </div>
</template>
<script>
    export default {
        props:['frames'],
        data () {
            return {
                currentItem: ''
            }
        },
        methods:{
            changeFrame: function(obj, index){
                this.currentItem = index;
                this.$store.commit('changeFrame', obj)
            }
        },
    }
</script>

