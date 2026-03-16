<script setup lang="ts">
import { MenuDesk } from '@/widgets/MenuDesk'
import { SeoBox } from '@/widgets/SeoBox'
import { ButtonTop } from '@/widgets/ButtonTop'
import { PayInfo } from '@/widgets/PayInfo'
import InfoBox from './InfoBox.vue'
import AboutInfo from './AboutInfo.vue'
</script>

<template>
  <MenuDesk />
  <AboutInfo />
  <InfoBox
    :title="'О компании'"
    :text="`Доставка от удобных кафе Сушилка. Сушилка — место, где еда — это главное. Именно поэтому мы не экономим
    на вкусе. Только свежие роллы и горячая пицца, приготовленные именно для вас после заказа! Доставим заказ
    за 60 минут или пицца в подарок!`"
  />
  <InfoBox
    :title="'Контакты'"
    :text="`
      <p>Если у вас возникнут вопросы или пожелания, вы можете связаться с нами любым удобным способом:</p>
      <p><b>Телефон:</b> +7(8332)436-436</p>
      <p><b>Email:</b> sushilka43@bk.ru</p>
    `"
  />
  <InfoBox
    :title="'Реквизиты'"
    :text="`
      <p>
        <svg width=&quot;18px&quot; height=&quot;18px&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
          <path d=&quot;M8 13H14M8 17H16M13 3H5V21H19V9M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19&quot; stroke=&quot;#000000&quot;
          stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>
        </svg>
        <b>Юридическое лицо:</b> ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ &quot;ВИА&quot;
      </p>
      <p>
        <svg width=&quot;18px&quot; height=&quot;18px&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
          <path d=&quot;M8 13H14M8 17H16M13 3H5V21H19V9M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19&quot; stroke=&quot;#000000&quot;
          stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>
        </svg>
        <b>ИНН:</b> 4345291372
      </p>
      <p>
        <svg width=&quot;18px&quot; height=&quot;18px&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
          <path d=&quot;M8 13H14M8 17H16M13 3H5V21H19V9M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19&quot; stroke=&quot;#000000&quot;
          stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>
        </svg>
        <b>КПП:</b> 434501001
      </p>
      <p>
        <svg width=&quot;18px&quot; height=&quot;18px&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
          <path d=&quot;M8 13H14M8 17H16M13 3H5V21H19V9M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19&quot; stroke=&quot;#000000&quot;
          stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>
        </svg>
        <b>ОГРН:</b> 1104345021890
      </p>
      <p>
        <svg width=&quot;18px&quot; height=&quot;18px&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
          <path d=&quot;M8 13H14M8 17H16M13 3H5V21H19V9M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19&quot; stroke=&quot;#000000&quot;
          stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/>
        </svg>
        <b>Фактическое расположение организации:</b> 610013 Кировская область, г. Киров, ул. Советская (Нововятский), д. 28
      </p>
    `"
  />
  <PayInfo />
  <SeoBox
    :title="'График работы и зоны доставки Сушилка'"
    :description="`График доставки от Сушилки с 10 до 23. С графиком работы кафе для заказа на самовывоз
    и картой с зонами доставки вы можете ознакомиться выше.`"
  />
  <ButtonTop />
</template>

<style scoped lang="sass"></style>
