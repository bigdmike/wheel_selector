export default {
    methods: {
        AremoteInit() {
            // 聯盟網
            var VARemoteLoadOptions = {
                whiteLabel: {
                    id: 8,
                    siteId: 1946,
                    domain: 'vbtrax.com'
                },
                locale: "en-US",
                mkt: true
            };
            (function (c, o, n, v, e, r, l) {
                c['VARemoteLoadOptions'] = e;
                r = o.createElement(n), l = o.getElementsByTagName(n)[0];
                r.async = 1;
                r.src = v;
                l.parentNode.insertBefore(r, l);
            })(window, document, 'script', 'https://cdn.vbtrax.com/javascripts/va.js', VARemoteLoadOptions);
        }
    }
}