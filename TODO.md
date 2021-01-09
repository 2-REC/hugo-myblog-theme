# TODO

## PRIORITIES / CURRENT STATE


* [ ] Header
    * [ ] Colored titles: Handle shadow colors => should get 'opposite' of object
    * [ ] Adapt css/colors
    * [ ] Check if "archetypes\header.md" is used/required
      => Delete? (or keep as example?)
    * [ ] ! - Switch to Cycle2?
        http://jquery.malsup.com/cycle2/

* [ ] Replace images
    * [ ] Header images
    * [ ] posts images (images related to posts)
    * [ ] "carousel" images

* [ ] Slides: Recent posts / Carousel
    * [x] Adapt "data slides" to be as other slides (html+css)
    * [x] Carousel from "Travelify" theme
    * [x] Add "transition effect" as param (+delay and duration)
    * [ ] ! - Switch to Cycle2?
        http://jquery.malsup.com/cycle2/
    * [ ] Clean CSS (as well as for tiles)
    * [x] Remove jQuery "migrate"?
    * [ ] Add arrows on the sides
        => See if can be done easily
    * [ ] Test everything
        * [x] Test "data" stuff
        * [x] Test "manual" stuff
        * [ ] ...

* [ ] Tiles
    * [x] Fix problem of text underlined when hover
        => Only want title
    * [x] Use the "description" field instead of putting the text
    * [ ] Clean CSS
* [x] Tiles + Slides (summary, gallery, carousel)
    * [x] Zoom image when hover


* [ ] Theme + language selectors
    * [x] add navbar selector
    * [x] adapt CSS
    * [x] change icons
    * [x] delete footer:select-lang.html" + related data (calls to partial + css in footer)
    * [ ] check everything is ok!
    * [ ] add French content (posts, data, etc)

* [ ] font-icons
    * [ ] Redo all icons myself (SVG using Inkscape)
    * [ ] Generate font with Fontello
    * [ ] Make sure every icon is correct (eg problem with 'link' from font awesome)
    * [ ] 'Sync' svgs and font (have same icons available in both) (look at every icon used)


* [ ] "swipe"
    * [x] swipe.js
        - assets\js\swipe.js
        - assets\js\swipehome.js
        => Merge and use only 1 version
    * [x] Keep "header swipe" or replace with carousel?
        => Replaced by Cycle (carousel without interactions)


* [ ] Gallery
    * [x] Get gallery images to post folder instead of "static"
    * [ ] Add copyright label (as in portfolio theme)?
    * [x] Change photos => use mine
    * [ ] Add another one ("drawings")
        * VN flowers
        * AB (?)
        * "armoured" guy (?)
        * Gorilla on bike
        * gears (?)
        * crazy machines (?)


* [x] Remove "data/lib.toml"
    => Not using any lib

* [ ] Themes:
    * [x] Switch in navbar only if more than 1 entry
    * [ ] CHECK EVERYTHING IS OK!


* [ ] set codeblock-script optional in single-script
  => config param
* [ ] implement/finish "summary" stuff

