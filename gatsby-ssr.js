const React = require("react")

const HeadComponents = [
    /*Google Adsense Script*/
    <script
        data-ad-client="ca-pub-7391945618852590"
        async
        src="https://pagead2.googlesyndication.com.co/pagead/js/adsbygoogle.js">
    </script>
]

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}