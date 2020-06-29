# Overview

The broconomist blog, netlify enabled

## Resources

[Template Source](https://github.com/LekoArts/gatsby-starter-minimal-blog)
[MDX Cheat sheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

[CSS Gradients](https://cssgradient.io/)

# To do 

:cross Implment neon theme

Example neon themes

* https://www.behance.net/gallery/94019943/Investments-Landing-Page?tracking_source=search_projects_recommended%7Cneon

background: linear-gradient(to right, #00bbff 0, , #00bbff 25%, #27273e 25%, #27273e 50%, #66a5ad 50%, #66a5ad 75%, #333345 75%, #333345 100%);


### Example React Component

```
---
date: "2018-01-03"
title: "Use component in MDX"
categories:
  - Coding
---

import SpotifyPlayer from "../../src/components/SpotifyPlayer";

This is an example how you can use React components with MDX.

<SpotifyPlayer
  uri="spotify:user:bbcamerica:playlist:3w18u69NplCpXVG4fQG726"
  size="large"
  theme="black"
  view="list"
/>
```

### Example Cheatsheet

```
---
date: "2018-01-01"
title: "Markdown Cheatsheet"
categories:
  - General
---

[View raw (TEST.md)](https://raw.github.com/adamschwartz/github-markdown-kitchen-sink/master/README.md)

This is a paragraph.

    This is a paragraph.

# Header 1

## Header 2

    Header 1
    ========

    Header 2
    --------

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

    # Header 1 #
    ## Header 2 ##
    ### Header 3 ###
    #### Header 4 ####
    ##### Header 5 #####
    ###### Header 6 ######

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> ## This is a header.
>
> 1. This is the first list item.
> 2. This is the second list item.
>
> Here's some example code:
>
>     Markdown.generate();

    > ## This is a header.
    > 1. This is the first list item.
    > 2. This is the second list item.
    >
    > Here's some example code:
    >
    >     Markdown.generate();

- Red
- Green
- Blue

* Red
* Green
* Blue

- Red
- Green
- Blue

```markdown
- Red
- Green
- Blue

* Red
* Green
* Blue

- Red
- Green
- Blue
```

1. Buy flour and salt
1. Mix together with water
1. Bake

```markdown
1. Buy flour and salt
1. Mix together with water
1. Bake
```

Paragraph:

    Code

<!-- -->

    Paragraph:

        Code

---

---

---

---

---

    * * *

    ***

    *****

    - - -

    ---------------------------------------

This is [an example](http://example.com "Example") link.

[This link](http://example.com) has no title attr.

This is [an example][id] reference-style link.

[id]: http://example.com "Optional Title"

    This is [an example](http://example.com "Example") link.

    [This link](http://example.com) has no title attr.

    This is [an example] [id] reference-style link.

    [id]: http://example.com "Optional Title"

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

This paragraph has some `code` in it.

    This paragraph has some `code` in it.

![Alt Text](https://placehold.it/200x50 "Image Title")

    ![Alt Text](https://placehold.it/200x50 "Image Title")
```