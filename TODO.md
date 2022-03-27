# TODO


##################
2022/02/13
- [ ] CSS
  - [ ] Unify "media" sizes ... (many different values)
  - [ ] Fix IE bugs... LOTS!
  - [ ] Rename/change unrelated variables (eg: "gtt-color" in most uses isn't related to "gtt" - eg in "modal")
- [ ] Navbar
  - [ ] Change order?
  - [x] Add "seacrh" (not in mobile layout)
- [ ] Search
  - [ ] make sure no unused elements left (files, references, styles, etc.)
  - [ ] rename elements still used but not relateo search (eg: 'search-border-cor' (?))
- [ ] "taxo-filter"
  - [ ] could refactor for common code/partial for each filter type
  - [ ] "All"
    - [ ] add specific class ("clean" left/right padding)
    - [ ] add numbers? (total count)
  - [ ] Make i18n entries for "all"+"none" for each filter type? (tags, categories, etc.)
  - [ ] ADAPT CSS to rest of theme!
  - [x] add param to make filter/search optional
    => not a param, but check if "searh" page exist in content
  - [ ] Bug with summary "tiles"
    => Using "hack" to force rearrange, but has issue of tiles not aligning well (if different heights)
    - [ ] Use different lib/js than "pointyfar"
      - [ ] look at "extended" method:
        https://gronskiy.com/posts/filtering-posts-over-multiple-taxonomies-hugo/
      - [ ] Check "Shuffle JS", if static
        https://vestride.github.io/Shuffle/
  - [ ] add disclaimer to "pointyfar" (as long as using his code)
    https://github.com/pointyfar/hugo-tags-filter
- [ ] "recent carousel"
  - [ ] bug? => when resizing, warning message from "cycle":
    [cycle] options not found, "prev/next" ignored


2021/07/18
- [ ] Head - meta
  => infos:
        https://socialdebug.com/tags/open-graph
        https://ogp.me/
        https://css-tricks.com/essential-meta-tags-social-media/
        https://kaydee.net/blog/open-graph-image/
  - [ ] Force "meta_image" in site params (for FB+twitter)
  - [ ] MAKE SURE EVERYTHING IS OK! (no new bugs or missing stuff)
  - [ ] See results once publishing posts on FB/etc, and see what needs to add/adapt
  - [ ] ? - Add "og:locale" + "og:locale:alternate" with "content" determined from config?
  - [ ] ? - image, vide, audio?

  - [ ] og:image
        The URL of the image for your object.
        It should be at least 600×315 pixels, but 1200×630 or larger is preferred (up to 5MB).
        Stay close to a 1.91:1 aspect ratio to avoid cropping.
  - [ ] og:image:alt! => use title or ADD "image_alt" PARAM?
  - [ ] twitter:image
        A URL to a unique image representing the content of the page.
        You should not use a generic image such as your website logo, author photo,
         or other image that spans multiple pages.
        Images for this Card should be at least 280px in width, and at least 150px in height.
        Image must be less than 1MB in size.
  - [] "twitter" + "og" tags?
    => can use "og" for twitter as well, except image should be different
        <meta property="og:title" content="European Travel Destinations">
        <meta property="og:description" content="Offering tour packages for individuals or groups.">
        <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
        <meta property="og:url" content="http://euro-travel-example.com/index.htm">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:image" content="http://euro-travel-example.com/thumbnail_twitter.jpg">
        For a perfect fit, create separate images for the Open Graph image and the Twitter Card image.
        It doesn’t take long to resize an OG image to a Twitter Card image.
        Twitter Card image size should be 1024 pixels by 512 pixels.
    => Check for specific twitter image if exist (=> Add "image_twitter" in page+site params)
  - [ ] twitter:image:alt! => use same as for "og" ("image_alt") (or title)
  - [ ] validate twitter card before publish
    https://twitter.com/login?redirect_after_login=https%3A%2F%2Fcards-dev.twitter.com%2Fvalidator

- [ ] ADD TO README => "Create a site using the theme"
  - Create a new repository for the website
  - Create the new Hugo site
    ```
    hugo new site my_website
    ```
    where 'my_website' is the local directory where the site will be created.
  - Copy and adapt the configuration files
  
  config/_default
    config.toml
      => ... TODO!
    languages.toml
      => define languages
    params.toml
      => ... TODO!
  
    - for each language defined in 'languages.toml':
      menus.en.toml
      => set menus + names
  
  static
    manifest.json
      => For Android support if want to make shortcut/app
    logos
      => Add own logos
      Required:
      - favicon.ico
      - favicon.png
      - logo.png
      Optional:
      - logo.svg
      - Android
        as defined in "manifest.json"
      - Apple
        static/logo/apple-touch-icon.png
      - Windows
        static/logo/ms-icon.png


- [ ] Toc:
  - check/remove data-folding if not used
  - clean css
  - check toc in single page body

##################

## PRIORITIES / CURRENT STATE

* [ ] ADD FR IN i18n!

* [ ] single page
    * [ ] Header
      * [ ] fix text overflow problems (on small display)
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
        * [ ] In mobile, logo should be right side?
      * [ ] ...
    * [ ] make new themes (colours, fonts, etc.)
      * [ ] CHECK CONSISTENCY (all links same colours, deco, page consistent fonts, etc.)
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
    * [ ] In README: list icons (names + code - from '_icon_font.scss')


* [ ] Gallery
    * [x] Add copyright label
        => as in portfolio theme
    * [x] Remove "remote" gallery mode, and in "one-by-one" determine for each image if remote or not
        => combine both
    * [x] Remove gallery mode: if no "images" in front-matter => "at-once"


* [ ] Delete unused icons/svg

* [ ] Sidebars
    * [ ] Add small offset at top of "floating" sidebar (currently aligned to navbar, need a small extra margin)
    * [ ] thumbnail
      * [ ] special class/type? (currently "bio_photo"
    * [ ] TOC in sidebar
        * [ ] fix "offset" bug (current section should be at top of page)
        * [ ] fix bug when post smaller than page, if click on a title the navbar disappear, and can't come back, as no scrolling...
        * [ ] SET CSS/CLASS SIMILAR TO TAGS, etc (shouldn't use "bio" class)
    * [ ] See how to make sidebars code more generic (instead of copied for every type)
    * [ ] See how taxonomies are ordered
        => specified where/how?
    * [ ] Add subscription/newsletter
        => check with notes (probably will use MailChimmp)
    * [ ] Add "chronologic posts view"
        => posts by years and months (like most blogs)

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
  * [ ] Gallery
    * [ ] Add another gallery ("drawings")
        * VN flowers
        * AB (?)
        * "armoured" guy (?)
        * Gorilla on bike
        * gears (?)
        * crazy machines (?)

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
        * [ ] _summary.scss
          => Clean/adapt
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
            * [x] Add specific colors for lists (additionally to 'list-header-title-color', eg: shadow), and use instead of 'term' colors in every list page (also taxo)
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
    * [ ] navbar
        * [ ] site-nav: Set "logo" image as parameter (instead of hardcoded "/logo/logo.png")
    * [ ] sidebar
        * [ ] list
            * [ ] posts-by-order => see how to handle
              * [ ] Need to manually adapt/set order every time new posts?
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
        * [ ] Make partial for "meta" block
          => Used by all summaries (+tiles)
        * [ ] Keep tags? If yes, set as links?
          => Problematic as already inside a link block 'a'
    * [ ] svgs
        * [ ] Rename+change svgs (see what want to keep or change)
* [ ] index
    * [x] Add "recent posts carousel"


## LATER

* [ ] Make specific css type +theme colors for each page type
  => Add other specific params for each page (font, etc)
  * [ ] about, contact, gallery, terms
  * [ ] list (used by list, taxo, galleries)

