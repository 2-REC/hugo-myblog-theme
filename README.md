# hugo-myblog-theme
HUGO theme for blogs.


## Using Theme

Instructions to build a new site using the "MyBlog" Hugo theme.


! - Could use Hugo command "hugo new site" to create the new site, but the structure of this theme being different (e.g. "config"), it is easier to create it namnually.


More details about the steps to do are provided in the "Checklist" section below.


Main steps:

* Create new directory to contain the new site

* Copy theme (git clone)
  => To "themes/myblog"

* Copy directories from "exampleSite":
  * config
  * data

* Create empty directory "content"

* Edit config file "config\_default\config.toml":
  * Set theme "myblog"
  * Set site name

* ...

TODO:
- add logos (+favicon)
- add avatar image (?)
- adapt params



### Checklist

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


----

(TODO: move rest to other file?)

TODO: complete/rewrite/etc.
- Navbar
  - Allow to use icon instead of text, if setting "icon-..." for "name" field
- Syntax highlighting (using Chroma)
  - sass/syntax
    (+reference Chroma site? - or indicate in )
    - Only keep minimum, add as desired
        => For each language: scss file + entry in "_syntax.scss"
- Gallery
    * Removed modes ("one-by-one", "remote" and "at-once")
    * If "images" in front-matter: equivalent to "one-by-one" mode
      * "image", "caption" and "copyright" (if present) fields will be used for each image
      * If "image" starts with "http", the image will be considered as remote (online image)
    * If no "images" in front-matter: equivalent to "at-once" mode
      * Images obtained from "images" subdirectory
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
        * Title: "header-title-color-default"
        * Subtitle: "header-subtitle-color-default"
  * Single
    * Header
      * Added header in single page with optional title and description (similar working than main header 'single' type)
        TODO: detail more...

* Taxonomies
  * Search
    * Added page to search/filter posts on specific fields (tags, categories, author, etc.).
      The code is using:
        https://github.com/pointyfar/hugo-tags-filter
        Modified version:
        https://github.com/2-REC-forks/hugo-tags-filter
        (TODO: add more details/info)
    * Optional (disabled if no "search" page found in site content)
    * Possibility to switch AND/OR results
      (TODO: add more details...)

* Footer
  * Copyright
    * If 'copyright' defined in site config
    * Params 'copyrightOptions'
      * 'copyrightLink': Allow copyright owner to be a link. If not defined: no link
      * 'copyrightOwner': Owner of the copyright. If not defined: 'myname' param is used instead
      * 'copyrightStartYear': Allow range for copyright period. If not defined: only current year
      * Removed copyright image

* Images
  * Field "copyright" to add a small label in bottom right of image mentioning the copyright
    * Header
    * Slider/carousel
    * Gallery: Per image or global
  * Idem with field "caption", added at left of copyright (if any)



## Changed Features from original Zzo Theme
* General
  * Icons
    * Use of an 'icon-font' for icons in text (additionally to SVG tags)
      TODO: list icons (names + code - from '_icon_font.scss')
* Themes
  * More dynamic theme management.
    For each theme:
    - Add entry+infos in "data/theme.toml" (name, chroma, chroma_background, primary_color)
    - Add scss files ("themes/name.scss" + "themes/chroma_background.scss" + "syntax/chroma.scss")
  * Default case for 'theme' if current value in local storage is not valid
    => Remove 'theme' from localStorage if value is not in list of themes (in 'data/theme.toml').
* Sidebar
  * Added taxonomy specific sidebar (different from "list")
    * For "single" pages, can specify if want all taxonomy terms, or only those in page (all by default)
      => In "params":
        singleTaxonomies = true
  * Content of each sidebar (home, single, list, taxonomy) defined by list (in "params")
  * Special "-" separator to specify start of "floating" section
  * Possibility to have left and right sidebars (as well as both or none)
  * Changed "inner" and "outer" by using "sidedata" for left/right sidebars
  * Added "thumbnail" for "single" page sidebar
* Summary
  * Optional metadata block
  * Optional meta fields
    * Edit
    * Reading time
    * Tags
* Summary Tiles
  * Added possibility to have an image, using tiles as in gallery, with CSS similar to "Creative Protfolio" theme
* Gallery + Summary tiles + Recent posts
  * Added "zooming" when hovering the images
  * Fixed sizing issues (20% seems buggy, +use of "match"+"unmatch" doesn't work well when quick resize, +no init trigger on page onload)
  * Image files need to be located in the post directory (eg: "content\en\gallery\photos") instead of in "static" directory
* Photoswipe (galleries and posts images)
  * View not closing when swiping outside of an image
  * View closing when clicking (even if on image - TODO: should fix that?)
  * Exit fullscreen mode when leaving view
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
* Donation options
  * Changed "donationOptions" parameters into an array "[[donation]]" with an entry for each platform
  * Specify in "params" if using QR Code or URL with param "qr"
    Example:
      [[donation]]
        name = "wechat"
        url = "images/donation/alipay-qrcode.png" (put the file at "root/static/images/donation/")
        qr = true
* Breadcrumb
  * Allow to have icon or label (or both) for home link
    => In "params":
      - breadcrumbHome: values: "text", "icon", "both" (default: "text")
  * Allow to use site's name or "Home" as the navigation root
    => In "params":
      - breadcrumbHomeSiteName (default: true)
* Single page
  * Meta
    * Optional "modified" and "reading time" info fields
      => Respectively "metaInfoEdit" and "metaInfoReadingTime" (default: false)
    * Optional "tags" field
      => "metaTags" (default: false)
  * "copy-to-clipboard" optional for title
    => param "titleClipboard" (default: false)
  * Code
    * "copy-to-clipboard" optional for code
      => param "codeClipboard" (default: false)
    (NOT HERE!
    * Specify if want line numbers in code tables in "config" (default: true)
      [markup.highlight]
        lineNos = true
        lineNumbersInTable = true
    )


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



## DISCLAIMER
* Hugo (+developer)
* Zzo Theme (+developer)
* Creative Protfolio Theme (+developer)
    https://themes.gohugo.io/hugo-creative-portfolio-theme
* jQuery Cycle Plugin (+developer)
    http://jquery.malsup.com/cycle/
* others?

