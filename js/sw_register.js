if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(function() {
      console.log("It Works");
    })
    .catch(function() {
      console.log("Failed!");
    });
}
