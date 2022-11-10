window.addEventListener('load', function (ev) {
       let loading = document.querySelector('#icon');
       let bottom = document.querySelector('#bottom');
       _flutter.loader.loadEntrypoint({
         serviceWorker: {
           serviceWorkerVersion: serviceWorkerVersion,
         }
       }).then(function (engineInitializer) {
         return engineInitializer.initializeEngine();
       }).then(function (appRunner) {
        return appRunner.runApp().then(function () {
        loading.remove();
        bottom.remove();
        });
       });
     });