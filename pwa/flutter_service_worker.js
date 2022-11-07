'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "131c7324aad6ece742b9512641ecdf4a",
"res/splash_logo.png": "c87671fdac07b429f265b350166e74eb",
"index.html": "7b26581627151a7f02e289f7aed26aac",
"/": "7b26581627151a7f02e289f7aed26aac",
"main.dart.js": "6464ac036278d3c7c6393148966195a6",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"style/style.css": "1dbcd619d8b34eba7300cd327b98b554",
"script/loading.js": "42ef1baf8ca62f6b1de8375d3d553e4c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5541fcc9a732e23b2a9235046226f994",
"assets/AssetManifest.json": "b6aa17c40375d0c8a039693943fa5a8e",
"assets/NOTICES": "8f5e4c89982df9ab2bef365bb28f4da9",
"assets/FontManifest.json": "80c1cddd56330ab0741424e615cc6de0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/ekaterina.png": "8cd6ee68f7e7e5d762b72a48e8f79ca9",
"assets/assets/images/3x/lenta_icon.png": "b2fac67374a5cd0e70834c9eb2aab7cb",
"assets/assets/images/3x/banner_decoration.png": "a581057d5e18a1fbeb0903d849acdf0c",
"assets/assets/images/3x/lukoil_icon.png": "c6e8a086dc0a2913e8f82c0fb0a7dc5d",
"assets/assets/images/3x/banner_shield.png": "b0b5e468893ce38320843528a37ab4b9",
"assets/assets/images/3x/market_icon.png": "235c6694fe06c9034998ddb4c4b7485d",
"assets/assets/images/profile_avatar.png": "62beaeef8bf5dfd439f7284466f12d00",
"assets/assets/images/mariya.png": "aa1c2119661e08184559eb36e5fe71e8",
"assets/assets/images/lenta_icon.png": "743eda4a3ad8ab2153cb836c6205274c",
"assets/assets/images/card_image_001.jpg": "94531ed6e4fe7b1fd8b675cbb2744a65",
"assets/assets/images/banner_decoration.png": "a581057d5e18a1fbeb0903d849acdf0c",
"assets/assets/images/lukoil_icon.png": "1dce94172d76acfc2a8ea9640836d511",
"assets/assets/images/card_image_002.jpg": "bbcd7d3eefcecda6633351741c5cf419",
"assets/assets/images/card_image_003.jpg": "b03fc13bb9833a308b05c960bc0efc92",
"assets/assets/images/banner_shield.png": "b0b5e468893ce38320843528a37ab4b9",
"assets/assets/images/market_icon.png": "a7b1177d3094f3c6f0e9edda0295975f",
"assets/assets/images/vladimir.png": "5cf6f26542bcde4d28641490b90a2c7b",
"assets/assets/images/2x/lenta_icon.png": "6bbd8182a1f97abe3f461afd4d7ad69e",
"assets/assets/images/2x/banner_decoration.png": "48ae8820536832be7a810f0fc0d1ce6e",
"assets/assets/images/2x/lukoil_icon.png": "2af16093d6ad365a405989ae88bb31a4",
"assets/assets/images/2x/banner_shield.png": "80e2e24eb21b84285a96188d639e46ec",
"assets/assets/images/2x/market_icon.png": "0d8c784ad3e6ee66e1f6c2ed9d8a6255",
"assets/assets/images/evgeniy.png": "6398be19e9ac93cf16465ed697b0972a",
"assets/assets/icons/passport.svg": "908f9e90dc676da4811be57628b7773b",
"assets/assets/icons/search.svg": "fca0a596b3b452e3ffdd75483607bbe2",
"assets/assets/icons/Method_Visa.svg": "479db14d21831150d76689e16672834d",
"assets/assets/icons/debt.svg": "fd162b30180e716977d3e0a6df38c928",
"assets/assets/icons/friend.svg": "daf45696b9ee022b810305452a76612a",
"assets/assets/icons/icon%252024px_clear.svg": "174ff45f8388c59f6588c04a7143bbc1",
"assets/assets/icons/ic_main.svg": "76f70f80610b46021eda8e2f0d280194",
"assets/assets/icons/request%2520money.svg": "70a63bbcd7521c39cb5f712c3dd8b5f3",
"assets/assets/icons/silver%2520card.svg": "7abe891acf1f1d33c239940c5f220da7",
"assets/assets/icons/add_icon_yellow.svg": "ff80c3c4eb277ba6f3e2650e5b4c1787",
"assets/assets/icons/home.svg": "b69c49d2130c2713476d0bd38bf28009",
"assets/assets/icons/by%2520details.svg": "19d2e54163641aaa4b8ad2c6e7d0c3c7",
"assets/assets/icons/cancel.svg": "b67616b89eb633724948d1049f49542f",
"assets/assets/icons/ic_plus.svg": "8d8f03181c5f03b00ce26eb74abd8b81",
"assets/assets/icons/qr%2520pay.svg": "543d589f7edf7def4d0310449a5dcd4d",
"assets/assets/icons/credit_card.svg": "957f891b48f19e81346c568367c05db5",
"assets/assets/icons/services.svg": "6cce486434c6134f65456ea252810b94",
"assets/assets/icons/ic_minus.svg": "b76fbe35a7ef6db9e31aad116007fc12",
"assets/assets/icons/service.svg": "a4c7cd57e815b8bdf72f6794e44fdf69",
"assets/assets/icons/between%2520accounts.svg": "648973631f3c1c5146c023662769d935",
"assets/assets/icons/purchase.svg": "11d72e763eb37488335e10f6bb439a91",
"assets/assets/icons/add_icon_green.svg": "0d0861ac564721b0255552e25e1a324a",
"assets/assets/icons/withdraw%2520cash.svg": "373277314de8e82da87d6678f9322e16",
"assets/assets/icons/settings.svg": "44ac8ce292b2a760773b3b4c651f2e90",
"assets/assets/icons/arrow%2520up.svg": "ad50b7929632415a2707c0a6394acded",
"assets/assets/icons/transfer%2520to%2520card.svg": "0a787a8e27aed41bb6980a4f57b74115",
"assets/assets/icons/tv.svg": "3a9cbde481e5c7f7bebe4b00eead9a40",
"assets/assets/icons/card%2520transfer.svg": "7d1a40b3ff10827cb6305987f09f85db",
"assets/assets/icons/card_red.svg": "e9f7a6a06d52b79a9d30670572749614",
"assets/assets/icons/notification_on.svg": "16a5b505ac84a72555f6d3e5de18cdf3",
"assets/assets/icons/arrow%2520down.svg": "2c4342b2a2a39edeab44328c79045186",
"assets/assets/icons/internet.svg": "850c798304a9bef46090057fb70247c3",
"assets/assets/icons/arrow%2520right.svg": "1032b8b03dc46b2a6b5588aecc02779a",
"assets/assets/icons/dashed_border_plus.svg": "c3ce96f7330b2ed0ce4abc650db31063",
"assets/assets/icons/auto%2520pay.svg": "2341b0c44b3ab606635b0db8c0ca50b6",
"assets/assets/icons/icon%252024px_info.svg": "be03b1268d4861096114dbcba98046f8",
"assets/assets/icons/chi.svg": "975b9f56d8f3c8904b457fd024c39a57",
"assets/assets/icons/card_savings.svg": "b4ea658de060330b0075f736f1e4bb72",
"assets/assets/icons/Method_Mir.svg": "ed988df0639e2086c285ada759bee7a4",
"assets/assets/icons/chat.svg": "cfe7d6d13bca24228e0d4d052298d55c",
"assets/assets/icons/phone%2520pay.svg": "73fbb1a60137f33186c6a7152a568d4c",
"assets/assets/icons/pig.svg": "79128736a5392a87650b316240474e1e",
"assets/assets/icons/sun.svg": "a89807bd8125cc97b93ca37a2494978b",
"assets/assets/icons/arrow%2520left.svg": "c3b7a959ab59b3be70f357efe80b89f1",
"assets/assets/icons/public%2520utilities.svg": "263f660d599792a513d32fd2afebecae",
"assets/assets/icons/arrow_right_gray.svg": "75aad2f105e5c933bc5e5c6211051f32",
"assets/assets/icons/exit.svg": "d6a03d9a7cba3344694e59d6d0503a7f",
"assets/assets/icons/call.svg": "17c593a50eb06ade89593e981c3b6410",
"assets/assets/icons/notification_off.svg": "8bb673cd5595ccdb4cd86f5af07deab3",
"assets/assets/icons/car.svg": "9662ea8921b306f4c6a07a4ee8f42325",
"assets/assets/icons/gold%2520card.svg": "de7f0ece44c6b7cb6671738a8bd1e262",
"assets/assets/icons/calendar.svg": "caa912a3c458bccbb411917117b4cd7c",
"assets/assets/icons/eye%2520off.svg": "0dabc3aacfe55b73e7274b01c3f517da",
"assets/assets/icons/black%2520card.svg": "2918a2e88572ea848beb79d25412563a",
"assets/assets/icons/payments.svg": "69998ede62a2242f3cec07452e5b4a1e",
"assets/assets/icons/Method_Visa_gray.svg": "dc93d4cb52aeeb2413e7c9417a678e79",
"assets/assets/icons/eye%2520on.svg": "5418ec75ecb24163a8e9060e1d7c5112",
"assets/assets/icons/social%2520media.svg": "c85ec8aa4b8026288b72cc09306a838f",
"assets/assets/icons/open%2520an%2520account.svg": "908e1eb65598187d3a826c017d4b8c85",
"assets/assets/icons/mobile%2520connection.svg": "7bbacf0117bb258518ebf117165eb97b",
"assets/assets/icons/debit_card.svg": "31a854233309d06cd21d273c1718de96",
"assets/assets/icons/history.svg": "60be14e775691f51d6f84e4e6d5bb545",
"assets/assets/icons/sniels.svg": "18b873bd7ed08fd0bfd025ce51e13904",
"assets/assets/icons/Method_Mastercard.svg": "83d83f56575b37379c935dc21fbfbfd6",
"assets/assets/fonts/Rubik-MediumItalic.ttf": "510d0b3b67b4b1073bcaa961b1d8fc6d",
"assets/assets/fonts/Rubik-Bold.ttf": "f70066a21af08705d0503ad692446de1",
"assets/assets/fonts/Rubik-SemiBoldItalic.ttf": "8f5f4daa5488df8814ffa00cdae5ea4d",
"assets/assets/fonts/Rubik-Light.ttf": "98df4209c27b1be565511cc954fa307d",
"assets/assets/fonts/Rubik-Medium.ttf": "bb476f36e32039a411d1f3afaf5a81af",
"assets/assets/fonts/Rubik-ExtraBoldItalic.ttf": "df3262d88de88ab5b32e47c2b79eb964",
"assets/assets/fonts/Rubik-Black.ttf": "f7672ebc1b97272bdcbb9212f05f263d",
"assets/assets/fonts/Rubik-Italic.ttf": "163a47c632b9876470b6e78922adbaf9",
"assets/assets/fonts/Rubik-LightItalic.ttf": "7554406307bd4872a640e69b56317f5a",
"assets/assets/fonts/Rubik-SemiBold.ttf": "75600733020f310eca3713eee83ddb56",
"assets/assets/fonts/Rubik-BlackItalic.ttf": "4189902bdb53c83f1ee124beb3ce7fc3",
"assets/assets/fonts/Rubik-ExtraBold.ttf": "9f8c4a8202ef48c56a027ef49fbb2e35",
"assets/assets/fonts/Rubik-Regular.ttf": "e100d91366c744a9fcf055b7c5af9961",
"assets/assets/fonts/Rubik-BoldItalic.ttf": "8d5522a532a05a5a962b9e336261e1fb",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
