export default {
    pictures: [
        { id: 'pict1', path: './public/img/pics/01.jpg', descr: "Картинка №1" },
        { id: 'pict2', path: './public/img/pics/02.jpg', descr: "Картинка №2" },
        { id: 'pict3', path: './public/img/pics/03.jpg', descr: "Картинка №3" },
        { id: 'pict4', path: './public/img/pics/04.jpg', descr: "Картинка №4" },
        { id: 'pict5', path: './public/img/pics/05.jpg', descr: "Картинка №5" },
        { id: 'pict6', path: './public/img/pics/06.jpg', descr: "Картинка №6" },
        { id: 'pict7', path: './public/img/pics/07.jpg', descr: "Картинка №7" },
        { id: 'pict8', path: './public/img/pics/08.jpg', descr: "Картинка №8" },
        { id: 'pict9', path: './public/img/pics/09.jpg', descr: "Картинка №9" },
        { id: 'pict10', path: './public/img/pics/10.jpg', descr: "Картинка №10" },
        { id: 'pict11', path: './public/img/pics/11.jpg', descr: "Картинка №11" }
    ],
    frames: [{
            id: 'frame01',
            path: './public/img/borders/rama-01.png',
            descr: "Багетная №1",
            cost: 200,
        },
        {
            id: 'frame02',
            path: './public/img/borders/rama-02.png',
            descr: "Багетная №2",
            cost: 300,
        },
        {
            id: 'frame03',
            path: './public/img/borders/rama-03.png',
            descr: "Багетная №3",
            cost: 400,
            prev: ['./public/img/borders/prev.03.jpg', './public/img/borders/prev.03.1.jpg', './public/img/borders/prev.03.2.jpg']
        },
        {
            id: 'frame04',
            path: './public/img/borders/rama-04.png',
            descr: "Багетная №4",
            cost: 500,
            prev: ['./public/img/borders/prev.04.jpg']
        },
        {
            id: 'frame05',
            path: './public/img/borders/rama-05.png',
            descr: "Багетная №5",
            cost: 600,
            prev: ['./public/img/borders/prev.05.jpg']
        },
        {
            id: 'frame06',
            path: './public/img/borders/rama-06.png',
            descr: "Багетная №6",
            cost: 650,
            prev: ['./public/img/borders/prev.06.jpg']
        },
        {
            id: 'frame07',
            path: './public/img/borders/rama-07.png',
            descr: "Багетная №7",
            cost: 700,
            prev: ['./public/img/borders/prev.07.jpg']
        },
        {
            id: 'frame08',
            path: './public/img/borders/rama-08.png',
            descr: "Багетная №8",
            cost: 750,
            prev: ['./public/img/borders/prev.08.jpg']
        },
        {
            id: 'frame09',
            path: './public/img/borders/rama-09.png',
            descr: "Багетная №9",
            cost: 800,
            prev: ['./public/img/borders/prev.09.jpg']
        },
        {
            id: 'frame10',
            path: './public/img/borders/rama-10.png',
            descr: "Багетная №10",
            cost: 850,
            prev: ['./public/img/borders/prev.10.jpg']
        },
        {
            id: 'frame11',
            path: './public/img/borders/rama-11.png',
            descr: "Багетная №11",
            cost: 900,
            prev: ['./public/img/borders/prev.11.jpg']
        },
        {
            id: 'frame12',
            path: './public/img/borders/rama-12.png',
            descr: "Багетная №12",
            cost: 950,
            prev: ['./public/img/borders/prev.12.jpg']
        },
        {
            id: 'frame13',
            path: './public/img/borders/rama-13.png',
            descr: "Багетная №13",
            cost: 1000,
            prev: ['./public/img/borders/prev.13.jpg']
        },
        {
            id: 'frame14',
            path: './public/img/borders/rama-14.png',
            descr: "Багетная №14",
            cost: 1050,
            prev: ['./public/img/borders/prev.14.jpg']
        },
        {
            id: 'frame15',
            path: './public/img/borders/rama-15.png',
            descr: "Багетная №15",
            cost: 1100,
            prev: ['./public/img/borders/prev.15.jpg']
        }
    ],
    marks: [{
            id: 'mark0',
            title: 'BahamaBlue',
            src: './public/img/marks/BahamaBlue.jpg',
            value: 'v51'
        },
        {
            id: 'mark1',
            title: 'BambooLeaves',
            src: './public/img/marks/BambooLeaves.jpg',
            value: 'v44'
        },
        {
            id: 'mark2',
            title: 'LilacPosies',
            src: './public/img/marks/LilacPosies.jpg',
            value: 'v41'
        },
        {
            id: 'mark3',
            title: 'PearTart',
            src: './public/img/marks/PearTart.jpg',
            value: 'v47'
        },
        {
            id: 'mark4',
            title: 'RhubarbStalk',
            src: './public/img/marks/RhubarbStalk.jpg',
            value: 'v48'
        },
        {
            id: 'mark5',
            title: 'Tangelo',
            src: './public/img/marks/Tangelo.jpg',
            value: 'v49'
        },
        {
            id: 'mark6',
            title: 'CottageIvy',
            src: './public/img/marks/CottageIvy.jpg',
            value: 'v50'
        },

        {
            id: 'mark9',
            title: 'PottersClay',
            src: './public/img/marks/PottersClay.jpg',
            value: 'v49'
        }
    ],
    results: {
        picture: null,
        frame: null,
        form: {
            title: null,
            signature: null,
            date: null,
            font: null
        },
        mark: null
    },
    total: 0
}