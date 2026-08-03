What is HTML?
HTML is HyperText Markup Language; standard language used to structure and display content on the web, utilizing tags to defines elements like paragraphs, links, images. 

What is the minimal structural of an HTML5 element?
<!DOCTYPE html>
<html lang = "en">
<head> 
  <meta charset="UTF-8">
  <title>Page Title</title> 
</head>
</html>

What is the purpose of the <meta> tag?
This <meta> tag holds invisible meta data about the page for the browser and search engine such as character encoding, author, viewport settings, and SEO descriptions. 

What's the difference between <head></head> and <header></header>?
<head></head> hold invisible metadata (title, script, stylesheet) and links to CSS/JS.
<header></header> holds visible structural element rendered block inside the <body></body> on the page that typically holds the side logo and navigation menu. 

What is the <form></form> tag used for in HTML?
The <form></form> tag creates an interactive section to collect user inputs (text boxes, buttons) and submit that data to a server.

Explain the following code: <a href ="http://example.com/sample_page/"rel="no referrer nofollow">Link</a>
<a></a> tags stands for Anchor, is a fundamental HTML used to create a clickable hyperlink. Anchors one web page to another.
href is the link points to. 
red stands for relationship to tell the web browser and search engines what the relationship is between current website and the website linking out to. 
noreferrer is to protect user privacy by hiding where the user came from?
nofollow is to tell search engines not to follow or pass SEO ranking authority to the link side.
Link - the name of the link shows on the page. 

How do you serve your page in multiple language?
<html lang = "en"> declares the language of the current page, which helps screen readers and search engines. But to truly serve multiple languages you also need to either have separate pages per language(e.g. /en/, /zh/) or use server side logic to detect the user's language preference. 

What are semantic HTML tags and why are they important?
Semantic tags are elements whose names describing their meaning, like <nav>, <footer>, <article>. They help browsers, screen reader, and search engines understand the purpose of content, improving accessibility and SEO. 

What frontend practices can improve a website's SEO and why do they matter?
Using semantic tags with <meta name="description">, using descriptive alt attributes on images, using proper heading hierarchy (<h1> -> <h2>), fast page load times, and mobile responsive layouts. These matter because search engines rank pages based on content quality, structure, and user experience. 

