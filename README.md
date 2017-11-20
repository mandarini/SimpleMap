# Simplemap

## Description
A very very simple and stripped down integration of the [Google Maps JS API](https://developers.google.com/maps/documentation/javascript/) and Angular.

## Why do we need this?

1. Maybe you don't want to install a new library to your project. You already know how to use the Google Maps JS API and you don't want to learn a new tool to do things you already know how to do.

2. The Google Maps JS API has an extended guide, reference, and samples, which should cover any use case. So, why use a library that wraps these (or some of these and not all)?

3. It's just a small script! :)

## Why won't just adding the `<script>` from the GMJSAPI in my `<head>` won't work?

Because, when the script is loaded, it tries to call a global function named "initMap". Since this function is not defined globally anywhere, it throws an error.
What we do here, is we call the script after we have defined an initMap function and added it to the window object. This way, we are sure than when it is called, it is defined. One more thing we are certain about, in this case, is that when we try to load the map, calling the google object, it will be defined, too. It is just a simpler and more secure way of integrating the Google Maps JS API in your Angular application.

_Disclaimer: This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0._
_Thanks: Thanks to [kavaliev](https://github.com/kamaliev/google-maps-angular2) because I used a part of a script from their library and for providing me with inspiration_
