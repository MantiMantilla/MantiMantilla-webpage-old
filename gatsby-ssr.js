const React = require("react")

const HeadComponents = [
    /*Google Analytics Scripts (Google Search Console)*/
    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PHR3L63QNF">
    </script>,
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'G-PHR3L63QNF');
    </script>,
    /*Google Adsense Script*/
    <script
        data-ad-client="ca-pub-7391945618852590"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
    </script>
]

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}