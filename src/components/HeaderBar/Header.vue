<template>
  <div class="header-bar">
    <div class="navigation-bar">
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="dark"
        class="navbarFix py-2"
      >
        <b-navbar-brand>
          <img
            src="@/assets/img/qmaq2.svg"
            alt="qmaq logo"
            width="80"
            class="mx-2"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link :to="{ name: 'adjuntar' }" class="active">
              <span class="text-light mx-5">Adjuntar Archivo</span>
            </router-link>
            <router-link :to="{ name: 'Filtro' }" class="active">
              <span class="text-light mx-5">Visualizar Tabla</span>
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<style lang="stylus">
.navbarFix {
  background-color: #1f2d40 !important;
}
</style>
