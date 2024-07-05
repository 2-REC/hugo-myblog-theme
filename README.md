# hugo-myblog-theme

HUGO theme for blogs.

Based on the ZZO theme (TODO: add link). The main changes are:
* Recent posts carousel
* Customizable left+right sidebars
* Posts as tiles
* Tag filters
* Copyrights lavel on images (TODO: check wasn't there already)
* ... (TODO: continue)


## Usage

Instructions to build a new site using the "MyBlog" Hugo theme.


**NOTE:**
The Hugo command "hugo new site" can be used to create the new site, but the structure of this theme being different (e.g. "config"), it is easier to create it manually.


More details about each step are provided in the "Checklist" (TODO: add link) section below.


### Main Steps

#### Preparation

* Create a new directory to contain the new site.

* Create subsubdirectories:
    * themes
    * content

* Copy the theme (git clone) to "themes/myblog".

(**TODO:** Needed?
* Delete the "exampleSite" subdirectory.
)

* Copy "config" directory from "exampleSite" (in the theme) to the main site directory.
    * From "themes/myblog/exampleSite/config" to "config".
TODO: infos about "languages.toml", etc.

**NOTE:** The content in the "themes" directory should ideally not be modified.
Any change to make to a theme should be done by modifying copied/added files directly in the site main directory.
Information can be found in the [Hugo's Lookup Order](https://gohugo.io/templates/lookup-order) documentation page.
The lookup order also applies to other files than layout, such as files in "data", "i18n", assets", etc.


#### Config
(TODO: move below?)

* Edit the config file "config/_default/config.toml":
    * Set the site name:
        ```
        title = "..."
        ```
    * Set the theme:
        ```
        theme = "myblog"
        ```


Languages:
* entry for each language
* "defaultContentLanguage" (config)
* "enableLangChange" param
* A location must be specified for each language (even if only 1).
Specified by "contentdir".
and/or "defaultContentLanguageInSubdir"?

* i18n stuff
  Define specific keywords/texts for each language.
  **TODO:** Add info/details
  => Copy i18n directory from theme + adapt content.

=> If only 1 language, no "en" in URL
(TODO: for itips, add FR later)


- static/manifest.json (? - role/usage?)
**TODO:** Add info/details


#### Logo + favicon

* Site icon (favicon):
    * Add an icon file "logo.ico" in the "static/logo" directory.
* Site logo (home) (Optional).  
    => 2 different ways:
    * Default location (automatic):
        * Add an icon file "logo.png" in the "static/logo" directory.
    * Specific location (manual):
        * Add an image file in the "static" directory (or in subdirectories if desired).
        * Set the prameter "logoImage" in the params file "config/_default/params.toml".
          For example, if in "static/logo":
          ```
          logoImage = "/logo/mylogo.png"
          ```
+ static/manifest.json (logos definition)


#### Header (Optional)

Home page header.

Different types of headers are handled: "single", "multi" or "custom".
The desired header type is specified by the parameter "homeHeaderType" in "params.toml".

For "single" and "multi", headers are defined in the "header" section of the "_index.md" file at the root of each language directory in "content" (e.g.: "content/en").
A different header can be defined for both types.

Examples can be found in "header.md" in "archetypes" directory.

A custom header can be defined in "custom-header.html" in "layouts/partials/header".

If no "header" entry is defined in "params", no header is created.


The parameters in "_index.md" for the "single" and "multi" headers are the following:

* type:
    * single: Single header.
        * **NOTE:** For "single" headers, any value for this field can be used, not necessarily "single" (value other than "multi" and "custom").
    * multi: Slides.

* fit: Type of fitting for the header height.
    * Accepted values are: image, fixed, ratio, window.
    * image: The header displays the full image, keeping its aspect ratio.
        * **NOTE:** This type of fitting is not accepted for the "multi" type.
    * fixed: The header has a fixed height (in "px").
    * ratio: The header height is a ratio of its width (in "%").
        * **NOTE:** The background image is deformed to fit the specified ratio.
    * window: The header height is a ratio of the window's height (in "%").
    * **NOTE:** Except for "image", the sizing of the background image can be controlled by parameters of the "image" field (see below).

* height: Height of the header
    * The value should be determined accordingly to the size of the background image and the desired results.
    * Ignored if "fit" is "image".
    * Must be in "px" unit if "fit" is "fixed".
    * Must be in "%" unit if "fit" is "ratio" or "window".

* If "type" is "multi", the remaining parameters are divided in 2 parts: "options" and "slides".
    * options: Slider settings.
        * transition_effect
            * Handled values are:
                * blindX, blindY, blindZ
                * cover
                * fade
                * growX
                * none (no slideshow)
                * scrollUp, scrollDown, scrollLeft, scrollRight
                * scrollHorz, scrollVert
                * slideX
                * toss
                * turnLeft, turnRight
                * uncover
                * wipe
            * The following transitions seems problematic (undesired results):
                * curtainX, curtainY
                * fadeZoom
                * growY
                * shuffle? (weird behaviour)
                * slideY
                * turnUp, turnDown
                * zoom
        * transition_delay: Time in milliseconds between each transition.
        * transition_duration: Time taken by the transition.
    * slides: Slides definition.
        * For each slide, a set of parameters is required to define the slide.
        * The parameters for each slide are the same as for the "single" header.

* Slide definition
    * For a "single" header of for each slide of the "multi" header, the following parameters are available:

TODO: check that complete + add details.
    * image (optional, unless "fit" is set to "image" for which it is mandatory):
        * src: Path to the background image file (relative to the "static" directory).
        * copyright
        * caption
        * The following parameters are only handled if the fitting type "fit" is "fixed", "ratio" or "window" (not for "image"):
            * size: "cover" and "contain" are generally used, depending on desired results.
                Other options are: "auto", as well as percentage or length values.
            * repeat
            * position
    * The remaining parameters are related to the "title" block.
        * Alignment:
            * alignX: Horizontal align (left|center|right). Default: "center".
            * alignY: Vertical align (top|center|bottom). Default: "center".
        * Padding: According to alignments.
            * paddingX: Horizontal padding.
                * If "alignX" is "center", a negative value can be used to add padding to the right.
            * paddingY: Vertical padding.
        * Title parameters:
            * title: Can be on several lines.
            * titlePaddingY: Vertical padding for each title line (top+bottom).
            * titleFontSize: Size of the title font.
            * titleColor: Color of the title font (in RGB or RGBA format).
                * By default: "header-title-color-default".
            * titleShadow: Shadow for the title.
        * Subtitle parameters:
            * subtitle
            * subtitlePaddingY
            * subtitleFontSize
            * subtitleColor
                * By default: "header-subtitle-color-default".
            * subtitleShadow
            * subtitleCursive: Subtitle font cursive.
        * spaceBetweenTitleSubtitle: Vertical padding between title and subtitle blocks.

**NOTE:** Measures or size values can use "%" or "px" units.
Units must be specified, unless te value is 0.


#### Bio (Optional)

The "bio" section can be added to sidebars.
It contains information relative to the blogger/author.

TODO: Also in "about" page. (?)
TODO: if other authors (post specific), use 'whoami' (TODO!)


* Avatar image (Optional).  
    => 2 different ways:
    * Default location (automatic):
        * Create directories "static/images/bio".
        * Add an image file "avatar" (".jpg", ".png" or ".svg") in the directory.
    * Specific location (manual):
        * Create directory "static" if doesn't exist.
        * Add an image file in that directory (or subdirectories if desired);
        * Set the prameter "bioImage" in the params file "config/_default/params.toml".
            For example, if in "static/images":
            ```
            bioImage = "/images/avatar.jpg"
            ```

* Blog author information.
    For example:
    * bioName = "Bob Solo"
    * bioDescription = "Blogger"
    * Optional:
        * bioLocation = "City, Country"
        * bioOrganization = "Hugo"
        * bioShowEmail
            * true: Use value defined in "socialOptions" (and email not added to social icons).
            * false (default): Email added to social icons.
        * bioLink = "https://somesite.org"
        * bioHideSocial
            * true: Hide social icons.
            * false (default): Show social icons.

* Social Options: Contact information, such as social networks, sites and communities.  
    (TODO: Check for missing icons!)  
    => Long list of supported platforms. Check "socialOptions" in "params.toml" for the complete list.
    Examples of social options: email, facebook, twitter, github, instagram, youtube, linkedin, pinterest, steam.
    **NOTE:** Additional options can be added by creating a new entry in the list (in params file) and adding its corresponding icon. See (TODO: add link) for details.  
        (TODO: check if correct (to add new option), or if need other changes)
    **NOTE:** The social options can also be in the site footer. See below for details.


#### Carousel (Optional)

Recent posts displayed as a "carousel".

Additional slides (not post related) can be defined to be displayed in the carousel.


* The parameters for the carousel are set in the "slider" section of the "params.toml" file.  
    The main parameters are:
    * enable: To allow/disallow the carousel feature.
    * manual: Specifies if only the posts having a "slide=true" option enabled are displayed.
    * num_features: The number of elements to display in the carousel.
    * transition parameters: effect, delay, duration (more details are provided in the "params" file).

* Additionally to the recent posts, other specific slides can be defined:
    * For each slide, a "yaml" file must be defined in the "data/slider" directory (located at the root of the site).  
    * The parameters for slides are:
        * Title: Title of the slide.
        * banner: Path to the slide image (path in "static" directory).
        * copyright: Label to display on the image for copyright disclaimer (optional).
        * caption: Description label to display on the image (optional).
        * Summary: Text displayed in the slide.
        * url: Link to another page or external site.
            Examples of slides can be found in the "exampleSite" (in "data/slider" directory).
    **NOTE:** At least 2 slides are required for the carousel. If there is only 1 slide, the carousel is deactivated.


#### Themes

Colours, fonts, etc.
Can have 1 or more defined styles.

Each theme must:
    * be defined in "data/theme.toml"
        **TODO:** Add info/details
    * have a file defining all its values, located in "assets/sass/themes"


Selectable in navigation bar on top.

* fonts:
    * Main fonts usage specified in "data/fonts.toml"
    * Available fonts in "static/fonts" of theme.
        => Add new fonts in "static/fonts" of site


(data/grid.toml?)


#### ...
- search (filters)
- posts
    TODO: check
      * Single
        * Header
          * Added header in single page with optional title and description (similar working than main header 'single' type)
            TODO: detail more...
            Example: (in "posts/markdown-syntax/index.md")
              ```
              header:
                height: 235px (only 'px' for now... TODO: handle '%' + 'em')
                image: images/banner/hugo.png
                copyright: "Hugo?"
                caption: "'Hugons'"
                alignX: left
                alignY: bottom
                paddingX: 10px
                paddingY: 10px
                title:
                  titleColor:
                  titleShadow: true
                  titleFontSize: 25%
                description:
                  descriptionColor:
                  descriptionShadow: false
                  descriptionCursive: true
                  descriptionFontSize: 10%
                spaceBetweenTitleDescription: 5%
              ```

- sidebars
- galleries
- footer
  showSocialLinks, etc.
- about page
- contact page

...

TODO:
- adapt params



### Checklist
**TODO:** check required (not redundant) + update

Checklist when making a new site using the theme.

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
  - Entry in navbar not added if no directory in "content"
- Syntax highlighting (using Chroma)
  - sass/syntax
    (+reference Chroma site? - or indicate in )
    - Only keep minimum, add as desired
        => For each language: scss file + entry in "_syntax.scss"
- Gallery
    * Removed modes ("one-by-one", "remote" and "at-once")
    * If "images" in front-matter: equivalent to "one-by-one" mode
      * "image", "title", "caption" and "copyright", "thumb" (if present) fields will be used for each image
      * If "image" starts with "http", the image will be considered as remote (online image)
      * If "image" starts with "/", the image will be considered as "static" (in "static" dir instead of post's "content")
    * If no "images" in front-matter: equivalent to "at-once" mode
      * Images obtained from "images" subdirectory
  TODO: add:
  - global parameters:
    - figcaption: true|false
    - used for all image, if not overloaded
      - imagesCopyright
      - thumb

* Recent posts
    * Added carousel from "Travelify" theme (uses "jQuery.cycle" library)
    * Added parameters for the slides transitions (transition effect, delay and duration)
    * Banner image files:
        * if defined in "data": images are taken from "static" directory
        * for posts, image is in the post resources (need a page bundle)
* Header
TODO: detail only changes from Zzo (not usage)
  * Types:
    * Single: Single header
    * Multi: Slides
        * Uses the "Cycle" library for the slideshow.
            **NOTE:** The "swipe" feature is not handled here.
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
      * 'copyrightOwner': Owner of the copyright. If not defined: 'bioName' param is used instead
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
  * Replaced by "[Photoswipe]()" used in "[hugo-easy-gallery](https://github.com/liwenyip/hugo-easy-gallery/)" from [liwenyip](https://github.com/liwenyip).
  * Allows better touch controls (zoom, pan, swipe).
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
  * ~Replaced by filters search
* Swipe
  - Removed swipe shortcodes "swiper" and "swiperItem"
  - Removed swipe from header (using slider from "jQuery.cycle" library)
* Busuanzi site counter
* Baidu Analytics
* Gravatar (in bio)
* Publications


(TODO: keep this here? => too general, should be in tips blog...)
# Info
    * Post main image for social networks:
        Reconciling the guidelines for the image is simple:
        Follow Facebook's recommendation of a minimum dimension of 1200x630 pixels and an aspect ratio of 1.91:1, but adhere to Twitter's file size requirement of less than 1MB.
    * Adapt static/manifest.json + icons stuff in head/meta



## DISCLAIMER
* Hugo (+developer)
* Zzo Theme (+developer)
* Creative Portfolio Theme (+developer)
    https://themes.gohugo.io/hugo-creative-portfolio-theme
* jQuery Cycle Plugin (+developer)
    http://jquery.malsup.com/cycle/
* "[PhotoSwipe](http://photoswipe.com)" by Dmitry Semenov
* "[hugo-easy-gallery](https://github.com/liwenyip/hugo-easy-gallery/)" from [liwenyip](https://github.com/liwenyip)
* others?
