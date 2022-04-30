<template>
  <div class="container py-4 px-5">
    <h1>Список страниц</h1>
    <ol class="pt-3">
<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'Login' }" target="_blank">-->
<!--          Admin Login - step 1-->
<!--        </router-link>-->
<!--      </li>-->
<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'LoginStep2' }" target="_blank">-->
<!--          Admin Login - step 2-->
<!--        </router-link>-->
<!--      </li>-->
      <li class="mt-3">
        <router-link :to="{ name: 'LoginHost' }" target="_blank">
          Host Login
        </router-link>
      </li>

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'Host' }" target="_blank"> Host </router-link>-->
<!--      </li>-->

      <li class="mt-3">
        <router-link :to="{ name: 'Users' }" target="_blank">
          Пользователи
        </router-link>
      </li>

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'Moderators' }" target="_blank">-->
<!--          Модераторы-->
<!--        </router-link>-->
<!--      </li>-->

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'Authors' }" target="_blank">-->
<!--          Авторы-->
<!--        </router-link>-->
<!--      </li>-->

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'Spheres' }" target="_blank">-->
<!--          Сферы-->
<!--        </router-link>-->
<!--      </li>-->

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'Courses' }" target="_blank">-->
<!--          Курсы-->
<!--        </router-link>-->
<!--      </li>-->

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'Transactions' }" target="_blank">-->
<!--          Транзакции-->
<!--        </router-link>-->
<!--      </li>-->

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'Tariffs' }" target="_blank">-->
<!--          Тарифы - Роялти автора-->
<!--        </router-link>-->
<!--      </li>-->

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'TariffsAuthorAccount' }" target="_blank">-->
<!--          Тарифы - Аккаунт автора-->
<!--        </router-link>-->
<!--      </li>-->

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'TariffsSubscriptions' }" target="_blank">-->
<!--          Тарифы - Подписки для пользователей-->
<!--        </router-link>-->
<!--      </li>-->

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'TariffsPromotion' }" target="_blank">-->
<!--          Тарифы - Роялти за Продвижение-->
<!--        </router-link>-->
<!--      </li>-->

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'Statistics' }" target="_blank">-->
<!--          Статистика-->
<!--        </router-link>-->
<!--      </li>-->

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'Promotion' }" target="_blank">-->
<!--          Продвижение - Статистика-->
<!--        </router-link>-->
<!--      </li>-->

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'Promoters' }" target="_blank">-->
<!--          Продвижение - Промоутеры-->
<!--        </router-link>-->
<!--      </li>-->

<!--      <li class="mt-3">-->
<!--        <router-link :to="{ name: 'Settings' }" target="_blank">-->
<!--          Настройки-->
<!--        </router-link>-->
<!--      </li>-->
    </ol>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
