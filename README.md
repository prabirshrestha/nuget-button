# NuGet Button
Javascript helper for generating nuget.org style Install-Package buttons.

## Usage

###Add the following javascript code just before the end of the body tag.

	<script type="text/javascript">
		(function () {
			var nb = document.createElement('script'); nb.type = 'text/javascript'; nb.async = true;
			nb.src = 'http://s.prabir.me/nuget-button/0.1/nuget-button.min.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(nb, s);
		})();
	</script>

###Then add the following html code to get the nuget button rendered.

	<pre class="nuget-button">Install-Package SimpleJson</pre>

Replace SimpleJson with appropriate package name.

### Fixed sized
Add pre tag inside of a fixed width div
	
	<div style="width: 500px"><pre class="nuget-button">Install-Package SimpleJson</pre></div>

# License
Copyright 2011, Prabir Shrestha

Dual licensed under the MIT or GPL Version 2 licenses.
