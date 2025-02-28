
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.25f4e85953c08e1c7298.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8919.latest.en.362ec8a1781caa2de569.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6386.latest.en.a195dc32f3dbe34d6aa5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.en.00d0e773ceb74385737a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.0861dbc67095090200c4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.en.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9317.latest.en.eb1dbd55607a377a8342.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.en.8ff27283522475e94436.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.en.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7616.latest.en.78be60dbd476ce31d850.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/434.latest.en.0636d0a04128035f36e8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8096.latest.en.91ebd36e51df70bec6d2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8398.latest.en.e3e2513c9b088fb5d008.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4619.latest.en.70cd18699d8305930050.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.d81e2279224f649f5112.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/8919.latest.en.57ef3369c9cd93bde4db.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.19558d19ece777c39c33.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.8039276cabb7faecfb04.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/chivo/chivo_n4.bf4dc1c0e4649d2f5a28281870307415c2a9c652.woff2?h1=c3RvcmUudmFudGFjaGVhdHMud2lu&hmac=687cc643f59f59fd684369278642a0f84da71837a3debe57d93e63d592e8120d","https://fonts.shopifycdn.com/chivo/chivo_n7.d83b4aaa520af8b24ea0f1eb81a6d2d8b1a2ad49.woff2?h1=c3RvcmUudmFudGFjaGVhdHMud2lu&hmac=108f3ab809ef1663d818d0a6913d82ee1dcc76c4490d6147487cb01b343d833f","https://fonts.shopifycdn.com/bauer_bodoni/bauerbodoni_n4.8461148e5de43869667fbe64194eb80450bb3636.woff2?h1=c3RvcmUudmFudGFjaGVhdHMud2lu&hmac=7ad3e9c655bee6506d5fcd4855042057a9770ad79d339b57eeff309cff3d1f3b","https://fonts.shopifycdn.com/bauer_bodoni/bauerbodoni_n7.6ba4277576da62f25b86b1485f3bf74f24b35351.woff2?h1=c3RvcmUudmFudGFjaGVhdHMud2lu&hmac=49245e10a8643098869fa0cd0aa2027496253097caaed139209f617e1e9dc13d"];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  