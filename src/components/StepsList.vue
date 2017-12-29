<template>
   <div class="cb-top-line">
        <div v-for="(item, index)  in listSteps" :class=" value == ++index ? 'cb-step--current cb-step' : 'cb-step'" @click.prevent="changeStep(index)">
            <p>
                <span>{{index}}</span>
                {{item}}
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        props:['value'],
        data () {
            return {
                listSteps: ['Изображение', 'Рама', 'Заголовок', 'Цвет отпечатков']
            }
        },
        methods:{
            changeStep: function(index){
                 this.$emit('input', index);
            } 
        }
    }
</script>