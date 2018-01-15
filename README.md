# Simplemap

## Description
A very very simple and stripped down integration of the [Google Maps JS API](https://developers.google.com/maps/documentation/javascript/) and Angular.

## How to?

1. Create a gmap service and add the code provided in src/app/gmap.service.ts
2. Import it in your component
3. Define it in your constructor
4. Create a `<div>` in your DOM with an `id` of your preference. We will put our map in that `<div>`.
5. Style your div, so that it has a specific height and width. The height and width can be given in pixels, in viewport height/width units (`vh`, `vw`), etc, but __NOT__ in percentage (`%`) for both width and height.
6. You want to load your map after your view has been created, because you will be trying to access DOM elements (our div!). So, you will need to be implementing [AfterViewInit](https://angular.io/guide/lifecycle-hooks#afterview).
7. Ready to go! See it [live](https://mandarini.github.io/SimpleMap/)

## Why do we need this?

1. Maybe you don't want to install a new library to your project. You already know how to use the Google Maps JS API and you don't want to learn a new tool to do things you already know how to do.

2. The Google Maps JS API has an extended guide, reference, and samples, which should cover any use case. So, why use a library that wraps these (or some of these and not all)?

3. It's just a small script! :)

## Why won't just adding the `<script>` from the GMJSAPI in my `<head>` won't work?

Because it is loaded asynchronously, and we don't know when it the maps object is loaded.

What we do here, is we add the script within the head tag and we add an event listener to it.
Once the script is loaded, we call the window.google.maps object! :)

Essentially, we create a function that loads the script. In that function, we pass a callback function that will be
called when the script is indeed loaded. Once the script is loaded, we can use the google maps object.

You can use this method to add any kind of scripts that add objects to the window asynchronously, eg. google analytics.

It is just a simpler and more secure way of integrating the Google Maps JS API in your Angular application.

_Disclaimer: This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0._
