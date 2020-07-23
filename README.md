# Webpack Configuration

This is my personal webpack v4 configuration, that I am using for small static projects.

## Contains some neat stuff out of the box!

- jQuery
- Bootstrap with Popper.js

## What does this configuration handles?

#### Common for development & production environment

- it accepts two entry points; one for the app and one for the vendor
- it compiles sass/scss to the css file
- it compiles es6 to the syntax that every browser can understand
- it contains latest Boostrap, but with entirely modular setup; you may include only the parts that you need, as you probably won't use 70% of the framework

#### Development environment

- it runs webpack-dev-server with browser-sync support

#### Production environment

- it minifies js
  <!-- - it minifies multiple image types (gif, png, jpg, jpeg, svg) -->
  <!-- - it copies all web fonts -->
  <!-- - it minifies all json files from data directory -->
  <!-- - it has subresource-integrity -->
  <!-- - it does not build source-maps, but you may specify it on line 216 if you want them -->

## Commands?

npm strat – to start with development
npm run build - to make it ready for production use
