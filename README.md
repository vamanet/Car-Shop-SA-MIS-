# Car Shop SA

A car dealership / rental showcase, built with **Vue 3 + Vite** and Bootstrap 5.

This was originally a set of static HTML pages; it has been rebuilt as a single-page
application with reusable components, a data layer, and client-side routing. The old
static site is kept under [`legacy/`](legacy/) for reference.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Project structure

```
public/Image/          Car photos and banners (served at /Image/...)
src/
  main.js              App entry — mounts Vue, loads Bootstrap
  App.vue              Root layout (NavBar + routed view)
  router/index.js      Vue Router routes
  data/cars.js         Car lists, nav links, categories (single source of truth)
  components/
    NavBar.vue         Shared top navigation + categories dropdown
    HeroCarousel.vue   Reusable Bootstrap carousel (takes an images array)
    CarCard.vue        Bootstrap showcase card
    RentalCard.vue     GTR catalogue rental card
  views/
    HomeView.vue       Home — banner carousel + Ford showcase cards
    GtrView.vue        Supercar rental catalogue (with sort filters)
    FordView.vue       Ford brand page
    PickupView.vue     Pickup trucks
    CategoryView.vue   Categories
legacy/                Original static HTML/CSS site (reference only)
```

## Notes

- The 30+ copy-pasted car cards from the old `gtr.html` are now a single `v-for`
  over `rentalCars` in `src/data/cars.js` — edit the data, not the markup.
- Images live in `public/Image/`, so existing `/Image/...` paths keep working.
