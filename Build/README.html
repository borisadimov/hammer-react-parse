<h1>“Serverless” React App with Hammer</h1>

<p>&lt;some reasons why it’s so cool here&gt;</p>

<h4>Take</h4>
<p>This <a href="https://github.com/flywithmemsl/hammerslimsass/blob/master/slimsass.hammer?raw=true">SlimSass</a> Hammer template or initialize new Hammer project.</p>

<h4>Install (if you don’t have them):</h4>

<ul>
  <li><a href="http://nodejs.org">Node.js</a>: <code>$ brew install node</code> on OS X</li>
  <li><a href="http://bower.io">Bower</a>: <code>$ npm install -g bower</code></li>
</ul>

<h4>Install bower components into your folder</h4>
<ul>
  <li><a href="http://facebook.github.io/react/downloads.html">React starter kit</a>: <code>$ bower install react --save</code></li>
  <li><a href="https://parse.com/docs/downloads">Parse SDK</a>: <code>$ bower install parse-js-sdk --save</code></li>
  <li><a href="https://github.com/ParsePlatform/ParseReact">ParseReact library</a>: just include it manually from CDN or save its source into your project (<code>https://www.parsecdn.com/js/parse-react.js</code>).</li>
  <li><a href="https://github.com/rackt/react-tabs">ReactTabs component</a> (<em>optionnally</em>): <code>$ bower install react-tabs --save</code></li>
</ul>

<h4>Your project structure may look like this</h4>
<p><code>
root/                   # Main application directory
|-app/                  # Your code may reside here
|--components/          # Source files of your react components
|--styles/              # Some your stylesheets
|-bower_components/     # Directory for external libraries delivered by bower
|-Build/                # Hammer's build directory
|-index.slim            # Index page of your project
</code></p>

<h5>Include third party libraries using Hammer tags or manually</h5>
<p>##### Add some container for your react app
So your <code>index.slim</code> will look like this:</p>

<p>```
doctype html
html
  head</p>

<pre><code>    &lt;!-- Hammer reload --&gt;
      &lt;script&gt;
        setInterval(function(){
          try {
            if(typeof ws != 'undefined' &amp;&amp; ws.readyState == 1){return true;}
            ws = new WebSocket('ws://'+(location.host || 'localhost').split(':')[0]+':35353')
            ws.onopen = function(){ws.onclose = function(){document.location.reload()}}
            window.onbeforeunload = function() { ws = null }
            ws.onmessage = function(){
              var links = document.getElementsByTagName('link');
                for (var i = 0; i &lt; links.length;i++) {
                var link = links[i];
                if (link.rel === 'stylesheet' &amp;&amp; !link.href.match(/typekit/)) {
                  href = link.href.replace(/((&amp;|\?)hammer=)[^&amp;]+/,'');
                  link.href = href + (href.indexOf('?')&gt;=0?'&amp;':'?') + 'hammer='+(new Date().valueOf());
                }
              }
            }
          }catch(e){}
        }, 1000)
      &lt;/script&gt;
    &lt;!-- /Hammer reload --&gt;
  
&lt;link rel='stylesheet' href='app/styles/application.css'&gt;
&lt;script src='bower_components/parse-js-sdk/lib/parse.js'&gt;&lt;/script&gt; &lt;script src='bower_components/react/react.js'&gt;&lt;/script&gt; &lt;script src='bower_components/react/react-with-addons.js'&gt;&lt;/script&gt; &lt;script src='bower_components/react-tabs/dist/react-tabs.js'&gt;&lt;/script&gt; &lt;script src='bower_components/react/JSXTransformer.js'&gt;&lt;/script&gt;
script src="https://www.parsecdn.com/js/parse-react.js"   body
#react-container
</code></pre>

<p>```</p>

<h3>Now time to create react app</h3>
<p>It will contain 3 components:
* Document list
* Preview
* Document box, that compose them</p>

<p>```js
var DocumentBox = React.createClass({</p>

<p>getInitialState: function() {
    return {
      activeDocId: -1,
      previewImage: ‘’,
      documentUrl: ‘’
    }
  },</p>

<p>handleActiveChange: function(doc, index){
    this.setState({
      activeDocId: index,
      previewImage: doc.preview,
      documentUrl: doc.file
    })</p>

<p>},</p>

<p>render: function() {
    var documents = [
        {
            name: ‘somename’,
            file: ‘http://somedomain.com/link-to-file.pdf’,
            preview: ‘http://somedomain.com/link-to-preview.jpg’
        }
    ]</p>

<pre><code>return (
  &lt;div className="documentBox"&gt;
    &lt;DocumentList activeId={this.state.activeDocId} data={documents} activeChange={this.handleActiveChange}/&gt;
    &lt;Preview imageSrc={this.state.previewImage} documentUrl={this.state.documentUrl}/&gt;
  &lt;/div&gt;
);   } });
</code></pre>

<p>```</p>

<h4>Preview is simple component, that may be described direcrly in Document Box</h4>

<p>```js
var Preview = React.createClass({</p>

<p>render: function() {
    return (
      &lt;div className='documentPreview'&gt;
        &lt;a href={this.props.documentUrl} target=’_blank’&gt;
          &lt;img src={this.props.imageSrc}/&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    )
  }
})
```</p>

<h4>Document list, that handles clicks on each element</h4>
<p>```
var DocumentList = React.createClass({</p>

<p>activate: function(doc, index){
    this.props.activeChange(doc,index);
  },
  render: function() {
    var documents = this.props.data.map(function(doc, index) {
      var classes = React.addons.classSet({
          ‘document’: true,
          ‘active’: index === this.props.activeId // this.props.isActive
        });
      return (
        &lt;div className={classes} key={index} onClick={this.activate.bind(this, doc, index)}&gt;
          {doc.name}
        &lt;/div&gt;
      );</p>

<pre><code>}, this);

return(
  &lt;div className='documentList'&gt;
    {documents}
  &lt;/div&gt;
);   }
</code></pre>

<p>});
```</p>

<h4>Now we can compose DocumentBrowser views by tabs in app.js</h4>
<p>```
var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;</p>

<p>var App = React.createClass({
  render() {
    return (
      &lt;div&gt;
        <tabs>
          <tablist>
            <tab>Type A</tab>
            <tab>Type B</tab>
            <tab>Type C</tab>
          </tablist>
          <tabpanel>
            <documentbox type="typeA"></documentbox>
          </tabpanel>
          <tabpanel>
            <documentbox type="typeB"></documentbox>
          </tabpanel>
          <tabpanel>
            <documentbox type="typeC"></documentbox>
          </tabpanel>
        </tabs></p>

<pre><code>  &lt;/div&gt;
);   } });
</code></pre>

<p>React.render(<app></app>, document.getElementById(‘react-container’));</p>

<p>```</p>

<h4>How it might be styled (app/styles/application.sass)</h4>
<p>```sass
html, body
  margin: 20px
  *
    box-sizing: border-box</p>

<p>.react-tabs [role=tablist]
  margin: 0
  li[role=tab][aria-selected=true]
    border-bottom: 1px solid #aaa</p>

<p>.documentBox
  display: flex
  flex-flow: row nowrap
  border-right: 1px solid #aaa
  border-bottom: 1px solid #aaa
  min-height: 600px
.documentList
  min-height: 600px
  flex: 0 0 200px
  border-right: 1px solid #aaa
  border-left: 1px solid #aaa
  overflow: hidden</p>

<p>.document
    padding: 10px 30px
    border-bottom: 1px solid #aaa
    cursor: pointer
    &amp;.active
      font-weight: bold</p>

<p>.documentPreview
  flex: 1 0
  padding: 30px
  img
    width: 100%
```</p>

<h4>Include app, document-browser components and styles into index.slim</h4>
<p>```
doctype html
html
  head</p>

<pre><code>    &lt;!-- Hammer reload --&gt;
      &lt;script&gt;
        setInterval(function(){
          try {
            if(typeof ws != 'undefined' &amp;&amp; ws.readyState == 1){return true;}
            ws = new WebSocket('ws://'+(location.host || 'localhost').split(':')[0]+':35353')
            ws.onopen = function(){ws.onclose = function(){document.location.reload()}}
            window.onbeforeunload = function() { ws = null }
            ws.onmessage = function(){
              var links = document.getElementsByTagName('link');
                for (var i = 0; i &lt; links.length;i++) {
                var link = links[i];
                if (link.rel === 'stylesheet' &amp;&amp; !link.href.match(/typekit/)) {
                  href = link.href.replace(/((&amp;|\?)hammer=)[^&amp;]+/,'');
                  link.href = href + (href.indexOf('?')&gt;=0?'&amp;':'?') + 'hammer='+(new Date().valueOf());
                }
              }
            }
          }catch(e){}
        }, 1000)
      &lt;/script&gt;
    &lt;!-- /Hammer reload --&gt;
  


script src="https://www.parsecdn.com/js/parse-react.js"
</code></pre>

<p>body
    #react-container
    script type=”text/jsx” src=”app/components/document-box.js”
    script type=”text/jsx” src=”app/components/app.js”
```</p>

<blockquote>
  <p>NOTE: it’s important to add <code>type="text/jsx"</code> for your jsx templates, so incude them avoiding Hammer @javascript tag.</p>
</blockquote>

<h4>Time to add some Parse magic</h4>
<ul>
  <li>Login on Parse.com</li>
  <li>Create new App</li>
  <li>Create new Class in Data tab</li>
  <li>Add some cols, for example:
    <ul>
      <li>type: string</li>
      <li>name: string</li>
      <li>preview: file</li>
      <li>file: file</li>
    </ul>
  </li>
  <li>Fill few records with your data</li>
  <li>Copy your App ID and Javascript API keys into head of <code>app.js</code></li>
</ul>

<p><code>
Parse.initialize("M48MDA352i6cXXXXXXXXXXXXXXtjt6fN4KlFSumT",
                   "q3ApsBlBEkSsXXXXXXXXXXXXXXIjXcxj9CxNqrNW");
</code></p>

<h4>Add ParseReact mixin to DocumentBox component</h4>
<p><code>
  mixins: [ParseReact.Mixin],
  observe: function() {
    var type = this.props.type
    return {
      documents: (new Parse.Query('document')).equalTo("type", type).ascending('createdAt')
    }
  }
</code></p>

<h5>Now documents will be available via <code>this.data.documents</code> in this component.</h5>
<p>##### To get url of file just add <code>.url()</code> in the end of field name.</p>

<p>````
…</p>

<p>handleActiveChange: function(doc, index){
    this.setState({
      activeDocId: index,
      previewImage: doc.preview.url(),
      documentUrl: doc.file.url()
    })
  },</p>

<p>render: function() {
    return (
      &lt;div className="documentBox"&gt;
        &lt;DocumentList activeId={this.state.activeDocId} data={this.data.documents} activeChange={this.handleActiveChange}/&gt;
        &lt;Preview imageSrc={this.state.previewImage} documentUrl={this.state.documentUrl}/&gt;
      &lt;/div&gt;
    );
  }
…</p>

<p>````</p>

<blockquote>
  <p>Also, you can install jsx-transformer. Run <code>npm install -g react-tools</code> in the terminal. Set your precompiler directory with <code>jsx js/app/ js/build/</code> and change react components source pathes in index.slim</p>
</blockquote>