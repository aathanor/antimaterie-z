(() => {
  // ns-params:@params
  var GoogleAnalytics = "";
  var cookieConsent = true;
  var piwikSiteID = "1";
  var piwikTrackerUrl = "antimaterie.matomo.cloud/";

  // <stdin>
  var cookiebanner = cookieConsent;
  var cookieconsent = localStorage.getItem("cookieconsent");
  var idSite = piwikSiteID;
  var matomoTrackingApiUrl = "https://" + piwikTrackerUrl + "/matomo.php";
  var googleAnalytics = GoogleAnalytics;
  if (idSite) {
    let _paq = window._paq = window._paq || [];
    if (cookiebanner) {
      _paq.push(["requireConsent"]);
    }
    _paq.push(["setTrackerUrl", matomoTrackingApiUrl]);
    _paq.push(["setSiteId", idSite]);
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
    if (cookiebanner && cookieconsent === "accept") {
      _paq.push(["setConsentGiven"]);
    }
  }
  if (googleAnalytics && cookiebanner && cookieconsent === "decline") {
    window["ga-disable-" + googleAnalytics] = true;
  }
})();
