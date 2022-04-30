<template>
  <div class="sidebar">
    <a href="javascript:void(0)" class="sidebar__logo">&nbsp;</a>
    <div class="sidebar-nav">
      <ul class="sidebar-list">
        <li class="sidebar-list__item">
          <router-link class="sidebar-list__link" :to="{ name: 'Users' }">
            Пользователи
          </router-link>
        </li>
        <li class="sidebar-list__item">
          <router-link class="sidebar-list__link" :to="{ name: 'Transactions' }">
            Транзакции
          </router-link>
        </li>
        <li class="sidebar-list__item">
          <router-link class="sidebar-list__link" :to="{ name: 'Moderators' }">
            Тренера
          </router-link>
        </li>
      </ul>

      <ul class="sidebar-list">
        <li class="sidebar-list__item">
          <router-link class="sidebar-list__link" :to="{ name: 'Menu' }">
            Меню
          </router-link>
        </li>
        <li class="sidebar-list__item">
          <router-link class="sidebar-list__link" :to="{ name: 'Products' }">
            Продукты
          </router-link>
        </li>
      </ul>

      <ul class="sidebar-list">
        <li class="sidebar-list__item">
          <router-link class="sidebar-list__link" :to="{ name: 'Training' }">
            Тренировка
          </router-link>
        </li>
        <li class="sidebar-list__item">
          <router-link class="sidebar-list__link" :to="{ name: 'Marathon' }">
            Марафон
          </router-link>
        </li>
        <li class="sidebar-list__item">
          <router-link class="sidebar-list__link" :to="{ name: 'Stories' }">
            Истории
          </router-link>
        </li>
      </ul>

      <ul class="sidebar-list">
        <li class="sidebar-list__item">
          <router-link class="sidebar-list__link" :to="{ name: 'Tariffs' }">
            Тарифы
          </router-link>
        </li>
        <li class="sidebar-list__item">
          <router-link class="sidebar-list__link" :to="{ name: 'Statistics' }">
            Статистика
          </router-link>
        </li>
        <li class="sidebar-list__item">
          <router-link class="sidebar-list__link" :to="{ name: 'Settings' }">
            Настройки
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar__version">V.1.12</div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
