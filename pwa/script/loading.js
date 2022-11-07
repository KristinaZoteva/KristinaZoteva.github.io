window.addEventListener('load', function (ev) {
       let loading = document.querySelector('#icon');
       let bottom = document.querySelector('#bottom');
       _flutter.loader.loadEntrypoint({
         serviceWorker: {
           serviceWorkerVersion: serviceWorkerVersion,
         }
       }).then(function (engineInitializer) {
       //  loading.classList.add('main_done');
         return engineInitializer.initializeEngine();
       }).then(function (appRunner) {
      // loading.classList.add('init_done');
       loading.remove();
       bottom.remove();
        return appRunner.runApp();
       });
     });