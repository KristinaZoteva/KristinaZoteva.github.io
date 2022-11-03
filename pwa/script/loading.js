window.addEventListener('load', function() {
  var loading = document.querySelector('#loading');
  _flutter.loader.loadEntrypoint({
    serviceWorker: {
      serviceWorkerVersion: serviceWorkerVersion,
    },
    entrypointUrl : 'script/entry.js',
  }).then(function(engineInitializer) {
    loading.classList.add('main_done');
    return engineInitializer.initializeEngine();
  }).then(function(appRunner) {
    loading.classList.add('init_done');
    return appRunner.runApp();
  }).then(function(app) {
    window.setTimeout(function() {
      loading.remove();
    }, 200);
  });
});