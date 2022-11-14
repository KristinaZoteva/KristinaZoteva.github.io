window.addEventListener('load', function (ev) {
  let loading = document.querySelector('#icon');
  let bottom = document.querySelector('#bottom');

  _init();

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


function _init() {
  handleInitialSearch();

  let search = getLocalSearch() ?? document.location.search;
  let iconUrl = getQueryParam(search, 'iconUrl');

  if (iconUrl) changeFavIcon(iconUrl);
}


