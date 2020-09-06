# TODO

## PRIORITIES / CURRENT STATE

* [x] Remove "publication" stuff
    => Check notes (photo on phone)
    * [x] Reveal lib + use
    * [x] Presentation pages, etc

X
* [x] Add "swipe" stuff
    => REMOVE/REPLACE!

!!!!
* [x] Gallery: fix bad resizing
* [ ] Swiper
    => Replace with swipe from "Resto Hugo" theme!
    - partials/testimonial.html
        => can be used for "recent posts"
    - see if can easily adapt to shortcode
(
X    * [ ] See if keep or replace (with a carousel or similar from other theme)
        Related files:
        - swiper.html + swiperItem.html
        Used in:
            - shortcodes.md
                => Remove "swiper" stuff
        Using:
            - swiper.min.css
                => Can be deleted
            - swiper.min.js
                => Can be deleted
            - _swiper.scss
                !- also defines "swipe" class!
                    => Only remove "swiper" stuff
    * [ ] See if can merge swiper used in "photoswipe" and "header-slide"
        => Using 2 different versions of "swiper.js"
    * [ ] Allow more than 1 swipe per page
        => Problem related to div ID: same for all (?)
)
* [ ] Gallery
    * [ ] Change photos => use mine
    * [ ] Add another one ("drawings")
!!!!


* [x] Remove "data/lib.toml"
    => Not using any lib

* [ ] Themes:
    * [ ] CHECK EVERYTHIN IS OK!
    * [x] Switch in navbar only if more than 1 entry


* [ ] set codeblock-script optional in single-script
  => config param
* [ ] implement/finish "summary" stuff
* [ ] make sure "archetypes/header" is only as example

* [ ] Sidebars
    * [ ] TOC in sidebar
        => SET CSS/CLASS SIMILAR TO TAGS, etc (shouldn't use "bio" class)
    * [ ] Set individual components
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
* [ ] Continue "single" layout
    * [ ] Sidebar
        * [ ] donation?
        * [ ] subscribe?
        * [ ] +more?
    * [x] See about "inner", "outer" for sidebar stuff... (nice to have, but a bit buggy)
        => Don't keep (replaced with 'sidedata')
    * [ ] ...


* [ ] README
    * [ ] complete details/infos
    * [ ] as ZZO, with table of contents

* [ ] themes.toml
    => update when theme finished (as ZZO)


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
    * [ ] Add "recent posts carousel"


