# hugo-myblog-theme
HUGO theme for blogs.


TODO: complete/rewrite/etc.
- Syntax highlighting (using Chroma)
  - sass/syntax
    (+reference Chroma site? - or indicate in )
    - Only keep minimum, add as desired
        => For each language: scss file + entry in "_syntax.scss"


## Changed Features from original Zzo Theme
* Themes
    * More dynamis theme management.
        For each theme:
        - Add entry+infos in "data/theme.toml" (name, chroma, chroma_background, primary_color)
        - Add scss files ("themes/name.scss" + "themes/chroma_background.scss" + "syntax/chroma.scss")
    * Default case for 'theme' if current value in local storage is not valid
        => Remove 'theme' from localStorage if value is not in list of themes (in 'data/theme.toml').
* Sidebar
  - list to define content of each toolbar (home, single, list, taxonomy)
  - special "-" separator to have "floating" section
  - left/right position
  - added taxonomy specific sidebar (different from "list")
* Swiper
  TODO: see if keep or replace (with a carousel or similar from other theme)
  - Possibility to have no option parameters
    Use:
    - Without option:
    ```
    {{< swiper >}}
      {{< swiperItem >}}
      < SWIPE 1 >
      {{< /swiperItem >}}
      {{< swiperItem >}}
      < SWIPE 2 >
      {{< /swiperItem >}}
    {{< /swiper >}}
    ```
    - With option:
    ```
    {{< swiper option="option1">}}
      {{< swiperItem >}}
      < SWIPE 1 >
      {{< /swiperItem >}}
      {{< swiperItem >}}
      < SWIPE 2 >
      {{< /swiperItem >}}
    {{< /swiper >}}
    ```
    ! - The following warning can appear when using "swiper":
    ```
    DevTools failed to load SourceMap: Could not load content for http://localhost:1313/lib/swiper/swiper.min.js.map: HTTP error: status code 404, net::ERR_HTTP_RESPONSE_CODE_FAILURE
    ```
    Deleting the following line in "swiper.min.js" will remove it (or deleting the '#' character):
    ```
    //# sourceMappingURL=swiper.min.js.map
    ```

## Removed Features from original Zzo Theme

* All themes but "light"
* Search feature
* Busuanzi site counter
* Baidu Analytics


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
* Hugo (+dev)
* Zzo Theme (+dev)
* others?
