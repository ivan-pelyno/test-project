<template>
    <div class="cb-item-marks">
        <div class="cb-item-mark" v-for="(item, index) in marks">
            <input :id="item.id" type="checkbox" :value="item"  v-model="checkedMarks" >
            <label :for="item.id" :title="item.title"></label>
            <img :src="item.src" :alt="item.title" width="136" height="136">
        </div>
    </div>
</template>
<script>
    export default {
        props:['marks'],
        data () {
            return {
                checkedMarks: []
            }
        },
        watch:{
            checkedMarks: function(obj){
                this.$store.commit('changeMark', obj)
                 if (this.$store.state.results.mark.length >= 2 ){
                    this.$store.state.total = this.$store.state.results.frame.cost  + ( this.$store.state.results.mark.length - 2 ) * 50 ;
                 }
            }
        }
    }
</script>

                
