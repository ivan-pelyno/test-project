<template>
  <div id="app">
      <div class="container_12">
            <div class="grid_12">
                <div id="constructor" class="constructor-block">
                    <div class="cb-top-line">
                      <!--  steps  -->
                        <steps v-model="currentStep"></steps>
                    </div>
                    <div class="cb-result">
                        <div class="cb-result__title">
                            <p>Ваша картина</p>
                        </div>
                        <div class="cb-result__content">
                            <p class="cb-result__data">
                                <span>Изображение:</span>
                                <strong> {{prevTextPicture}}</strong>
                            </p>
                            <p class="cb-result__data">
                                <span>Рама:</span>
                                 <strong>{{ prevTextFrame }}</strong>
                            </p>
                            <div class="cb-result__data">
                                <span>Отпечатки:</span>
                                <strong>   <span v-if="!$store.state.results.mark"> Не выбрано</span> <span v-else v-for="item in $store.state.results.mark" :class="'imprints-item ' + item.value "></span> </strong>

                            </div>
                            <div :class="'cb-result__object ' +  checkedFonts.id" >
                                <div class="cb-result__img" v-if="$store.state.results.picture">
                                   <img :src="$store.state.results.picture.path" :alt="$store.state.results.picture.descr" :title="$store.state.results.picture.descr" width="176" height="220"> 
                                </div>
                                <div class="cb-result__border" v-if="$store.state.results.frame">
                                    <img :src="$store.state.results.frame.path" :alt="$store.state.results.frame.descr" :title="$store.state.results.frame.descr" width="120" height="150">
                                </div>
                                <p class="cb-result__text__title">{{pictureTitle}}</p>
                                <p class="cb-result__text__name">{{pictureSignature}}</p>
                                <p class="cb-result__text__date">{{pictureDate}}</p>
                            </div>
                        </div>
                        <div class="cb-result__bottom">
                            <form action="" method="POST">
                                <a v-if="this.currentStep < 4" href="#" class="cb-next active" @click.prevent="changeNext">Далее</a>
                                <input v-else-if="$store.state.results.mark != null && $store.state.results.mark.length >= 2" type="submit"  class="active cb-next" value="Заказать"  @click.prevent="changeNext">
                                <input v-else type="submit"  class="cb-next" value="Заказать" @click.prevent="changeNext">
                                <input name="result" id="" type="text" hidden="">
                            </form>
                        </div>
                    </div>
                    <div class="cb-wrapper">
                        <div id="cb-items" :class="'cb-item'+currentStep">
                             <div class="cb-item">
                                <p class="cb-item__title">
                                    Выберите изображение
                                </p>
                                <p class="cb-item__text">
                                    для начала выберите основу, саму картину, на которую вы и гости вашего праздника будете
                                    наносить отпечатки пальцев с пожеланиями
                                </p>
                                <!-- pictures -->
                                <pictures :pictures="pictures"></pictures>
                            </div> 

                            <div class="cb-item">
                                <p class="cb-item__title">
                                    Рама
                                </p>
                                <p class="cb-item__text">
                                    подберите раму, которая подойдет случаю и впишется в интерьер, ведь вы же не просто
                                    оставляете "пальчики", а создаете предмет декора для дома и офиса:
                                </p>
                                <span class="error" v-if="errorMessage.step == 2 && errorMessage.status == 'error'">Виберити Раму </span>
                                <!-- frames  -->
                                <frames :frames="frames"></frames>
                            </div> 
                               
                              <div class="cb-item">
                                <p class="cb-item__title">
                                    Заголовок
                                </p>
                                <p class="cb-item__text">
                                    персонализируйте ваше "Дерево пожеланий"; вверху и внизу картины есть специальные поля,
                                    которые можно заполнить по вашему усмотрению: вписать имена виновников торжества, или
                                    особые пожелания, добавить дату, или логотип компании, если речь идет о корпоративном
                                    подарке.
                                </p>
                                <span class="error" v-if="errorMessage.step == 3 && errorMessage.status == 'error'">Все поля обезательные </span>
                                    <div class="cb-item__line">
                                        <input id="pic-title" placeholder="Наша Свадьба" maxlength="22" type="text" v-model="pictureTitle" required>
                                        <span>Заголовок картины</span>
                                    </div>
                                    <div class="cb-item__line">
                                        <input id="pic-name" placeholder="Анастасия и Константин" maxlength="36" type="text" v-model="pictureSignature" required>
                                        <span>Подпись</span>
                                    </div>
                                    <div class="cb-item__line">
                                        <input type="text" id="pic-date" placeholder="29 июля 2015" maxlength="26" v-model="pictureDate" required>
                                        <span>Дата события</span>
                                    </div>
                                    <div class="cb-item__line--btns">
                                        <label :for="item.id" v-for="(item, index) in fonts"  :class=" {'btn-font' : true, 'btn-font--active' : checkedFonts.id == item.id}">
                                            <input type="radio" name="fonts" :value="item" :id="item.id" v-model="checkedFonts"  :class=" {'btn-font' : true, 'btn-font--active' : checkedFonts.id == item.id}">
                                            {{item.name}}
                                        </label>
                                    </div>
                              </div>  

                               <div class="cb-item">
                                <p class="cb-item__title">
                                    Цвет отпечатков
                                </p>
                                <p class="cb-item__text">
                                    наконец, подберите самые подходящие цвета красок, с помощью которых вы и оставите на
                                    картине свой след на память!<br>
                                    <strong>Обратите внимание: более 2-х цветов увеличат стоимость</strong>
                                </p>
                                 <span class="error" v-if="errorMessage.step == 2 && errorMessage.status == 'error'"> Выберете минимум два отпечатка </span>
                                <!--  marks  -->
                                  <marks :marks="marks"></marks>
                            </div>   
                        </div>
                    </div>
                    <div class="cb-bottom-line">
                        <div class="cb-total">
                            <span class="cb-total__text">Стоимость:</span><span class="cb-total__amount">{{total}}</span>
                            <span class="cb-total__currency"> грн</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div v-if="activePrevue" class="modal-cart" @click.prevent="closeModal">
        <div class="modal-body">
            <h2>Ваш заказ , на суму {{total}} <small>грн</small></h2>
            <div :class="'cb-result__object ' +  checkedFonts.id" >
                <div class="cb-result__img" v-if="$store.state.results.picture">
                    <img :src="$store.state.results.picture.path" :alt="$store.state.results.picture.descr" :title="$store.state.results.picture.descr" width="176" height="220"> 
                </div>
                <div class="cb-result__border" v-if="$store.state.results.frame">
                    <img :src="$store.state.results.frame.path" :alt="$store.state.results.frame.descr" :title="$store.state.results.frame.descr" width="120" height="150">
                </div>
                <p class="cb-result__text__title">{{pictureTitle}}</p>
                <p class="cb-result__text__name">{{pictureSignature}}</p>
                <p class="cb-result__text__date">{{pictureDate}}</p>
                <span class="imprints-item"> <img v-for="item in $store.state.results.mark"  :src="item.src" :alt="item.title"></span>
            </div>
        </div>
    </div>
  </div>

