# Tagudashi
Easily display HTML code within a webpage!
# Why Tagudashi?
Displaying HTML code on a webpage is surprisingly tricky—browsers try to render the tags instead of showing them, forcing developers to manually escape characters or rely on bulky tools. Tagudashi solves this by turning HTML into safe, readable code blocks, with syntax highlighting, so examples look clean with minimal effort.
## Example Usage:
### 1. Add the CDN to your page header
`<script src="https://outendesigns.github.io/tagudashi/tagudashi.js"></script>`
### 2. Add the CSS Styles to your page header
`<link rel="stylesheet" type="text/css" href="https://outendesigns.github.io/tagudashi/tagudashi-styles.css">`
### 3. Create a `<pre>` tag with class "tagudashi"
`<pre class="tagudashi"></pre>`
### 4. Write or copy/paste the HTML inside the `<pre>` tag
Normally, a browser will try to render any HTML inside a `<pre>` block. To prevent this, Tagudashi requires a simple change:
<br><br>
Add a backtick (\`) immediately after every < character in your HTML code. <\`
<br><br>
This tells the browser to treat the tags as text instead of executing them. 
<br><br><script src="https://outendesigns.github.io/tagudashi/tagudashi.js"></script>
`<pre class="tagudashi">`<br>
<\`h1>Tagudashi<\`/h1><br>
<\`div class=example><br>
<\`p>Note the use of the backtick after each left angle bracket<\`/p><br>
<\`/div><br>
`</pre>`<br>
### Tagudashi will take care of the rest!
