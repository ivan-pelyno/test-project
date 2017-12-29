<template>
  <div id="app">
      <div class="container_12">
            <div class="grid_12">
                <div id="constructor" class="constructor-block">
                    <div class="cb-top-line">
                      <!--  steps-list  -->
                        <steps-list v-model="currentStep"></steps-list>
                      <!-- end steps-list  -->
                    </div>
                    <div class="cb-result">
                        <div class="cb-result__title">
                            <p>Ваша картина</p>
                        </div>
                        <div class="cb-result__content">
                            <p class="cb-result__data">
                                <span>Изображение:</span>
                                <strong></strong>
                                <strong>Не выбрано</strong>
                            </p>
                            <p class="cb-result__data">
                                <span>Рама:</span>
                                <strong></strong>
                                <strong>Не выбрано</strong>
                            </p>
                            <div class="cb-result__data">
                                <span>Отпечатки:</span>
                                <strong>Не выбраны</strong>

                            </div>
                            <div class="cb-result__object">
                                <div class="cb-result__img">

                                </div>
                                <div class="cb-result__border">

                                </div>
                                <p class="cb-result__text__title ariston"></p>
                                <p class="cb-result__text__name ariston"></p>
                                <p class="cb-result__text__date ariston"></p>
                            </div>
                        </div>
                        <div class="cb-result__bottom">
                            <form action="" method="POST">
                                <p class="cb-next">Далее</p>
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
                                <!-- pictures-list -->
                                <pictures-list></pictures-list>
                                <!--end pictures-list -->
                            </div> 

                            <div class="cb-item">
                                <p class="cb-item__title">
                                    Рама
                                </p>
                                <p class="cb-item__text">
                                    подберите раму, которая подойдет случаю и впишется в интерьер, ведь вы же не просто
                                    оставляете "пальчики", а создаете предмет декора для дома и офиса:
                                </p>
                                <!-- borders-list  -->
                                <borders-list></borders-list>
                                <!-- end borders-list  -->
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
                                <div class="cb-item__line">
                                    <input id="pic-title" placeholder="Наша Свадьба" maxlength="22" type="text">
                                    <span>Заголовок картины</span>

                                </div>
                                <div class="cb-item__line">
                                    <input id="pic-name" placeholder="Анастасия и Константин" maxlength="36" type="text">
                                    <span>Подпись</span>
                                </div>
                                <div class="cb-item__line">
                                    <input id="pic-date" placeholder="29 июля 2015" maxlength="26" type="text">
                                    <span>Дата события</span>
                                </div>
                                <div class="cb-item__line--btns">
                                        <span id="ariston" class="btn-font btn-font--active">
                                            Ariston
                                        </span>
                                    <span id="davinci" class="btn-font">
                                            DaVinci
                                        </span>
                                    <span id="brody" class="btn-font">
                                            Brody
                                        </span>
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
                                  <marks-list></marks-list>
                            </div>   
                        </div>
                    </div>
                    <div class="cb-bottom-line">
                        <div class="cb-total">
                            <span class="cb-total__text">Стоимость:</span><span class="cb-total__amount"> 550</span>
                            <span class="cb-total__currency"> грн</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import StepsList from './components/StepsList'
import PicturesList from './components/PicturesList'
import BordersList from './components/BordersList'
import MarksList from './components/MarksList'

export default {
  name: 'app',
  components: {
    StepsList,
    PicturesList,
    BordersList,
    MarksList
    },
  data(){
     return {
        currentStep: 1
     }
  }
}
</script>
