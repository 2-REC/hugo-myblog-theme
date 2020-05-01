# TODO

## EXAMPLE SITE

### config
* [ ] config.toml
    => Adapt...
* [ ] menus.en.toml
    * [ ] Adapt entries (+order)
* [ ] params.toml
    * [ ] notAllowedTypesInHomeFeed
        => Adapt to page/posts types


### content
* [ ] _index.md => Adapt for basic header example (images, fonts, etc.)
* [ ] about
    * [ ] index.md: Set some content
* [ ] contact
    * [ ] index.md: Set some content

### static
* [ ] Change images (make basic simple examples)
* [ ] Change logos/icons (make basic simple examples)


## THEME

### General
* [ ] Change taxonomies "series" to "type"
* [ ] Rename "light" colour theme to more appropriate
    * [ ] Add other themes?

LATER:
* [ ] CSS => Make "custom CSS" as in "myportfolio-theme" => Instead of having to modify the code


### Archetypes
* [ ] header => Make sure it isn't needed


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
    * [ ] pages
        * [ ] _terms.scss
            => Adapt (titles, links, tags, etc.)
    * [ ] syntax
        => want/need?


### data
* [ ] font.toml
    * [ ] Set desired fonts => Remove as much as possible
    * [ ] Move to exampleSite!
        * [ ] Determine their use (set as site parameters?)


### layouts
* [ ] partials
    * [ ] contact
        * [ ] Add a "netlifyform.html"?
            => Look at: https://brianli.com/how-to-create-a-contact-form-in-hugo-with-netlify-forms/
    * [ ] body
        * [ ] baseof: Purpose? => Same file as in "_default" (can ignore/delete?)
    * [ ] head
        * [ ] meta: Set "logo" location as parameter (instead of hardcoded "/logo/...")
    * [ ] navbar
        * [ ] site-nav: Set "logo" image as parameter (instead of hardcoded "/logo/logo.png")
    * [ ] sidebar
        * [ ] sidebar-menu => Empty!?
    * [ ] script
        => See what to keep (and remove uses in code)
        * [ ] about-script.html (empty)
        * [ ] contact-script.html (empty)
    * [ ] social
        * [ ] See what to keep... (+associated in "params.toml")
        * [ ] See if want to change icons
    * [ ] svgs
        * [ ] Rename+change svgs (see what want to keep or change)


