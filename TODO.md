# TODO

## EXAMPLE SITE
* config
    * [ ] config.toml
        => Adapt...
    * [ ] menus.en.toml
        * [ ] Add more entries?
    * [ ] params.toml
        * [ ] notAllowedTypesInHomeFeed
            => Adapt to page/posts types


## THEME

### General
* [ ] Change taxonomies "series" to "type"
* [ ] Rename "light" colour theme to more appropriate
    * [ ] Add other themes?

    * [ ] MOVE/ADD TO README!
        * Removed Features
            * All themes but "light"
            * Search feature
            * Busuanzi site counter
            * Baidu Analytics
        * Info
            * Post main image for social networks:
                Reconciling the guidelines for the image is simple:
                Follow Facebook’s recommendation of a minimum dimension of 1200×630 pixels and an aspect ratio of 1.91:1, but adhere to Twitter’s file size requirement of less than 1MB.
            * Adapt static/manifest.json + icons stuff in head/meta


### Archetypes
TODO


### assets
* [x] FIX CSS+FONTS ISSUES!
* [ ] Adapt CSS

* [ ] sass
    * [ ] Check what to keep + adapt
    * [ ] abstracts
        * [ ] See what to keep/adapt
        * [ ] _variables.scss
            * [ ] $z-indexes
                => keep all?
    * [ ] base
        * [ ] _fonts.scss => See what to keep/adapt (+relate font files in "static/fonts")
            * [ ] Should be moved to site (?)
    * [ ] components
        * [ ] See what to keep/adapt
        * [ ] _ie.scss
          => change? remove things?
    * [ ] layout
        * [ ] footer
            => see what keep depending on layout...
        * [ ] grid
            => check if need to adapt
    * [ ] syntax
        => want/need?

### data
* [ ] font.toml
    * [ ] Set desired fonts
    * [ ] Move to exampleSite?


### static
* [ ] Change images! (make basic simple examples)
* [ ] Move images to example site?
    * [ ] Logos?


### layouts
* [ ] partials
    * [ ] navbar
        * [ ] site-nav: Set "logo" image as parameter (instead of hardcoded "/logo/logo.png")
    * [ ] sidebar
        * [ ] sidebar-menu => Empty!?
    * [ ] social
        * [ ] See what to keep... (+associated in "params.toml")
        * [ ] See if want to change icons
    * [ ] svgs
        * [ ] Rename+change svgs (see what want to keep or change)
