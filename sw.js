/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01-python/loads_dumps/index.html","b49326e0a776a309146a761e488a47a9"],["/01-python/python处理时间/index.html","5d700f87d6ff093d2c7303af1d7a135a"],["/01-python/操作excel/openpyxl/index.html","9b7110414de99a0a65bff0148d6b8268"],["/02-数据库/mysql/数据库：索引/index.html","8f3e6f457db9bc7369b100694bc2789a"],["/03-网络基础/http与https/index.html","6022bcb30dcd7d1b92e8f012bc3611f0"],["/05-git/0-git/index.html","5d56b9b23ad4d602cda27c3b859b7303"],["/05-git/gitlab/index.html","6784b0fe910ea8579fcc21c077987231"],["/06-爬虫/01-爬虫入门/爬虫介绍/index.html","b7e241c5fee180cb1c775f8ba4423f31"],["/Linux/linux基本命令/index.html","a09cbf7b849ffc73b3ad51d3cd61393b"],["/Linux/linux进程管理/index.html","7a19e8179daaa06264bbdc61572a32e6"],["/Linux/文件及文件夹权限/index.html","86c9219d812f35891f00a635ce817570"],["/Linux/文件查找/index.html","02d5b720e1126445e8610f57f3de0009"],["/Linux/用户和组/index.html","0291c66f343f2c2a782aae39c2c0b86f"],["/about/index.html","320529373a17be7b1af74fa3aa79b5f8"],["/archives/2020/03/index.html","af79eacf3fa92878043718d110cf8781"],["/archives/2020/06/index.html","2060d2fda7917d4077d1ffc98c6250a7"],["/archives/2020/07/index.html","b5df06335fdb73dec706d946a50bc9aa"],["/archives/2020/07/page/2/index.html","e36e770a023d9b148423a6869844a591"],["/archives/2020/08/index.html","3f59243e6240383ea0ab22f2d9562177"],["/archives/2020/09/index.html","30567e6dd659e3ece3ed04a0bfdf4507"],["/archives/2020/11/index.html","e126fef32b2dc0fd318a985f3ab8aed0"],["/archives/2020/12/index.html","192265592dd3442203b9a2d42d2008dd"],["/archives/2020/index.html","7ba50d009c5f71b8a436cb1139607dfa"],["/archives/2020/page/2/index.html","88e73cf8145a92230f56f6f4dbadfede"],["/archives/2020/page/3/index.html","b16daf7cb7207c71ba7350fc60b5d04d"],["/archives/index.html","cf1d217f4e075f135ed21b5836c09cf6"],["/archives/page/2/index.html","8efe900273e80c32230c588e4778dccc"],["/archives/page/3/index.html","a431df78f0bf242849710de6624dc1b3"],["/categories/docker/index.html","f61829fa780822a0caf5123a207c2d7a"],["/categories/git/index.html","99c85446275e60dadc18e1e974ebd590"],["/categories/hexo/index.html","1323ffaa5105d39f30d2300d87b8bda1"],["/categories/index.html","87d3f895e99eebf5e010e6e0368c903b"],["/categories/kafka/index.html","b82bfc477202ff80cc76b19ad1cef441"],["/categories/linux/index.html","2f4129c34ef69ef8cd62680d46b47507"],["/categories/openpyxl/index.html","fc1bfb3d6e6446f84ef42a46141c3a8c"],["/categories/python/index.html","6bdd868aef1b89703d5176d341264746"],["/categories/数据库/index.html","8054d0ef8bccded05d23c637148b114c"],["/css/main.css","251ccde46af3746b2ca57f23adfe05ba"],["/docker学习/docker基本命令/index.html","6c8e0ee4d8984d8e4312dadd4479c61c"],["/docker学习/python基础镜像/index.html","3cf3d726b8049c6f1ffd9f00841c01a4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","1372a86368b7e71ebbced57235925d97"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","326384c0ac108beb082a3527c874858b"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","be06535ae4d75934c41eaf9ada1137f8"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","3a3b84fdf7197f27e7014692266a85cb"],["/page/3/index.html","2362b26c1993f04b331a502ffdeb3873"],["/pycharm/Pycharm的Git使用/index.html","7bdf0b0caa24c7c4de108f2e96e45151"],["/pycharm/Pycharm的快捷键/index.html","1984def58e582cfedae2666a137a6dca"],["/sw-register.js","66549531fbc375c890bcebd538a42a3b"],["/tags/docker/index.html","951e8515057475db0d0ffc081aefa74a"],["/tags/excel/index.html","49ebe7947fe5f39be81b16a5bd3574fd"],["/tags/git/index.html","80cdc477fbdee1842efe44048da5298b"],["/tags/gitlab/index.html","2a5857f40b21ddecf908d2003efa0832"],["/tags/hexo/index.html","1911c4fa8b2a836912dd4efe7494a999"],["/tags/index.html","d6ef7b8fb048c03676f4008a320f7b8c"],["/tags/kafka/index.html","258854e99d6ecd29ef7b967ab794e027"],["/tags/linux/index.html","73c554b54b476f842209b3ec34b9e2e4"],["/tags/mysql/index.html","575cf3badcd46e71f450248c27e9acbb"],["/tags/openyxl/index.html","55a7f95c7f8e1fc197cd2b50925195ae"],["/tags/python/index.html","045faa4820a6229e7a89be690ccf075c"],["/tags/个人博客/index.html","37354d71cdf17eacdad85495bdae2a33"],["/tags/基础镜像/index.html","ab7e7ee4b608f4e37a0ab0506414d22f"],["/tags/数据库/index.html","9ffd5fea48ca6702b01e654727a70e0e"],["/tags/时间处理/index.html","d2b2b651b9b8d325f35101c7133b21b3"],["/tags/消息中间件/index.html","03b7aa967469ea0490bcb9ad27931fd5"],["/tags/索引/index.html","ae9c9c4a236386dcdac89c29b4522792"],["/个人博客/hexo(一)：搭建个人博客/index.html","c61c6748356d3f30a6e8785ae0221c69"],["/个人博客/hexo(三)：添加valine评论系统/index.html","23f5a1c7eed19298156596a488fbf79e"],["/个人博客/hexo(二)：next主题使用/index.html","e3abbfc471d469b8ae4f32c8cd5f14e5"],["/消息中间件/kafka/index.html","3a2794c1b464ce7422ddd1b5f5fc0c5b"],["/项目/python爬取疫情实战/index.html","7e44f0576e1b1ea9a50904a51685833c"]];
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
