# NuGet Button
Javascript helper for generating nuget.org style Install-Package buttons.

## Usage

###Add the following javascript code just before the end of the body tag.

	<script type="text/javascript">
		(function () {
			var nb = document.createElement('script'); nb.type = 'text/javascript'; nb.async = true;
			nb.src = 'http://s.prabir.me/nuget-button/0.2.1/nuget-button.min.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(nb, s);
		})();
	</script>

###Then add the following html code to get the nuget button rendered.

#### Full Stretch with link (default)
	
	<pre class="nuget-button">Install-Package Facebook</pre>

#### Full Stretch with link disabled (same as seen in nuget.org)

	<pre class="nuget-button" data-nugetbutton-link="false">Install-Package AzureToolkit</pre>

#### Fixed Width

	<div style="width: 420px;"><pre class="nuget-button">Install-Package SimpleJson</pre></div>

#### Minimal Required Width

	<div style="float:left;"><pre class="nuget-button">Install-Package FluentHttp.Core</pre></div><div style="clear: left"></div>

#### Custom size with minimal required width

	<div style="float:left; font-size:0.5em"><pre class="nuget-button">Install-Package FluentHttp.Core</pre></div><div style="clear: left"></div>

### Redirect to custom link

	<pre class="nuget-button" data-nugetbutton-link="http://nuget.prabir.me/nuget/Packages(Id='Facebook',Version='5.2.0.0')">Install-Package Facebook</pre>

# License
Copyright 2011, Prabir Shrestha

Dual licensed under the MIT or GPL Version 2 licenses.