* [ ] Sidebars
    * [ ] TOC in sidebar
        * [ ] SET CSS/CLASS SIMILAR TO TAGS, etc (shouldn't use "bio" class)
    * [x] Set individual components
        => Adapt/create each partial, +handle specific parameters
    * [ ] See how to make sidebars code more generic (instead of copied for every type)
    * [ ] See how taxonomies are ordered
        => specified where/how?
    * [ ] Add subscription/newsletter
        => check with notes (probably will use MailChimmp)

* [x] main-left + main_right
    => Allow side panels, eg adverts or images
    * [x] Replace 'enableSidebarMenu' with 'enableSideDataLeft' & 'enableSideDataRight'
    * [x] Replace 'sidebar/sidebar-menu' with 'body/sidedata-left' & 'body/sidedata-right'


* [ ] busuanzi
    => Keep? (as now: not enabled, but code still present)

* [ ] "Archives" page (?)
* [ ] Finish taxonomies
* [ ] "single"
    * [ ] Body
        * [ ] Add "share" options
            => called "donation" in Zzo (?)
        * [ ] Add "whoami" at bottom of page (NOT bio!)
            * [ ] Only show when in "mobile" mode?
        * [ ] Add navigation (prev+next links) at bottom
    * [ ] Sidebar
        * [ ] replace "bio" with "whoami"
        * [ ] donation?
        * [ ] subscribe?
        * [ ] +more?
    * [x] See about "inner", "outer" for sidebar stuff... (nice to have, but a bit buggy)
        => Don't keep (replaced with 'sidedata')
    * [ ] ...

* [ ] Update to latest Zzo sources
    * [x] typewriter header? => NO
    * [ ] pinned posts
    * [ ] min nb tags?
    * [ ] utterances?
    * [ ] ...


* [ ] README
    * [ ] complete details/infos
    * [ ] as ZZO, with table of contents

* [ ] themes.toml
    => update when theme finished (as ZZO)



########################
(TODO: continue/update!)

## EXAMPLE SITE

### config
* [ ] config.toml
    => Adapt...
    * [ ] outputs
        => Use/purpose? (remove "SearchIndex")
    * [ ] taxonomies => Change "series" to "types"?
* [ ] menus.en.toml
    * [ ] Adapt entries (+order)
* [ ] params.toml
    * [ ] notAllowedTypesInHome, notAllowedTypesInHomeSidebar, etc.
        => Should instead have "allowedTypesInHome", "allowedTypesInHomeSidebar", etc.
    * [ ] notAllowedTypesInHomeFeed
        => Adapt to page/posts types
    * [ ] enableHomeSidebarTitles
        => Should change name? (to "enableHomeSidebarPosts"?)

### content
* [ ] _index.md => Adapt for basic header example (images, fonts, etc.)
* [ ] about
    * [ ] index.md: Set some content
* [ ] contact
    * [ ] index.md: Set some content
* [ ] posts
    * [ ] _index.md: adapt (?)

### static
* [ ] Change images (make basic simple examples)
* [ ] Change logos/icons (make basic simple examples)


## THEME

### General
* [ ] Change taxonomies "series" to "type" (?)
* [ ] Rename "light" colour theme to more appropriate
    * [ ] Add other themes?
* [ ] Overflow
    * [ ] _sidebar.scss
        => See if want "overflow-wrap: break-word" (long words)
    * [ ] _taxo.scss
        => See if want "overflow-wrap: anywhere" (long keywords)
    * [ ] _bio.scss
        => See if want "overflow-wrap: break-word" (long name)


LATER:
* [ ] CSS => Make "custom CSS" as in "myportfolio-theme" => Instead of having to modify the code


### Archetypes
* [ ] header => Make sure it isn't needed


### assets
* [ ] Check CSS + fonts for every component/page
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
            * [ ] change? keep all?
            * [ ] keep "-main" and "-side" stuff? => CHECK IF USED! (header, footer, nav, ...)
        * [ ] _grid.scss
            * [ ] keep "-main" and "-side" stuff? => CHECK IF USED! (header, footer, nav, ...)
        * [ ] _hr.scss
          => change? keep all?
        * [ ] _taxonomy.scss
            * [ ] Adapt
            * [ ] Keep all?
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
* [ ] _default
    * [ ] single
        * [ ] "single-script"
            => Make sure everything is ok
        * [ ] nojs
            => Make nicer CSS (?)
        * [ ] meta
            * [ ] body/infos
            * [ ] body/tags
            * [ ] add more? share?
        * [ ] Content, other partials
            * [x] "script/codeblock-script"
            * [ ] "body/share"
                => Here, or in meta?
            * [ ] "body/donation"
                => Here or in sidebar?
            * [ ] "body/whoami"
                => Here or only in sidebar?
            * [ ] "body/related"
            * [ ] "pagination/pagination-single"
            * [ ] "comments/comments.html"
            * [x] "body/photoswipe"
    * [ ] taxonomy
        * [ ] continue as in Zzo!
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
        * [ ] list
            * [ ] posts-by-order => how does it work? (seems broken?)
        * [ ] sidebar-menu => Empty!?
    * [ ] script
        => See what to keep (and remove uses in code)
        * [ ] about-script.html (empty)
        * [ ] contact-script.html (empty)
        * [ ] list-script.html (empty)
        * [ ] single-script.html => PROBABLY NEEDED! (TO BE ADDED)
        * [ ] taxo-script.html (empty)
    * [ ] social
        * [ ] See what to keep... (+associated in "params.toml")
        * [ ] See if want to change icons
    * [ ] summary
        * [ ] card: TODO!
        * [ ] classic: TODO!
        * [ ] compact: TODO!
    * [ ] svgs
        * [ ] Rename+change svgs (see what want to keep or change)
* [ ] index
    * [x] Add "recent posts carousel"


