<template>
    <div class="cb-item-pics">
        <div class="cb-item-pic" v-for="(item, index) in picturesList" @click.prevent="changePicture(item.id)">
            <img :src="item.path" :alt="item.descr" :title="item.descr" width="176" height="220"> 
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                picturesList:[
                    {id: 'pict1', path: './public/img/pics/01.jpg', descr: "Картинка №1"},
                    {id: 'pict2', path: './public/img/pics/02.jpg', descr: "Картинка №2"},
                    {id: 'pict3', path: './public/img/pics/03.jpg', descr: "Картинка №3"},
                    {id: 'pict4', path: './public/img/pics/04.jpg', descr: "Картинка №4"},
                    {id: 'pict5', path: './public/img/pics/05.jpg', descr: "Картинка №5"},
                    {id: 'pict6', path: './public/img/pics/06.jpg', descr: "Картинка №6"},
                    {id: 'pict7', path: './public/img/pics/07.jpg', descr: "Картинка №7"},
                    {id: 'pict8', path: './public/img/pics/08.jpg', descr: "Картинка №8"},
                    {id: 'pict9', path: './public/img/pics/09.jpg', descr: "Картинка №9"},
                    {id: 'pict10', path: './public/img/pics/10.jpg', descr: "Картинка №10"},
                    {id: 'pict11', path: './public/img/pics/11.jpg', descr: "Картинка №11"}
                ]
            }
            cirrentItem: ''
        },
        methods:{
            changePicture: function(id){
                this.cirrentItem =  id;
            }
        }
    }
</script>
