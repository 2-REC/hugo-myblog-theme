# hugo-myblog-theme
HUGO theme for blogs.


TODO: complete/rewrite/etc.
- Syntax highlighting (using Chroma)
  - sass/syntax
    (+reference Chroma site? - or indicate in )
    - Only keep minimum, add as desired
        => For each language: scss file + entry in "_syntax.scss"
- Gallery
    - 3 modes: "one-by-one" (or "one"), "remote" and "at-once"
        - one-by-one: "caption" field will be used for each image
        - remote: Can additionally specify online images (by providing URL for "image" field)
        - at-once: The "caption" field will not be used (default)
* Recent posts
    * Added carousel from "Travelify" theme (uses "jQuery.cycle" library)
    * Added parameters for the slides transitions (transition effect, delay and duration)
    * Banner image files:
        * if defined in "data": images are taken from "static" directory
        * for posts, image is in the post resources (need a page bundle)
* Header
  * Example in "archetypes/header.md"
  * Types:
    * Single: Single header
    * Multi: Slides
    * Custom: Defined in "custom-header.html"
    * None: No entry in "params" => No header
  * Slides:
    * When "multi", uses "Cycle" library for slideshow
      ! - Removed "swipe" feature as in Zzo
    * Slider settings specified in "options" field
  * Image: Optional
  * Titles + Subtitles
    * Align:
      * Horizontal: left|center|right
      * Vertical: top|center|bottom
    * Padding:
      * Horizontal and vertical for "title block" in each slide
        => According to alignments
      * Vertical for each title (top+bottom)
      * Vertical for each subtitle (top+bottom)
      * Vertical between title and subtitle blocks
    * Units: '%' or 'px'
      ! - Except for header 'height', must be 'px'
      * Must be specified
        * No unit => error
        * Except if '0'
    * Color:
      * RGB or RGBA format
      * Default:
        * Title: "terms-title-color"
        * Subtitle: "terms-title-shadow-color"


## Changed Features from original Zzo Theme
* General
    * Icons
        * Use of an 'icon-font' for icons in text (additionally to SVG tags)
* Themes
    * More dynamic theme management.
        For each theme:
        - Add entry+infos in "data/theme.toml" (name, chroma, chroma_background, primary_color)
        - Add scss files ("themes/name.scss" + "themes/chroma_background.scss" + "syntax/chroma.scss")
    * Default case for 'theme' if current value in local storage is not valid
        => Remove 'theme' from localStorage if value is not in list of themes (in 'data/theme.toml').
* Sidebar
    * Added taxonomy specific sidebar (different from "list")
    * Content of each sidebar (home, single, list, taxonomy) defined by list (in "params")
    * Special "-" separator to specify start of "floating" section
    * Possibility to have left and right sidebars (as well as both or none)
* Summary Tiles
    * Added possibility to have an image, using tiles as in gallery, with CSS similar to "Creative Protfolio" theme
* Gallery + Summary tiles + Recent posts
    * Added "zooming" when hovering the images
    * Fixed sizing issues (20% seems buggy, +use of "match"+"unmatch" doesn't work well when quick resize, +no init trigger on page onload)
    * Image files need to be located in the post directory (eg: "content\en\gallery\photos") instead of in "static" directory
* Header
  * Changed "swiper" to "slider" (uses "jQuery.cycle" library)
  * Added more alignment possibilities
  * Removed "typewriter" type
* Share options
  * Separate partial for each platform, so can easily add new ones without modifying the code
    => To add a new platform
    * Add a [[share]] entry in "params" file, with the following fields:
      * name: name of the share platform
      * color: color code for the icon when hovered
      * additional required parameters (if any used in the "share" partial)
      Example:
        [[share]]
          name = "facebook"
          color = "#1877F2"
    * Add a partial in "layouts/partials/share" with the same name as in "params" (should be based on an existing one)
    * Add a partial in "layouts/partials/svgs/share" if referenced in the "share" partial
  * Included platforms: facebook,twitter, reddit, linkedin, tumblr, weibo, douban, line, whatsapp, telegram


## Removed Features from original Zzo Theme

* All themes but "light" & "dark"
* Search feature
* Swipe
  - Removed swipe shortcodes "swiper" and "swiperItem"
  - Removed swipe from header (using slider from "jQuery.cycle" library)
* Busuanzi site counter
* Baidu Analytics
* Publications


(TODO: keep this here? => too general, should be in tips blog...)
# Info
    * Post main image for social networks:
        Reconciling the guidelines for the image is simple:
        Follow Facebook’s recommendation of a minimum dimension of 1200×630 pixels and an aspect ratio of 1.91:1, but adhere to Twitter’s file size requirement of less than 1MB.
    * Adapt static/manifest.json + icons stuff in head/meta


## NEW SITE

Check list when making a new site using the theme.

* [ ] archetypes
    * [ ] Override desired archetypes
    * [ ] Add new archetypes

* [ ] config/_default
    * [ ] config.toml : Global site settings
        * [ ] Adapt values
    * [ ] languages.toml : Define site languages
        => Should have at least 1
    * [ ] menus.en.toml : Nav bar entries
        => 1 file per language
        * [ ] Adapt entries (+order)
    * [ ] params.toml : Site parameters
        * [ ] Adapt values (remove unused)

* [ ] content
    => Divided per language if needed (1 sub directory per language)
    * [ ] _index.md: Homepage header definition
        * [ ] Adapt: images, texts, style, layout, etc.
            => Resources must be located in "static" directory (or sub directories)
    * [ ] about:
        * [ ] Adapt index.md
        * [ ] Add content (images, etc.)
    * [ ] contact:
        * [ ] Adapt index.md
            => Choose a form (or "none")
        * [ ] Add content (images, etc.)
    TODO: continue...
    * [ ] posts:
        * [ ] Adapt _index.md
        * [ ] Add content...

* [ ] static
    => Resources used globally by the website: images, icons, fonts, etc.
    * [ ] manifest.json : Info for PWA
        * [ ] Adapt content (images referred from "static" directory)
    * [ ] logo : Favicon and logo images
        !TODO: Location defined in code ("head/meta" and "navbar/site-nav"), should be changed to be a site parameter
        * [ ] Add desired icons and logo images
            => See about different sizes, density, etc. (see Zzo original theme)
    TODO: continue...


Additionnally, can adapt style+layouts in SCSS files:
...
* assets/sass
    * pages
        => Most pages, except "_wrapper"?
        * [ ] _about
        * [ ] _single
        * [ ] _terms: generic titles, links, tags, etc.



## DISCLAIMER
* Hugo (+developer)
* Zzo Theme (+developer)
* Creative Protfolio Theme (+developer)
    https://themes.gohugo.io/hugo-creative-portfolio-theme
* jQuery Cycle Plugin (+developer)
    http://jquery.malsup.com/cycle/
* others?

