# TODO

## PRIORITIES / CURRENT STATE

* [ ]Make specific csss type +theme colors for each page title?
  * [ ] about
  * [ ] contact
  * [ ] galleries (+each gallery)
  * [ ] terms (already there)
  => use a generic "list"?
  ! - IF NOT, UNIFORMISE ALL TITLES!

* [ ] List pages (list+taxo)
    * [ ] summary
      * [ ] meta infos
        * [x] classic
        * [x] tiles!
        * [x] card
        * [x] compact
      * [ ] css + hover, etc
        * [ ] classic
          * [x] adapt
          * [ ] clean
        * [ ] tiles
          * [x] adapt
          * [ ] clean
        * [ ] card
          * [x] adapt
          * [ ] clean
        * [ ] compact
          * [ ] adapt
            * [ ] keep tags? If yes, set as links?
          * [ ] clean
      * [ ] clean/adapt "summary.scss"
* [ ] single page
    * [ ] set sections as optional
      * [ ] donations
      * [ ] share
      * [ ] ... (?)
    * [ ] Add infos as in Zzo (author, tags, etc)
      * [x] date
      * [x] modified
      * [x] reading time
      * [x] author
      * [x] tags (in new line)
      * [ ] add additional info (categories, series, etc?)
        => optionals?
        * [ ] categories (in new line!)
        * [ ] series (in new line!)
    * [x] Make each info optional (?)
      => Or only "all" or "nothing"?
    * [ ] Use icons in "single infos"
      * [x] "calendar"
      * [x] "modified"
      * [x] "clock"
      * [x] "views"
      * [x] "tags"
      * [ ] others?
* [x] Add icons to font-icon
  * [x] "calendar"
  * [x] "modified"
  * [x] "clock"
  * [x] "views"
* [ ] Allow colour icons?
  => Need to use svg instead of font-icon (?)


* [ ] README
    * [ ] don't detail things in "changed features"
      * [ ] list changes
      * [ ] detail new/changed features 1-by-1
    * [ ] complete details/infos
    * [ ] as ZZO, with table of contents

* [ ] Global
    * [ ] FIX "RTL" LAYOUTS!
      * [ ] navbar (lg selector+dropdown, etc)
      * [ ] ...
    * [ ] make new themes (colours, fonts, etc.)
    * [ ] add French content (posts, data, etc)
    * [ ] test/check everything

* [ ] Header
    * [ ] Coloured titles: Handle shadow colours
      => should get 'opposite' of object
    * [ ] Check if "archetypes\header.md" is used/required
      => Delete? (or keep as example?)
    * [ ] Switch to Cycle2
        http://jquery.malsup.com/cycle2/
    * [ ] Change css/colours

* [ ] Replace images
    * [ ] Header images
    * [ ] Posts images (images related to posts)
    * [ ] "Carousel" images

* [ ] Slides: Recent posts / Carousel
    * [ ] Switch to Cycle2
        http://jquery.malsup.com/cycle2/
    * [ ] Clean CSS (as well as for tiles)
    * [ ] Add arrows on the sides
        => See if can be done easily

* [ ] Tiles
    * [ ] Clean CSS

* [ ] font-icons
    * [ ] Redo all icons myself (SVG using Inkscape)
    * [ ] Generate font with Fontello
    * [ ] Make sure every icon is correct (eg problem with 'link' from font awesome)
    * [ ] 'Sync' svgs and font (have same icons available in both) (look at every icon used)


* [ ] Gallery
    * [ ] Add copyright label?
        => as in portfolio theme
    * [ ] Add another gallery ("drawings")
        * VN flowers
        * AB (?)
        * "armoured" guy (?)
        * Gorilla on bike
        * gears (?)
        * crazy machines (?)


* [ ] Delete unused icons/svg

* [ ] Sidebars
    * [ ] TOC in sidebar
        * [ ] SET CSS/CLASS SIMILAR TO TAGS, etc (shouldn't use "bio" class)
    * [ ] See how to make sidebars code more generic (instead of copied for every type)
    * [ ] See how taxonomies are ordered
        => specified where/how?
    * [ ] Add subscription/newsletter
        => check with notes (probably will use MailChimmp)

* [ ] busuanzi
    => Keep? (as now: not enabled, but code still present)


* [ ] Donation options
    * [ ] Move to sidebar (any)
    * [ ] Remove from "single" body
    * [ ] Add in "contact" page body
    * [ ] Mention changes in README

* [ ] Share options
    * [ ] check for each if provided info is enough
    * [ ] add details on use in each partial ... (list params)
    * [ ] douban
        * [ ] check if ok => seems weird (blocked)
    * [ ] weibo
        * [ ] check if ok => seems weird (blocked)
    * [ ] Tumblr
        * [ ] limit "summary" length!
            => how long?
    * [ ] Twitter
        * [ ] limit "summary" length!
            => how long?
    * [ ] Whatsapp
        * [ ] find better icon (good size)
    * [ ] Add option to "gallery" pages?
        => Possible?
    * [ ] TEST EACH PLATFORM!

* [ ] i18n
    * [ ] complete/clean
    * [ ] add other language(s)
        * [ ] French

* [ ] "Archives" page (?)
* [ ] "single"
    * [ ] Body
        * [ ] Add "share" options
        * [ ] Add "whoami" at bottom of page (NOT bio!)
            * [ ] Only show when in "mobile" mode?
        * [ ] Add navigation (prev+next links) at bottom
    * [ ] Sidebar
        * [ ] bio
            * [ ] smaller padding?
        * [ ] add "whoami" (in addition to "bio")
            * [ ] Only in "single" sidebar
            * [ ] Rename it to "author"?
        * [ ] donation?
        * [ ] subscribe?
        * [ ] +more?
    * [ ] ...

* [ ] Update to latest Zzo sources
    * [x] typewriter header? => NO
    * [ ] pinned posts
    * [ ] min nb tags?
    * [ ] utterances?
    * [ ] ...


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
    * [ ] taxonomies => Change "series" to "types"
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
        * [ ] themes
            ? => Add specific colors for lists (additionally to 'list-header-title-color', eg: shadow), and use instead of 'term' colors in every list page (also taxo)
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


