# Project2_Lets_Talk

## Jake's Forum 
Jake loves discussion amongst his friends, but he wants a way to keep it organized. He wants his own forum.

## Jake's Requirements

- Jake wants his friends to be able to discuss things by topics. Users should be able to create topics, and other users should be able to comment on those topics.

- Jake isn't concerned about sub-comments, for now.

- Jake also wants to be able to see what topics have the most comments.

- Jake thinks it would be cool if users could vote on topics, and have the topics displayed based on popularity.

- Jake wants users to be able to set their username only once, and to have the posts and comments show which user made them.

- Jake really wants the application to look good.


##Jake's Bonus options

- Jake wants users to sign up with a username and password, and to login to the application before being able to use it. (session controllers + user models)

- Jake would really like the passwords to be secure. (node package: bcrypt)

- Jake would like the application to look good both on a computer, and on a phone. (CSS: media queries)

- Jake would like people to comment on comments. Perhaps this means top-level + one-level deep, or nesting more like reddit?

- Jake would like the application to automatically tag posts with the location from which they are written. (html5: geolocation + google map api)

- Jake is a nerd, and is a fan of proper formatting. He wants everyone to write their discussion posts in markdown format. (node package: marked)


##MVP 

Technologies :

HTML, CSS, JavaScript & jQuery, node.js & express, mongoose

  1. Schema for user - name, password
  2. Schema for topic - title/subject, upvote, author
  3. Schema for comment - comment, author
  4. New topic button
  5. new comment button
  6. search bar
  7. Topic view (show)
  8. Home view (index)
  9. Create Topic view
  10. Create Comment View
  11. Vote button ( ? hidden form )


##WireFrame 
![index] (https://github.com/JosephinaTavera/Project2_Lets_Talk/blob/master/wireframe/index.JPG)
![show] (https://github.com/JosephinaTavera/Project2_Lets_Talk/blob/master/wireframe/show.JPG)


## Sources

Used for search item
http://mongoosejs.com/docs/api.html#query_Query-find

something to review
https://docs.mongodb.com/manual/reference/operator/query/text/#op._S_text

https://www.npmjs.com/package/mongoose-text-search

Carousel

http://desandro.github.io/3dtransforms/docs/carousel.html
http://www.owlgraphic.com/owlcarousel/demos/transitions.html
http://www.w3schools.com/bootstrap/bootstrap_carousel.asp

http://www.jqueryscript.net/demo/Simple-jQuery-Carousel-Plugin-With-3D-Rotating-Effects-Carousel3d/

bouncing ball
https://24ways.org/examples/2010/real-animation/demo5/

http://www.htmldrive.net/items/show/1083/jQuery-images-opening-and-closing-door-effect

http://www.creativebloq.com/css3/animation-with-css3-712437

curtain effect

http://cssdeck.com/labs/css3-theater-curtains

https://css-tricks.com/creating-css-sliding-door-effect/

http://buildinternet.com/2009/07/animate-curtains-opening-with-jquery/



https://docs.mongodb.com/manual/reference/database-references/