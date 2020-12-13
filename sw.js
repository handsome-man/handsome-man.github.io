/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01-python/loads_dumps/index.html","a97a95836f03791c670f09814d915e76"],["/01-python/python处理时间/index.html","4050df2ba743834db5a284991e701b90"],["/01-python/操作excel/openpyxl/index.html","ddd68a866b609fef01fb1de5051681fa"],["/02-数据库/mysql/数据库：索引/index.html","997b5e928dac9b0ae926987a2ebac0b7"],["/03-网络基础/http与https/index.html","a330eff853e9c8a9ae4a433f7fdb4de5"],["/05-git/0-git/index.html","e9d669c57953b0473129d11e0ee89d71"],["/05-git/gitlab/index.html","2cfe007ecc099bc62c65b2327e71511b"],["/06-爬虫/01-爬虫入门/爬虫介绍/index.html","ae4f0d9183832d93311a83b8dda44a58"],["/Linux/linux基本命令/index.html","64064f436f9f182d63afbb4ab8d06272"],["/Linux/linux进程管理/index.html","a451f3c1b24fa920ed10f4166a469adf"],["/Linux/文件及文件夹权限/index.html","5ae516b17a18c06a80337bcd1a47fd74"],["/Linux/文件查找/index.html","7a8ab67d7c0b4e5432f11fc935a84c0f"],["/Linux/用户和组/index.html","9147e295ceba2461fc1e7d9febaa644f"],["/about/index.html","de38a802c38fb6e4e21592782c0eb8e6"],["/archives/2020/03/index.html","7aa9340a0a53110b95bbc9b12cf80b7f"],["/archives/2020/06/index.html","298ecf1ff23e357870ee2e80146d38e2"],["/archives/2020/07/index.html","8e358f5e945e75c0b2880d35cdb1471b"],["/archives/2020/07/page/2/index.html","819b7f587391051eba9c2706366ee5b3"],["/archives/2020/08/index.html","fd7b00caadea2964e7c55a1795c3c277"],["/archives/2020/09/index.html","5e3d349b1b44e167a4b653abdf7ea70d"],["/archives/2020/11/index.html","0a08b071af761164902aa85cc79c994d"],["/archives/2020/12/index.html","da96836e7884ce7a6e68ce9d10709522"],["/archives/2020/index.html","063b771f5d29366cb7d6fa3d57a73cda"],["/archives/2020/page/2/index.html","877849909f83930137bc2f30a3a812e9"],["/archives/2020/page/3/index.html","52cc630df1d5fcbcbd69a1ef3c98703b"],["/archives/index.html","78a326ae166ced389560b9ffe32a17d8"],["/archives/page/2/index.html","90c601b83fc1f91a313ce10691276f8e"],["/archives/page/3/index.html","e27da7f7583e23fca38057c6365a50bb"],["/categories/docker/index.html","8668c3382a7e3482eecf02df7a018a5c"],["/categories/git/index.html","77c16ea143fe3c34acc6b2a20738aca0"],["/categories/hexo/index.html","04304d1f2cac2e96f05d316ee08d59ee"],["/categories/index.html","830483312f4b41043c5ec2528dfa39c4"],["/categories/kafka/index.html","f18c52f1b048f31a71e2af8529f8b506"],["/categories/linux/index.html","0be3d67699fa8f4780868e48040cec05"],["/categories/openpyxl/index.html","e382fc98993a4c943cd56d06f0e8a751"],["/categories/python/index.html","29fa1daadeac26d954435a9cec3c4967"],["/categories/数据库/index.html","1e1dbc53085a93f5a5cf0936bfb59068"],["/css/main.css","7a671f862c3a622d50434f13cd1e9700"],["/docker学习/docker基本命令/index.html","ae78d79ec2d03860aacef344f06b50f5"],["/docker学习/python基础镜像/index.html","97d02ba22b813cab6ca761b6aebb168c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","d056f312eade224b2fb407d3b0a9b4a7"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","326384c0ac108beb082a3527c874858b"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","be06535ae4d75934c41eaf9ada1137f8"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","bc03caeac419ebd791404a40e779f413"],["/page/3/index.html","6f08e798acf654188802b9446263ea86"],["/pycharm/Pycharm的Git使用/index.html","83be343677e51620d7430e6aef0c5e7c"],["/pycharm/Pycharm的快捷键/index.html","7da7308c8d02109015cbb360bed7cebe"],["/sw-register.js","dbdb3c9a0aef8f76b8f20ffbfdf34fc6"],["/tags/docker/index.html","0e745ce6dbc5924b40c11b44ad80f413"],["/tags/excel/index.html","949b7be8990dd27831dc3543264ac7c2"],["/tags/git/index.html","c77af5429bdfd03ad5375a86ccd680df"],["/tags/gitlab/index.html","e9f70625169a79797b79836725adc361"],["/tags/hexo/index.html","c607969cfd475103a6c91d83b332a962"],["/tags/index.html","54aa45714b0cec3fc901d2881612d1c2"],["/tags/kafka/index.html","c66913945fd8d13571aae3d2a1c44516"],["/tags/linux/index.html","829a7f58a480f061b8c54bb656edb1e1"],["/tags/mysql/index.html","ed628e7b40d786900276075f33f46aae"],["/tags/openyxl/index.html","02aab0a03a93cf8d8f6479109556edd2"],["/tags/python/index.html","4fdb6103b6303ca278eb7b9d21a68c88"],["/tags/个人博客/index.html","dde27afb7f9ec9c7e531454c9d749cac"],["/tags/基础镜像/index.html","5afef5dfbc84be33f183b56825bc0850"],["/tags/数据库/index.html","3a28381bac6914869d783f09a9be2b6b"],["/tags/时间处理/index.html","a69c7b1b9a6edba41aefa7f5cd43e60d"],["/tags/消息中间件/index.html","72f5f7eff3008de96d18b81025e7a220"],["/tags/索引/index.html","d78b3b3fcf5e056e34d8119150d76781"],["/个人博客/hexo(一)：搭建个人博客/index.html","e4ffd939f9641108123c44a2544315d6"],["/个人博客/hexo(三)：添加valine评论系统/index.html","3cb4a9c9279f08ffcb545c08ad390a8d"],["/个人博客/hexo(二)：next主题使用/index.html","92685229fa8da8c00274012a2ea29eac"],["/消息中间件/kafka/index.html","28ef5b29b61ae8481c33ffa5d4bf4d36"],["/项目/python爬取疫情实战/index.html","5f9d7df058c03f455592fc1b66a0e44c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
