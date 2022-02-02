## Apptimus Home Exam - Javascript, Html, Dom, Css

* <p> Start with a simple HTML page with an empty body.
Using only "pure" javascript DOM (no jQuery, html, etc), create a function “createNewBanner” that takes 3 parameters: 
  * element_id
  * redirect_link
  * banner_img 

and inserts into an element with id of element_id an image element of source banner_img
that on click redirects (as _blank) to the redirect_link parameter.
  * Set the image size to 320px/320px
</p>

* <p> Copy and paste <\div id=”banners-list”><\/div> in the html body.
   Create an HTML & CSS form of 2 fields:<br>
  1. Banner IMG URL <br>
  2. Redirect Link <br>
  and a submit button, that after click on “submit” will invoke function “createNewBanner” that you created in task 1, with element_id as “banners-list”.
</p>

* Create a “Save” button, that after click will save all created banners to 
localStorage key “banners-data”.

* Create a “Clear” button, that after click will delete localStorage key 
  “banners-data”.

* On page load, check if localStorage contains saved banners on key 
  “banners-data”, and if it does display all those banners.
