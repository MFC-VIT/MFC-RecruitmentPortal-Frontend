<template>
  <b-container fluid>
    <b-navbar
      class="ml-md-5"
      size="lg"
      toggleable="lg"
      type="dark"
      variant="moz-transparent"
    >
      <b-navbar-brand class="d-none d-md-block" to="/">
        <div class="site-nav-brand">MFC-VIT</div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto h3">
          <b-nav-item class="p-2" href="https://mfcvit.in/"
            >Our Website</b-nav-item
          >
          <b-nav-item class="p-2" to="/social/instagram">
            <i class="fab fa-instagram"></i>
          </b-nav-item>
          <b-nav-item class="p-2" to="/social/facebook">
            <i class="fab fa-facebook-f"></i>
          </b-nav-item>
          <b-nav-item class="p-2" to="/social/linkedin">
            <i class="fab fa-linkedin-in"></i>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<style scoped>
.site-nav-brand {
  color: #e66100;
  font-weight: bold;
  padding: 5px;
  border: 3px solid white;
}
</style>
