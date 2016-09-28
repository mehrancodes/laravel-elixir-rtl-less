# laravel-elixir-rtl-less
[![npm version](https://badge.fury.io/js/laravel-elixir-rtl-less.svg)](https://badge.fury.io/js/laravel-elixir-rtl-less)

This is a tiny wrapper combined of rtlcss and less for Laravel Elixir 6

This extension works exactly like [less extension](https://laravel.com/docs/5.3/elixir#less) except that it uses [RTLCSS](http://rtlcss.com/) Framework for converting your compiled less from `LTR` to `RTL`

# Usage

## Step 1: Install

```
npm install laravel-elixir-rtl-less
```

## Step 2: Require

Within your main `Gulpfile`, add:

```js
var elixir = require('laravel-elixir');

require('laravel-elixir-rtl-less');

elixir(function(mix) {
    mix.rtlless('app.less');
});
```

## Step 3. Build Amazing Things

You're done. :)
