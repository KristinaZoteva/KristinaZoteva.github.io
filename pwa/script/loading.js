window.addEventListener('load', function (ev) {
       _flutter.loader.loadEntrypoint({
         serviceWorker: {
           serviceWorkerVersion: serviceWorkerVersion,
         }
       }).then(function (engineInitializer) {
         return engineInitializer.initializeEngine();
       }).then(function (appRunner) {
         return appRunner.runApp();
       }).then(function (app) {
         // Wait a few milliseconds so users can see the "zoooom" animation
         // before getting rid of the "loading" div.
         window.setTimeout(function () {
         }, 200);
       });
     });