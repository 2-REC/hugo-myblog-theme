---
header:
  - type: multi
    fit: ratio
    height: 25%
    options:
        transition_effect: fade
        transition_delay: 3000
        transition_duration: 1000
    slides:
      - image:
            #TODO: use a tiled image (same number of tiles regardless of size)
            # (can do another slide with tiles of constant size: 'size' as lengths, centered 'position')
            src: images/header/background.jpg
            size: 12.5% 50%
            repeat: repeat
            position: top-left
            copyright: "No rights reserved"
            caption: random image
        alignX: left
        alignY: top
        paddingX: 25%
        paddingY: 0
        title:
          - HUGO
        subtitle:
          - Top-left align example
          - With 2 subtitles
        titleColor:
        titleShadow: true
        titleFontSize: 25%
        subtitleColor:
        subtitleShadow: true
        subtitleCursive: true
        subtitleFontSize: 10%
        titlePaddingY: 5%
        subtitlePaddingY: 5%
        spaceBetweenTitleSubtitle: 10%

      - image:
            #TODO: use a 'portrait' (?) fixed image (stays in frame, undeformed)
            src: images/header/background.jpg
            size: contain
            repeat: no-repeat
            position: center
            copyright: "No rights reserved"
        alignX: center
        alignY: center
        paddingX: -25%
        paddingY: 0
        title:
          - HUGO
          - Colored
        subtitle:
          - Centered align example (with X offset)
        titleColor: rgb(0, 0, 128)
        titleShadow: false
        titleFontSize: 10%
        subtitleColor: rgba(255, 128, 128, 0.5)
        subtitleShadow: true
        subtitleCursive: false
        subtitleFontSize: 20%
        titlePaddingY: 0
        subtitlePaddingY: 2%
        spaceBetweenTitleSubtitle: 10%

      - image:
            # image cropped to fill area (ok to 'lose' part of image)
            src: images/header/background.jpg
            size: cover
            repeat: no-repeat
            position: center
        alignX: right
        alignY: bottom
        paddingX: 25%
        paddingY: 50%
        title:
          - HUGO
        subtitle:
          - Bottom-right align example (with X+Y offsets)
        titleColor:
        titleShadow: true
        titleFontSize: 15%
        subtitleColor:
        subtitleShadow: true
        subtitleCursive: true
        subtitleFontSize: 10%
        titlePaddingY: 5px
        subtitlePaddingY: 5%
        spaceBetweenTitleSubtitle: 0

  - type: single-image
    fit: image
    image:
        src: images/header/background.jpg
        caption: TEst
        copyright: "No rights reserved"
    alignX: center
    alignY: top
    paddingX: 0
    paddingY: 0
    title:
      - HUGO
      - L2
    subtitle:
      - The world's fastest framework for building websites
    titleColor:
    titleShadow: true
    titleFontSize: 25%
    subtitleColor:
    subtitleShadow: true
    subtitleCursive: true
    subtitleFontSize: 10%
    spaceBetweenTitleSubtitle: 10%

  - type: single-fixed
    fit: fixed
    height: 235px
    image:
        src: images/header/background.jpg
        size: cover
        repeat: no-repeat
        position: center
        caption: TEst
        copyright: "No rights reserved"
    alignX: center
    alignY: top
    paddingX: 0
    paddingY: 0
    title:
      - HUGO
      - F2
    subtitle:
      - The world's fastest framework for building websites
    titlePaddingY: 10px
    titleColor:
    titleShadow: true
    titleFontSize: 25%
    subtitleColor:
    subtitleShadow: true
    subtitleCursive: true
    subtitleFontSize: 10%
    spaceBetweenTitleSubtitle: 10%

  - type: single-ratio
    fit: ratio
    height: 25%
    image:
        src: images/header/background.jpg
        size: cover
        repeat: no-repeat
        position: center
        caption: TEst
        copyright: "No rights reserved"
    alignX: center
    alignY: center
    paddingX: 0
    subtitlePaddingY: 10%
    paddingY: 0
    title:
      - HUGO
    subtitle:
      - The world's fastest framework for building websites
    titleColor:
    titleShadow: true
    titleFontSize: 50%
    subtitleColor:
    subtitleShadow: true
    subtitleCursive: true
    subtitleFontSize: 10%
    spaceBetweenTitleSubtitle: 10%

  - type: single-window
    fit: window
    height: 25%
    image:
        src: images/header/background.jpg
        size: cover
        repeat: no-repeat
        position: center
        caption: TEst
        copyright: "No rights reserved"
    alignX: center
    alignY: center
    paddingX: 0
    paddingY: 0
    title:
      - HUGO
    subtitle:
      - The world's fastest framework for building websites
    titleColor:
    titleShadow: true
    titleFontSize: 50%
    subtitleColor:
    subtitleShadow: true
    subtitleCursive: true
    subtitleFontSize: 10%
    spaceBetweenTitleSubtitle: 10%
---