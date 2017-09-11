Scalable (and)
Modular
Architecture (for)
Cascading
Style...
Sheets

**base.css** - CSS for every page, for determining of every tag (or class) of a certain type will look. Ex:

```css
h2 {
  font-size: 3em;
  color: blue;
}
.clearfix {
  clear: both;
}
```

**layout.css** - CSS for the architecture (or structure) for my page; Don't put colors, font families, font sizes, or other styling rules that don't have to do with structure here. Ex:

```css
* {
  box-sizing: border-box;
}
.col-3 {
  width: 25%;
  margin-top: 5px;
  margin-bottom: 50px;
}
```

**module.css** - (ex: blogPost.css) CSS for specific elements on the page, or a specific conceptual set of elements on the page. Ex:

```css
.blog-div {
  min-height: 300px;
}
.blog-div h2 {
  font-style: italic;
}
#list-head {
  font-size: 2em;
  text-align: right;
}
```

Responsive Web Design

- A website that *RESPONDS* to changes in the size of the viewport. These changes can either be active (i.e. the user shrinking or expanding the window) or passive (i.e. the viewport for a phone vs the viewport for your desktop)

[ ][ ][ ]
[ ][ ][ ]
[ ][ ][ ]

[ ][ ]
[ ][ ]
[ ][ ]
[ ][ ]
[ ]

[ ]
[ ]
[ ]
[ ]
[ ]
[ ]
[ ]
[ ]
[ ]
