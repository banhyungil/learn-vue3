<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink
                :to="{ name: 'AppWatch' }"
                class="nav-link"
                active-class="active"
                aria-current="page"
                href="#"
                >AppWatch</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                :to="{ name: 'AppWatchEffect' }"
                class="nav-link"
                active-class="active"
                href="#"
                >AppWatchEffect</RouterLink
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <RouterView></RouterView>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
