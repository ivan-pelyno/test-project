<template>
    <div class="cb-item-marks">
        <div class="cb-item-mark" v-for="(item, index) in marksList">
            <input :id="item.id" type="checkbox">
            <label :for="item.id" :title="item.title"></label>
            <img :src="item.src" :alt="item.title" width="136" height="136">
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                marksList:[
                    {
                        id: 'mark0',
                        title: 'BahamaBlue',
                        src: './public/img/marks/BahamaBlue.jpg',
                        cost: 100
                    },
                     {
                        id: 'mark1',
                        title: 'BambooLeaves',
                        src: './public/img/marks/BambooLeaves.jpg',
                        cost: 100
                    },
                     {
                        id: 'mark2',
                        title: 'LilacPosies',
                        src: './public/img/marks/LilacPosies.jpg',
                        cost: 100
                    },
                     {
                        id: 'mark3',
                        title: 'PearTart',
                        src: './public/img/marks/PearTart.jpg',
                        cost: 100
                    },
                     {
                        id: 'mark4',
                        title: 'RhubarbStalk',
                        src: './public/img/marks/RhubarbStalk.jpg',
                        cost: 100
                    },
                     {
                        id: 'mark5',
                        title: 'Tangelo',
                        src: './public/img/marks/Tangelo.jpg',
                        cost: 100
                    },
                     {
                        id: 'mark6',
                        title: 'CottageIvy',
                        src: './public/img/marks/CottageIvy.jpg',
                        cost: 100
                    },
                     {
                        id: 'mark7',
                        title: 'PearTart',
                        src: './public/img/marks/PearTart.jpg',
                        cost: 100
                    },
                     {
                        id: 'mark8',
                        title: 'BahamaBlue',
                        src: './public/img/marks/BahamaBlue.jpg',
                        cost: 100
                    },
                     {
                        id: 'mark9',
                        title: 'PottersClay',
                        src: './public/img/marks/PottersClay.jpg',
                        cost: 100
                    }
                ]
            }
        }
    }
</script>