</template>
<script>
import Steps from './components/Steps'
import Pictures from './components/Pictures'
import Frames from './components/Frames'
import Marks from './components/Marks'

export default {
  name: 'app',
  components: {
    Steps,
    Pictures,
    Frames,
    Marks
    },
  data(){
     return {
        errorMessage: [],
        currentStep: 1,
        mydate: '',
        fonts:[ {name: 'Ariston', id:'ariston'},
                {name: 'DaVinci', id:'davinci'},
                {name: 'Brody', id:'brody'}],
        checkedFonts: '',
        pictureTitle: '',
        pictureSignature: '',
        pictureDate: '',
        activePrevue: false
     }
  },
  methods:{
    validation:function(){
        this.errorMessage = this.$store.getters.errorMessage(this.currentStep);

        if(this.currentStep == 1 && this.$store.state.results.picture != null){
            this.currentStep = 2;
        }else if(this.currentStep == 2 && this.$store.state.results.frame != null){
            this.currentStep = 3;
        } else if(this.currentStep == 3 && this.$store.state.results.form.title != null && this.$store.state.results.form.title != "" && this.$store.state.results.form.signature != null && this.$store.state.results.form.signature != "" && this.$store.state.results.form.date != null && this.$store.state.results.form.date != ""){
            this.currentStep = 4;
        }else if(this.currentStep == 4 && this.$store.state.results.mark.length >= 2){
            this.activePrevue = true;
        }
    },
    changeNext: function(){
       this.validation();
    },
    closeModal: function(){
        this.activePrevue = false;
    }
  },
  watch:{
    checkedFonts: function(val){
       this.$store.state.results.form.font = val;
    },
    pictureTitle: function(val){
       this.$store.state.results.form.title = val;
    },
    pictureSignature: function(val){
       this.$store.state.results.form.signature = val;
    },
    pictureDate: function(val){
       this.$store.state.results.form.date = val;
    }
  },
  mounted() {
      this.checkedFonts = this.fonts[0];
  },
  computed: {
      total(){
          return this.$store.getters.total;
      },
      pictures(){
          return this.$store.state.pictures;
      },
      marks(){
          return this.$store.state.marks;
      },
      frames(){
          return this.$store.state.frames;
      },
      prevTextPicture(){
        return this.$store.state.results.picture ? this.$store.state.results.picture.descr : "Не выбрано";
      },
      prevTextFrame(){
        return this.$store.state.results.frame ? this.$store.state.results.frame.descr : "Не выбрано";
      }
  }
}
</script>
