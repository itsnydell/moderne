# Moderne


A [Ghost](http://github.com/tryghost/ghost/) theme.

![](https://raw.githubusercontent.com/itsnydell/moderne/master/screenshot.jpg)

## Features

* Responsive theme (mobile friendly)
* Large post header images
* Disqu Comments
* Author Information, including picture.

This theme was inspired by the [Media Temple Blog](mediatemple.net/blog/) for the post page and the rest of the theme was designed to around that. 

Please let me know if you use this theme so I could feature you as an live blog!

### Disqus

Disqus comments are included by default. You will need to follow the instructions below to tailor it to your site, else you will be using the example Disqus comments which is not blog specific.

#### Enable for your site:

Find the following line in post.hbs line: 

```
var disqus_shortname = 'example';
```

Then replace "example" with your Disqus information!

#### Remove Disqus

Find and remove the following from the post.hbs file:

```
<section class="post-comments">.....</section>
```


## More Screenshots

#### Post Page

![](https://raw.githubusercontent.com/itsnydell/moderne/master/screenshot-post.jpg)

![](https://raw.githubusercontent.com/itsnydell/moderne/master/screenshot-post-lower.jpg)
