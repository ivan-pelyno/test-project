<template>
         <div class="cb-item-borders"> 
            <div class="cb-item-border" v-for="(border, index) in bordersList">
                    <img :src="border.path" :alt="border.descr" :title="border.descr" width="120" height="150">
                    <a v-if="border.prev"  v-for="(item, index) in border.prev" class="cb-item-border__prev fancybox gallery"
                                            :href="item" :title="border.descr"
                                            rel="gal-2"></a>
                </div>
        </div>
        
</template>
<script>
    export default {
        data () {
            return {
                bordersList:[
                    {
                        path: './public/img/borders/rama-01.png',
                        descr: "Багетная №1",
                        cost: 100,
                    },
                    {
                        path: './public/img/borders/rama-02.png',
                        descr: "Багетная №2",
                        cost: 100,
                    },
                    {
                        path: './public/img/borders/rama-03.png',
                        descr: "Багетная №3",
                        cost: 100,
                        prev: ['./public/img/borders/prev.03.jpg', './public/img/borders/prev.03.1.jpg', './public/img/borders/prev.03.2.jpg']
                    },
                     {
                        path: './public/img/borders/rama-04.png',
                        descr: "Багетная №4",
                        cost: 100,
                        prev: ['./public/img/borders/prev.04.jpg']
                    },
                     {
                        path: './public/img/borders/rama-05.png',
                        descr: "Багетная №5",
                        cost: 100,
                        prev: ['./public/img/borders/prev.05.jpg']
                    },
                     {
                        path: './public/img/borders/rama-06.png',
                        descr: "Багетная №6",
                        cost: 100,
                        prev: ['./public/img/borders/prev.06.jpg']
                    },
                     {
                        path: './public/img/borders/rama-07.png',
                        descr: "Багетная №7",
                        cost: 100,
                        prev: ['./public/img/borders/prev.07.jpg']
                    },
                     {
                        path: './public/img/borders/rama-08.png',
                        descr: "Багетная №8",
                        cost: 100,
                        prev: ['./public/img/borders/prev.08.jpg']
                    },
                     {
                        path: './public/img/borders/rama-09.png',
                        descr: "Багетная №9",
                        cost: 100,
                        prev: ['./public/img/borders/prev.09.jpg']
                    },
                     {
                        path: './public/img/borders/rama-10.png',
                        descr: "Багетная №10",
                        cost: 100,
                        prev: ['./public/img/borders/prev.10.jpg']
                    },
                     {
                        path: './public/img/borders/rama-11.png',
                        descr: "Багетная №11",
                        cost: 100,
                        prev: ['./public/img/borders/prev.11.jpg']
                    },
                     {
                        path: './public/img/borders/rama-12.png',
                        descr: "Багетная №12",
                        cost: 100,
                        prev: ['./public/img/borders/prev.12.jpg']
                    },
                     {
                        path: './public/img/borders/rama-13.png',
                        descr: "Багетная №13",
                        cost: 100,
                        prev: ['./public/img/borders/prev.13.jpg']
                    },
                     {
                        path: './public/img/borders/rama-14.png',
                        descr: "Багетная №14",
                        cost: 100,
                        prev: ['./public/img/borders/prev.14.jpg']
                    },
                     {
                        path: './public/img/borders/rama-15.png',
                        descr: "Багетная №15",
                        cost: 100,
                        prev: ['./public/img/borders/prev.15.jpg']
                    }
                    ]
            }
        }
    }
</script>

