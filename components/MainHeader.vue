<template>
  <header role="banner" class="fr-header">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">
          <div class="fr-header__brand fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <p class="fr-logo">
                  République
                  <br>Française
                </p>
              </div>
              <div class="fr-header__operator">
                <img
                  src="@/assets/logo.svg" class="fr-responsive-img"
                  style="max-height:3rem;"
                  alt="Incubateur des Territoires"
                />
              </div>
              <div class="fr-header__navbar">
                <!-- <button class="fr-btn--search fr-btn" data-fr-opened="false" aria-controls="modal-866"
                  title="Rechercher">
                  Rechercher
                </button> -->
                <button
                  id="fr-btn-menu-mobile-4"
                  class="fr-btn--menu fr-btn"
                  data-fr-opened="false"
                  aria-controls="modal-870"
                  aria-haspopup="menu" title="Menu"
                >
                  Menu
                </button>
              </div>
            </div>
            <div class="fr-header__service">
              <a href="/" title="Accueil - Incubateur des Territoires">
                <p class="fr-header__service-title">Incubateur des Territoires</p>
              </a>
              <!-- <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p> -->
            </div>
          </div>
          <!-- <div class="fr-header__tools">
            <div class="fr-header__tools-links">
              <ul class="fr-links-group">
                <li>
                  <a class="fr-link fr-fi-add-circle-line" href="#">Créer un espace</a>
                </li>
                <li>
                  <a class="fr-link fr-fi-lock-line" href="#">Se connecter</a>
                </li>
                <li>
                  <a class="fr-link fr-fi-account-line" href="#">S’enregistrer</a>
                </li>
              </ul>
            </div>
            <div class="fr-header__search fr-modal" id="modal-866">
              <div class="fr-container fr-container-lg--fluid">
                <button class="fr-link--close fr-link" aria-controls="modal-866">Fermer</button>
                <div class="fr-search-bar" id="search-865" role="search">
                  <label class="fr-label" for="search-865-input">Recherche
                  </label>
                  <input class="fr-input" placeholder="Rechercher" type="search" id="search-865-input"
                    name="search-865-input">
                  <button class="fr-btn" title="Rechercher">
                    Rechercher
                  </button>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div id="modal-870" class="fr-header__menu fr-modal" aria-labelledby="fr-btn-menu-mobile-4">
      <div class="fr-container">
        <button class="fr-link--close fr-link" aria-controls="modal-870">Fermer</button>
        <div class="fr-header__menu-links"></div>
        <nav id="navigation-869" class="fr-nav" role="navigation" aria-label="Menu principal">
          <ul class="fr-nav__list">
            <li class="fr-nav__item">
              <nuxt-link class="fr-nav__link" to="/actualites">Actualités</nuxt-link>
            </li>
            <li class="fr-nav__item">
              <nuxt-link class="fr-nav__link" to="/services">Offres de services</nuxt-link>
            </li>
            <li class="fr-nav__item">
              <nuxt-link class="fr-nav__link" to="/catalogue">Outil pour les collectivités</nuxt-link>
            </li>
            <li class="fr-nav__item">
              <a class="fr-nav__link" href="https://forum.incubateur.anct.gouv.fr" title="Consulter le Forum des Territoires" target="_blank" rel="noopener">Forum</a>
            </li>
            <li class="fr-nav__item">
              <nuxt-link class="fr-nav__link" to="/recrutement">Recrutement</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
