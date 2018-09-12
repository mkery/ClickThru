# ClickThru
A template for making click through prototypes in an HTML page. Instructions below are how you can adapt the example for your own click-through prototype

## First, replace the template screens with your screens:
In the screens folder, remove the template screen PNG files and add your own screen image files
### HTML edits
  Head to index.html. Where you see:
  ```html
<div class="screen" id="indexPage">
  ```
  or
  ```html
<div class="screen" id="aboutPage" style="display: none">
  ```
  Replace "aboutPage" with whatever you'd like to call your screen. I'd recommend keeping indexPage named that, just since index is the home page of a website as a matter of convention. The screen div *without* 
   ```html
style="display: none"
  ```
  is the one that will show first in your click-through prototype. This ensures only 1 screen will show at a time.
  
### CSS edits
  Now head to style.css and also open up your screen file in a drawing program like Adobe Illustrator, Sketch, or Inkscape.
  Where you see: 
  ```css
  --og-image-width: 960.5; /* in px, no unit notation*/
  --og-image-height: 504; /* in px, no unit notation*/
  ```
  replace 960.5 with the *width* of your screen image files, and 504 with the *height* of your screen image files. This assumes that all of your image files are the sime width and height.
  
  Next, where you see:
  ```html
#indexPage {
  background-image: url("screens/index.png");
}

#detailPage{
  background-image: url("screens/detail.png");
}

#aboutPage{
  background-image: url("screens/about.png");
}
```
replace each of those CSS id rules with the id's of the screens you named on the HTML page. For instance, if you have a screen named `fooPage` with a screen image file called `foo.png`, you'll write:
  ```html
#fooPage {
  background-image: url("screens/foo.png");
}
```

## Second, add hotpots that, when clicked, will lead to other pages:
Head to the `index.html` page. Where you see
```html
<div class="hotspot" id="shopHotspot" dest="indexPage"></div>
```
each one of these divs is a hotspot! You can name your hotspot, just like your screens, through its id HTML tag. We've also added a custom tag `dest` to the hotpot div. The `dest` value should be the id of the screen you would like that hotspot to lead to. This is very similair to the `<a href=" ">` hyperlink tag in HTML, but we're using our own custom tag so that our javascript `clickthru.js` can easily do some extra operations when the hotspot is clicked.

Now, head to `style.css`. Where you see:
```css
#aboutHotspot {
  top: calc(6 * var(--height-ratio));
  left: calc(886 * var(--width-ratio));
  width: calc(34.66 * var(--width-ratio) - 2 * var(--border-width));
  height: calc(20 * var(--height-ratio) - 2 * var(--border-width));
}
```
Open up your screen image again in a drawing tool. Draw a rectangle in your drawing tool on top of your screen where you'd like the hotpot to be. Don't worry, this is for measurement only! From the drawing tool, get the X and Y position of your rectangle, as well as its width and height. Replace `6` in `top` with the Y position from your drawing tool, `886` in `left` with the X position from your drawing tool and so on. The template will automatically do the ration calculations for you so that your click-through prototype appears correctly on all screen sizes.

### Have fun! :tada:
