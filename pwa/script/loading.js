window.addEventListener('load', function (ev) {
       let loading = document.querySelector('#loading');
       _flutter.loader.loadEntrypoint({
         serviceWorker: {
           serviceWorkerVersion: serviceWorkerVersion,
         }
       }).then(function (engineInitializer) {
         loading.classList.add('main_done');
         return engineInitializer.initializeEngine();
       }).then(function (appRunner) {
         loading.classList.add('init_done');
         return appRunner.runApp();
       }).then(function (app) {
         // Wait a few milliseconds so users can see the "zoooom" animation
         // before getting rid of the "loading" div.
         window.setTimeout(function () {
           loading.remove();
         }, 800);
       });
     });