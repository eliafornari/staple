(function(){var requirejs,require,define,__inflate;(function(e){function a(e,t){var n=t&&t.split("/"),i=r.map,s=i&&i["*"]||{},o,u,a,f,l,c,h;if(e&&e.charAt(0)==="."&&t){n=n.slice(0,n.length-1),e=n.concat(e.split("/"));for(l=0;h=e[l];l++)if(h===".")e.splice(l,1),l-=1;else if(h===".."){if(l===1&&(e[2]===".."||e[0]===".."))return!0;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}if((n||s)&&i){o=e.split("/");for(l=o.length;l>0;l-=1){u=o.slice(0,l).join("/");if(n)for(c=n.length;c>0;c-=1){a=i[n.slice(0,c).join("/")];if(a){a=a[u];if(a){f=a;break}}}f=f||s[u];if(f){o.splice(0,l,f),e=o.join("/");break}}}return e}function f(t,n){return function(){return u.apply(e,s.call(arguments,0).concat([t,n]))}}function l(e){return function(t){return a(t,e)}}function c(e){return function(n){t[e]=n}}function h(r){if(n.hasOwnProperty(r)){var s=n[r];delete n[r],i[r]=!0,o.apply(e,s)}if(!t.hasOwnProperty(r))throw new Error("No "+r);return t[r]}function p(e,t){var n,r,i=e.indexOf("!");return i!==-1?(n=a(e.slice(0,i),t),e=e.slice(i+1),r=h(n),r&&r.normalize?e=r.normalize(e,l(t)):e=a(e,t)):e=a(e,t),{f:n?n+"!"+e:e,n:e,p:r}}function d(e){return function(){return r&&r.config&&r.config[e]||{}}}var t={},n={},r={},i={},s=[].slice,o,u;o=function(r,s,o,u){var a=[],l,v,m,g,y,b;u=u||r,typeof o=="string"&&(o=__inflate(r,o));if(typeof o=="function"){s=!s.length&&o.length?["require","exports","module"]:s;for(b=0;b<s.length;b++){y=p(s[b],u),m=y.f;if(m==="require")a[b]=f(r);else if(m==="exports")a[b]=t[r]={},l=!0;else if(m==="module")v=a[b]={id:r,uri:"",exports:t[r],config:d(r)};else if(t.hasOwnProperty(m)||n.hasOwnProperty(m))a[b]=h(m);else if(y.p)y.p.load(y.n,f(u,!0),c(m),{}),a[b]=t[m];else if(!i[m])throw new Error(r+" missing "+m)}g=o.apply(t[r],a);if(r)if(v&&v.exports!==e&&v.exports!==t[r])t[r]=v.exports;else if(g!==e||!l)t[r]=g}else r&&(t[r]=o)},requirejs=require=u=function(t,n,i,s){return typeof t=="string"?h(p(t,n).f):(t.splice||(r=t,n.splice?(t=n,n=i,i=null):t=e),n=n||function(){},s?o(e,t,n,i):setTimeout(function(){o(e,t,n,i)},15),u)},u.config=function(e){return r=e,u},define=function(e,t,r){t.splice||(r=t,t=[]),n[e]=[e,t,r]},define.amd={jQuery:!0}})(),__inflate=function(name,src){var r;return eval(["r = function(a,b,c){","\n};\n//@ sourceURL="+name+"\n"].join(src)),r},define("lib/api/events",["require","exports","module"],function(e,t,n){t.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},t.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}}),define("lib/api/getters",["require","exports","module"],function(e,t,n){n.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}}),define("lib/api/setters",["require","exports","module"],function(e,t,n){n.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}),define("lib/api/api",["require","exports","module","lib/api/events","lib/api/getters","lib/api/setters"],function(e,t,n){function m(e){return!!(e===""||e&&e.charCodeAt&&e.substr)}function g(e){return!!(e&&e.constructor&&e.call&&e.apply)}function y(e){return!!e&&e.nodeType===1&&e.nodeName.toUpperCase()==="IFRAME"}function b(e){var t=!1,n;for(n in i)if(i.hasOwnProperty(n)&&i[n]===e){t=!0;break}return t}function w(e){var t,n,r;for(t=0,n=f.length;t<n;t++){r=e(f[t]);if(r===!1)break}}function E(e){var t="",n,r,i;e.substr(0,2)==="//"&&(e=window.location.protocol+e),i=e.split("/");for(n=0,r=i.length;n<r;n++){if(!(n<3))break;t+=i[n],n<2&&(t+="/")}return t}function S(e){return e.contentWindow?e.contentWindow:e.contentDocument&&"parentWindow"in e.contentDocument?e.contentDocument.parentWindow:null}function x(e){var t=[],n;for(n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t}function T(e,t,n){n.callbacks[e]=n.callbacks[e]||[],n.callbacks[e].push(t)}function N(e,t){var n=!0,r;return t.callbacks[e]=[],w(function(t){r=t.callbacks[e]||[];if(r.length)return n=!1,!1}),n}function C(e,t,n){var r=S(n),i,s;if(!r.postMessage)return!1;i=n.getAttribute("src").split("?")[0],s=JSON.stringify({method:e,value:t}),i.substr(0,2)==="//"&&(i=window.location.protocol+i),i=i.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),r.postMessage(s,i)}function k(e){var t;return w(function(n){if(n.instance===e)return t=n,!1}),t}function L(e){var t;return w(function(n){if(S(n.element)===e)return t=n,!1}),t}function A(e,t){return function(n){var r=g(n),i=k(this),s=!r&&t?n:null,o=r&&!t?n:null;return o&&T(e,o,i),C(e,s,i.element),this}}function O(e,t,n){var r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r],e[s]=A(s,n)}function M(e,t,n){return e+"?url="+t+"&"+_(n)}function _(e){var t,n,r=[];for(t in e)e.hasOwnProperty(t)&&(n=e[t],r.push(t+"="+(t==="start_track"?parseInt(n,10):n?"true":"false")));return r.join("&")}function D(e,t,n){var r=e.callbacks[t]||[],i,s;for(i=0,s=r.length;i<s;i++)r[i].apply(e.instance,n);if(b(t)||t===o.READY)e.callbacks[t]=[]}function P(e){var t,n,r,i,s;try{n=JSON.parse(e.data)}catch(u){return!1}t=L(e.source),r=n.method,i=n.value;if(t&&H(e.origin)!==H(t.domain))return!1;if(!t)return r===o.READY&&a.push(e.source),!1;r===o.READY&&(t.isReady=!0,D(t,l),N(l,t)),r===o.PLAY&&!t.playEventFired&&(t.playEventFired=!0),r===o.PLAY_PROGRESS&&!t.playEventFired&&(t.playEventFired=!0,D(t,o.PLAY,[i])),s=[],i!==undefined&&s.push(i),D(t,r,s)}function H(e){return e.replace(h,"")}var r=e("lib/api/events"),i=e("lib/api/getters"),s=e("lib/api/setters"),o=r.api,u=r.bridge,a=[],f=[],l="__LATE_BINDING__",c="http://wt.soundcloud.dev:9200/",h=/^http(?:s?)/,p,d,v;window.addEventListener?window.addEventListener("message",P,!1):window.attachEvent("onmessage",P),n.exports=v=function(e,t,n){m(e)&&(e=document.getElementById(e));if(!y(e))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(n=n||{},e.src=M(c,t,n));var r=L(S(e)),i,s;return r&&r.instance?r.instance:(i=a.indexOf(S(e))>-1,s=new p(e),f.push(new d(s,e,i)),s)},v.Events=o,window.SC=window.SC||{},window.SC.Widget=v,d=function(e,t,n){this.instance=e,this.element=t,this.domain=E(t.getAttribute("src")),this.isReady=!!n,this.callbacks={}},p=function(){},p.prototype={constructor:p,load:function(e,t){if(!e)return;t=t||{};var n=this,r=k(this),i=r.element,s=i.src,a=s.substr(0,s.indexOf("?"));r.isReady=!1,r.playEventFired=!1,i.onload=function(){n.bind(o.READY,function(){var e,n=r.callbacks;for(e in n)n.hasOwnProperty(e)&&e!==o.READY&&C(u.ADD_LISTENER,e,r.element);t.callback&&t.callback()})},i.src=M(a,e,t)},bind:function(e,t){var n=this,r=k(this);return r&&r.element&&(e===o.READY&&r.isReady?setTimeout(t,1):r.isReady?(T(e,t,r),C(u.ADD_LISTENER,e,r.element)):T(l,function(){n.bind(e,t)},r)),this},unbind:function(e){var t=k(this),n;t&&t.element&&(n=N(e,t),e!==o.READY&&n&&C(u.REMOVE_LISTENER,e,t.element))}},O(p.prototype,x(i)),O(p.prototype,x(s),!0)}),window.SC=window.SC||{},window.SC.Widget=require("lib/api/api")})()

// 1. define the module and the other module dependencies (if any)
angular.module('eliasInstagramModule', [])

// 2. set a constant
    .constant('MODULE_VERSION', '0.0.2')

// 3. maybe set some defaults
    .value('defaults', {
        foo: 'bar'
    })

    .filter('trustUrl', function ($sce) {
      return function(url) {
        if (url){
          return $sce.trustAsResourceUrl(url);
        }
      };
    })

// 4. define a module component
    .factory('instaFactory', function($rootScope, $http, $q) {/* stuff here */

      return {
                pullimages: function(userId, loops) {

                  $rootScope.instaGlobal = [];
                  $rootScope.instaTotal =[];
                  $rootScope.instapics = [];
                  $rootScope.instapics1= [];
                  $rootScope.urlFound = [];
                  $rootScope.totalDisplayed;
                  $rootScope.loadMoreImage="";
                  $rootScope.loadMoreNumber;
                  var deferred;


                                //..............................................................................loading new pictures
                              $rootScope.noMore = false;
                            $rootScope.globalLoadMore = function(i){
                                $rootScope.loadMoreNumber = i;
                                if ($rootScope.totalDisplayed > 0){

                                }else {
                                  //the controller
                                  $rootScope.totalDisplayed = i;
                                  setTimeout(function(){
                                    $rootScope.loadMoreImage = $rootScope.instaTotal[$rootScope.totalDisplayed].images.standard_resolution.url;
                                  }, 3000);
                                }
                            }


                                $rootScope.loadMore = function () {
                                  $rootScope.totalDisplayed += $rootScope.loadMoreNumber;
                                  $rootScope.loadMoreImage = $rootScope.instaTotal[$rootScope.totalDisplayed].images.standard_resolution.url;
                                  console.log("$rootScope.totalDisplayed : "+$rootScope.totalDisplayed +" "+$rootScope.loadMoreImage);


                                  if ($rootScope.totalDisplayed >= ((loops)*20)){
                                    $rootScope.filterRemovesLoadMore();
                                    console.log("removed");
                                  }
                                };



                                //.......different loaded pictures for every device
                                  if ($rootScope.isDevice){
                                    $rootScope.globalLoadMore(14);
                                  } else if (!$rootScope.isDevice) {
                                    $rootScope.globalLoadMore(20);
                                  }



                                $rootScope.hideLoadMore = true;
                                setTimeout(function(){
                                  $rootScope.hideLoadMore = false;
                                }, 2000);


                                $rootScope.filterRemovesLoadMore = function(){
                                  $rootScope.hideLoadMore = true;
                                }

                                $rootScope.filterAllLoadMore = function(){
                                  $rootScope.hideLoadMore = false;
                                }



                              // ACCESS TOKEN = 20694160.2e1aeb5.45751ad675a143b083a008ed7b9775da

                          var n=0;
                          var maxID;
                          var theData;





                          $rootScope.instaAccessToken = "20694160.475cd8b.f772e39e2831440782498dd0284da5b7"; //staple access token

                          var endpoint = "https://api.instagram.com/v1/users/"+userId+"/media/recent?access_token="+$rootScope.instaAccessToken+"&callback=JSON_CALLBACK";

                          return $http({url: endpoint, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                            deferred = $q.defer();
                                $rootScope.instaTotal = response.data;
                                theData = response.data;
                                // maxID = response.data[19].id;



                                // while (n <= loops) {
                                // n++;
                                // var thisEndpoint = "https://api.instagram.com/v1/users/20694160"+"/media/recent?access_token="+$rootScope.instaAccessToken+"&max_id=" + maxID + "&callback=JSON_CALLBACK";
                                // console.log("thisEndpoint: " + thisEndpoint);
                                //   $http({url: thisEndpoint, method: 'JSONP', cache: true, isArray: true}).success(function(response1){
                                //         $rootScope.instapics1 = response1.data;
                                //         theData = theData.concat(response1.data);
                                //         $rootScope.instaTotal = $rootScope.instaTotal.concat(response1.data);
                                //         maxID = response.pagination.next_max_id;
                                //         //secondm is loaded so the load more can now be shown
                                //         $rootScope.hideLoadMore = false;
                                //       });
                                //
                                //       if (n==loops){
                                //         deferred.resolve('Hello, ' + name + '!');
                                //         // return $rootScope.instaTotal;
                                //         //  resolve(theData);
                                //       }
                                // }

                            }).then(function(response) {

                                var thisData = theData
                                return thisData;

                              });






            }//pullimages



      }//return

    })

// 5. define another module component
    .directive('directiveName', function() {/* stuff here */


    });// and so on

/**
 * angular-mailchimp
 * http://github.com/keithio/angular-mailchimp
 * License: MIT
 */

'use strict';

angular.module('mailchimp', ['ng', 'ngResource', 'ngSanitize'])

  /**
   * Form controller for a new Mailchimp subscription.
   */
  .controller('MailchimpSubscriptionCtrl', ['$log', '$resource', '$scope', '$rootScope',
              function ($log, $resource, $scope, $rootScope) {
    // Handle clicks on the form submission.
    $scope.addSubscription = function (mailchimp) {
      var actions,
          MailChimpSubscription,
          params = {},
          url;

      // Create a resource for interacting with the MailChimp API
      url = '//' + mailchimp.username + '.' + mailchimp.dc +
            '.list-manage.com/subscribe/post-json';

      var fields = Object.keys(mailchimp);

      for(var i = 0; i < fields.length; i++) {
        params[fields[i]] = mailchimp[fields[i]];
      }

      params.c = 'JSON_CALLBACK';

      actions = {
        'save': {
          method: 'jsonp'
        }
      };
      MailChimpSubscription = $resource(url, params, actions);

      // Send subscriber data to MailChimp
      MailChimpSubscription.save(
        // Successfully sent data to MailChimp.
        function (response) {
          // Define message containers.
          mailchimp.errorMessage = '';
          mailchimp.successMessage = '';

          // Store the result from MailChimp
          mailchimp.result = response.result;

          // Mailchimp returned an error.
          if (response.result === 'error') {
            if (response.msg) {
              // Remove error numbers, if any.
              var errorMessageParts = response.msg.split(' - ');
              if (errorMessageParts.length > 1)
                errorMessageParts.shift(); // Remove the error number
              mailchimp.errorMessage = errorMessageParts.join(' ');
            } else {
              mailchimp.errorMessage = 'Sorry! An unknown error occured.';
            }
          }
          // MailChimp returns a success.
          else if (response.result === 'success') {
            mailchimp.successMessage = response.msg;
          }

          //Broadcast the result for global msgs
          $rootScope.$broadcast('mailchimp-response', response.result, response.msg);
        },

        // Error sending data to MailChimp
        function (error) {
          $log.error('MailChimp Error: %o', error);
        }
      );
    };
  }]);
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ngSanitize',
  'myApp.routes',
  'myapp.Service',
  'eliasInstagramModule',
  'mailchimp'
])

.directive('googleAnalytics', function(){
  return{
    restrict: 'A',
    link: function(){


    }
  }
});

/*
  Configure routes used with ngRoute. We chose not to use $locationProvider.html5Mode(true);
  because using HTML5 pushstate requires that server routes are setup to mirror the routes
  in this file. Since this isn't a node course we're going to skip it. For all intensive
  purposes, html5 mode and url hash mode perform the same when within an angular app.
*/
angular.module('myApp.routes', ['ngRoute', 'ngAnimate', 'ngResource', 'mailchimp'])

.run(['$anchorScroll', '$route', '$rootScope', '$location', '$routeParams','$templateCache', function($anchorScroll, $route, $rootScope, $location, $routeParams, $templateCache) {

$rootScope.pageLoading = true;


//a change of path should not reload the page
    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        else if (reload === true){
          var currentPageTemplate = $route.current.templateUrl;
          $templateCache.remove(currentPageTemplate);
        var un = $rootScope.$on('$locationChangeSuccess', function () {
              $route.current = 'worldoftheblonds/'+$routeParams.category+'/'+$routeParams.event;
              un();
              $route.reload();
          });
        }
        return original.apply($location, [path]);
    };


  }])//run end



  .filter('trustUrl', function ($sce) {
      return function(url) {

          var trusted = $sce.trustAsResourceUrl(url);
          return trusted;
      };
    })






.config(['$routeProvider', '$locationProvider' ,'$sceProvider', function($routeProvider, $locationProvider, $sceProvider) {

$sceProvider.enabled(false);

  // use the HTML5 History API
  $locationProvider.html5Mode(true);

  $routeProvider


  // $locationChangeStart

    .when('/collection/:id', {
      templateUrl: 'collection/collection.html',
      controller: 'collectionCtrl'
    })

    .when('/collection', {
      templateUrl: 'collection/collection.html',
      controller: 'collectionCtrl'
    })

    .when('/stockists', {
      templateUrl: 'stockists/stockists.html',
      controller: 'stockistsCtrl'
    })

    .when('/committee', {
      templateUrl: 'committee/committee.html',
      controller: 'committeeCtrl'
    })

    .when('/about', {
      templateUrl: 'about/about.html',
      controller: 'aboutCtrl'
    })

    .when('/social', {
      templateUrl: 'social/social.html',
      controller: 'socialCtrl'
    })

    .when('/contact', {
      templateUrl: 'contact/contact.html',
      controller: 'contactCtrl'
    })






    /*............................. Take-all routing ........................*/


    .when('/', {
      // redirectTo: 'matthew30matthew30matthew'
      templateUrl: 'home/home.html',
      controller: 'homeCtrl',
      resolve: {
             function($q, $timeout) {
                var deferred = $q.defer();
                $timeout(function(){
                    return deferred.resolve();
                }, 200);
                return deferred.promise;
            }
        }

    })


    // put your least specific route at the bottom
    .otherwise({redirectTo: '/'})






}])

.controller('routeController', function($scope, $location, $rootScope, $routeParams, $timeout, $interval, $window){

$rootScope.location = $location.path();
$rootScope.firstLoading = true;








    $rootScope.windowHeight = $window.innerHeight;

    // var windowHeight;


    jQuery($window).resize(function(){
      $rootScope.windowHeight = $window.innerHeight;
      // windowHeight = angular.element($window).height(); // Window Height
      $rootScope.checkSize();
      $scope.landscapeFunction();

        $scope.$apply();
    });

    //..............................................................................mobile


    //....this is the function that checks the header of the browser and sees what device it is

    $rootScope.isMobile, $rootScope.isDevice, $rootScope.isMobileDevice;
    $rootScope.checkSize = function(){


        $rootScope.checkDevice = {
              Android: function() {
                  return navigator.userAgent.match(/Android/i);
              },
              BlackBerry: function() {
                  return navigator.userAgent.match(/BlackBerry/i);
              },
              iOS: function() {
                  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
              },
              Opera: function() {
                  return navigator.userAgent.match(/Opera Mini/i);
              },
              Windows: function() {
                  return navigator.userAgent.match(/IEMobile/i);
              },
              any: function() {
                  return ($rootScope.checkDevice.Android() || $rootScope.checkDevice.BlackBerry() || $rootScope.checkDevice.iOS() || $rootScope.checkDevice.Opera() || $rootScope.checkDevice.Windows());
              }
          };

        //........checks the width

          $scope.mobileQuery=window.matchMedia( "(max-width: 767px)" );
          $rootScope.isMobile=$scope.mobileQuery.matches;


        //.........returning true if device

          if ($scope.checkDevice.any()){
            $rootScope.isDevice= true;

          }else{
              $rootScope.isDevice=false;
          }

          if (($rootScope.isDevice==true)&&($scope.isMobile==true)){
            $rootScope.isMobileDevice= true;
          }else{
              $rootScope.isMobileDevice=false;
          }




            if ($rootScope.isDevice){

                $rootScope.mobileLocation = function(url){
                  $location.path(url).search();
                }

                $rootScope.mobileExternalLocation = function(url){
                  $window.open(url, '_blank');
                }


            } else if (!$rootScope.isDevice){


                $rootScope.mobileLocation = function(url){
                  return false;
                }

                $rootScope.mobileExternalLocation = function(url){
                  return false;
                }
            }





      }//checkSize


    $rootScope.checkSize();




     $rootScope.landscapeView = false;


     //function removing website if landscape

      $scope.landscapeFunction = function(){

        if ($rootScope.isMobile==true){
            if(window.innerHeight < window.innerWidth){
              $rootScope.landscapeView = true;
              $rootScope.pageLoading = true;
              jQuery(".landscape-view-wrapper").css({
                "width":"100vw",
                "height": "100vh",
                "display": "block"
            });

            }else{
              $rootScope.landscapeView = false;
              $rootScope.pageLoading = false;

            }
        }

      }

    $scope.landscapeFunction();
























        $rootScope.Collection;



            //..........................................................GET

            $rootScope.getContentType = function(type, orderField){

                  Prismic.Api('https://staple.cdn.prismic.io/api', function (err, Api) {
                      Api.form('everything')
                          .ref(Api.master())

                          .query(Prismic.Predicates.at("document.type", type))
                          .orderings('['+orderField+']')
                          .submit(function (err, response) {

                              var Data = response;
                              $rootScope.pageLoading = false;
                              $rootScope.$apply();

                              if(type =='collection'){
                                $rootScope.Collection = response.results;
                                $rootScope.$broadcast('collectionDone');
                                console.log($rootScope.Collection);
                              }

                              // The documents object contains a Response object with all documents of type "product".
                              var page = response.page; // The current page number, the first one being 1
                              var results = response.results; // An array containing the results of the current page;
                              // you may need to retrieve more pages to get all results
                              var prev_page = response.prev_page; // the URL of the previous page (may be null)
                              var next_page = response.next_page; // the URL of the next page (may be null)
                              var results_per_page = response.results_per_page; // max number of results per page
                              var results_size = response.results_size; // the size of the current page
                              var total_pages = response.total_pages; // the number of pages
                              var total_results_size = response.total_results_size; // the total size of results across all pages
                              return results;
                          });
                    });
            };

            // if ($rootScope.firstLoading == false){
              $rootScope.getContentType('collection', 'my.collection.date desc');

            //
            // }










})//......end of the route controller


.directive('closeRightDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/close-right.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})
.directive('closeLeftDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/close-left.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('pageLoadingSpinner', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'A',
    // templateUrl: 'components/loader.html',
    replace: true,
    link: function(scope, elem, attrs) {

      //
      // $rootScope.$on('$routeChangeStart', function() {
      //
      //     $rootScope.pageLoading = true;
      //     scope.logoHide = true;
      //
      // });
      //
      //
      // $rootScope.$on('$routeChangeSuccess', function() {
      //
      //   // $timeout(function () {
      //     scope.logoHide = false;
      //     $rootScope.pageLoading = false;
      //   // }, 1000);
      //
      //
      // });

    }
  };
});

'use strict';

/* Services */
var Service = angular.module('myapp.Service', ['ngResource']);

Service.factory('resourceService', function($resource, $routeParams, $q, $cacheFactory){

// var canceler = $q.defer();

return $resource('/data/:collection/:season.json',{},{get:{method:'GET', isArray: true}})
  // canceler.resolve();  // Aborts the $http request if it isn't finished.

});
// , params:{collection:$routeParams.collection , season:$routeParams.season}

Service.factory("CacheService", function($cacheFactory) {

   return { data:{ scrollY: 0 } };

});


Service.factory('detailService', function($resource, $routeParams, $q){


return $resource('/data/:collection/:season.json',{},{get:{method:'GET'}})

});

Service.factory('getService', function($http, $q, $timeout){

    return {
              get: function(url) {


              // var dfd = $q.defer();
              // $timeout(function(){

                  // the $http API is based on the deferred/promise APIs exposed by the $q service
                  // so it returns a promise for us by default
                  return $http.get(url)
                      .then(function(response) {


                          if (typeof response.data === 'object') {
                              return response.data;
                          } else {
                              // invalid response
                              return $q.reject(response.data);
                          }

                          // dfd.resolve(response);

                      }, function(response) {
                          // something went wrong
                          return $q.reject(response.data);
                      });



                    // },2000);
                    // return dfd.promise;



              }
          };

    // return $resource('/data/'+url+'.json',{},{get:{method:'GET'}})


});




Service.factory('homeService', function($http, $q){

    return {
              get: function() {
                  // the $http API is based on the deferred/promise APIs exposed by the $q service
                  // so it returns a promise for us by default
                  return $http.get('/data/home.json')
                      .then(function(response) {



                          if (typeof response.data === 'object') {
                              return response.data;
                          } else {
                              // invalid response
                              console.log('rejected');
                              return $q.reject(response.data);
                          }

                      }, function(response) {
                          // something went wrong
                          return $q.reject(response.data);
                      });
              }
          };


});







//.................................................google SEO


Service.service('PageTitle', function() {
      var title = 'Angel Sanchez';
      return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
      };
    });



Service.service('MetaInformation', function() {
      var metaDescription = '';
      var metaKeywords = '';
      return {
        metaDescription: function() { return metaDescription; },
        metaKeywords: function() { return metaKeywords; },
        reset: function() {
          metaDescription = '';
          metaKeywords = '';
        },
        setMetaDescription: function(newMetaDescription) {
          metaDescription = newMetaDescription;
        },
        appendMetaKeywords: function(newKeywords) {
          for (var key in newKeywords) {
            if (metaKeywords === '') {
              metaKeywords += newKeywords[key].name;
            } else {
              metaKeywords += ', ' + newKeywords[key].name;
            }
          }
        }
      };
    });




    Service.service('anchorSmoothScroll', function($rootScope, $window){

      this.scrollTo = function(id) {

        var number, element, scroll, scrollPosition, windowheight;


          setTimeout(function(){
                    number =  jQuery('#'+id).offset().top;

                    // $('.div1').get(0).scrollTop($('.div1 div.active').position().top);
                   element = jQuery('html,body');
                   scrollPosition =  element.scrollTop();

                   windowheight = $rootScope.windowheight;


                   scroll = scrollPosition + number;


                    // event.preventDefault();

                    jQuery('html,body').stop().animate({
                      scrollTop: scroll
                    },700,
                      'linear'
                      // function() {
                      //   // $location.path(section, false);
                      //   // console.log($location.path());
                      // }
                    );
                  }, 200);

        }



        this.scrollToZero = function() {

          var number, element, scroll, scrollPosition, windowheight;


            setTimeout(function(){


                     scroll = 0

                      // event.preventDefault();

                      jQuery('html,body').stop().animate({
                        scrollTop: scroll
                      },700,
                        'linear'
                        // function() {
                        //   // $location.path(section, false);
                        //   // console.log($location.path());
                        // }
                      );
                    }, 200);

          }



     });


angular.module('myApp')


.controller('navCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http){

$rootScope.isNavOpen = false;

  $scope.openNav = function(){
    $rootScope.isNavOpen = !$rootScope.isNavOpen;
  }

  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };


  $scope.closeNav = function(){
    $rootScope.isNavOpen = false;
  }




$scope.isSubscribe = false;


$scope.showSubscribe = function(){
  $scope.isSubscribe = !$scope.isSubscribe;
}









})


.directive('logoDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/logo.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('logoBlackDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/logo-black.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('exDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/ex.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})


.directive('soundcloudIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/soundcloud-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})


.directive('itunesIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/itunes-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('spotifyIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/spotify-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('facebookIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/facebook-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('twitterIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/twitter-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})


.directive('instagramIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/instagram-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})


.directive('menuIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/menu-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})


.directive('arrowDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/arrow.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})


.directive('subscribeDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/subscribe-form.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})


.directive('navDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/nav.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
});


var Home = angular.module('myApp');

Home.filter('youtubeEmbed', function ($sce) {
    return function(url) {
      if (url){
        var riskyVideo = "https://www.youtube.com/embed/"+url+"?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque";
        return $sce.trustAsResourceUrl(riskyVideo);
        $scope.$apply();
      }
    };
  })

Home.controller('homeCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, $document, anchorSmoothScroll){

$rootScope.firstLoading = false;






$scope.windowWidth= window.innerWidth;

  $scope.$watch(function(){
     $scope.windowWidth = window.innerWidth;
  }, function(value) {
  });






});//controller



var Collection = angular.module('myApp');


Collection.controller('collectionCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory, anchorSmoothScroll){

$rootScope.mainCollection;
$scope.mainIndex = 0;




// $rootScope.$watch(
//     "Collection",
//     function handleFooChange( newValue, oldValue ) {
        // if(newValue != oldValue){
        setTimeout(function(){
          $rootScope.mainCollection = $rootScope.Collection[0];
          $scope.$apply();
        }, 1000);

        // }
//     }
// );
//


$rootScope.nextCollection = function(x) {

  if($scope.mainIndex<($rootScope.Collection.length-1)){
      $scope.mainIndex = $scope.mainIndex + 1;
      $rootScope.mainCollection = $rootScope.Collection[$scope.mainIndex];
  }
  else if($scope.mainIndex>=0){
    $scope.mainIndex = 0;
    $rootScope.mainCollection = $rootScope.Collection[$scope.mainIndex];
  }
  anchorSmoothScroll.scrollTo('collection-'+$rootScope.Collection[$scope.mainIndex].uid);
  // var g;
  // for (var i=0; i < $rootScope.Collection.length; i++){
  //   if ($rootScope.Collection[i].uid == $rootScope.mainCollection.uid){
  //
  //     if(i<$rootScope.Collection.length){
  //       g = i++
  //     }else if(i>=$rootScope.Collection.length){
  //       g = 0
  //     }
  //     // anchorSmoothScroll.scrollTo('collection-'+$rootScope.Collection[g].uid);
  //   }
  // }

};


$rootScope.previousCollection = function() {
      if($scope.mainIndex>0){
          $scope.mainIndex = $scope.mainIndex - 1;
          $rootScope.mainCollection = $rootScope.Collection[$scope.mainIndex];
      }
      else if($scope.mainIndex<=0){
        $scope.mainIndex = $rootScope.Collection.length -1;
        $rootScope.mainCollection = $rootScope.Collection[$scope.mainIndex];
      }


  anchorSmoothScroll.scrollTo('collection-'+$rootScope.Collection[$scope.mainIndex].uid);


  // for (var i=0; i < $rootScope.Collection.length; i++){
  //   console.log('loop: '+i);
  //   // if ($rootScope.Collection[i].uid == $rootScope.mainCollection.uid){
  //   //   if(i>0){
  //   //     g = i--
  //   //     console.log('g: '+g);
  //   //   }else if(i<=0){
  //   //     g = $rootScope.Collection.length;
  //   //     console.log('g: '+g);
  //   //   }
  //   //
  //   //   //   $rootScope.mainCollection=$rootScope.Collection[i];
  //   //   // anchorSmoothScroll.scrollTo('collection-'+$rootScope.Collection[g].uid);
  //   // }
  // }

};












var scroll,windowheight;

windowheight = window.innerHeight;

setTimeout(function(){


  $(function() {

     $(".collection-season").bind("mousewheel", function(event, delta) {

        // console.log(event.deltaX, event.deltaY, event.deltaFactor);

        this.scrollLeft -= (delta * 0.4);

        event.preventDefault();

     });

  });




}, 1500);


$scope.$on("$destroy", function() {
    $(".collection-season").unbind("mousewheel");
});


});//end od controller

var Social = angular.module('myApp');

Social.controller('socialCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, instaFactory){


  $rootScope.pageLoading = true;
  $scope.socialLoading = true;

  setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.$apply();
  }, 500);



    //setting an animation class for this specific page
    $scope.pageClass = 'page-social';



    $(function() {

       $(".social-instagram").mousewheel(function(event, delta) {

          console.log(event.deltaX, event.deltaY, event.deltaFactor);

          this.scrollLeft -= (delta * 0.4);

          event.preventDefault();

       });

    });






  // $scope.instagram_p = function(){
  //   instaFactory.pullimages('184572270', 4).then( function(data) {
  //     console.log(data);
  //         $scope.Social = $rootScope.instaTotal;
  //         console.log($scope.Social);
  //       }, function(error) {
  //     });
  // }
  //
  //
  //   $scope.instagram_p();







    $http({url: '/data', method: 'get', cache: true, isArray:true})
    .success(function(response1){
      $rootScope.instaTotal = response1.data;
      console.log($rootScope.instaTotal);

      setTimeout(function(){
        $scope.socialLoading = false;
        $rootScope.$apply();
      }, 000);

    });















// var token = '577673350-DuHdWQQcvCKRDM0j4fCda40ZTrIGmdTqoaC8mKd8';
//
//
//
//
//
//     // access_token: 	577673350-DuHdWQQcvCKRDM0j4fCda40ZTrIGmdTqoaC8mKd8
//
//     //twitter
//     // https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2
//     var twitterEndpoint = 'https://api.twitter.com/1.1/statuses/staplepigeon.json?access_token='+token+'?screen_name=twitterapi&count=2';
//
//           $http({
//             url: twitterEndpoint,
//             method: 'JSONP',
//             cache: true,
//             isArray: true
//
//           }).success(function(response1){
//             console.log(response1);
//           });
//
//
//
//
//           var app = http.createServer(function(request, response) {
//           response.writeHead(200, {
//             "Content-Type": "text/plain"
//           });
//           response.end("Hello world!\n");
//         });



});

var Stockists = angular.module('myApp');




Stockists.filter('mapsFilter', function ($sce) {
    return function(x,y) {

      console.log(x);
      console.log(y);

      var newUrl = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyDlRnfLb1kcfhll7bM6gonsQfhaR1ICJ4A&center='+x+y+'&zoom=18&maptype=satellite';
      console.log(newUrl);

        var trusted = $sce.trustAsResourceUrl(newUrl);

        return trusted;

    };
  })



Stockists.controller('stockistsCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, anchorSmoothScroll){

  $scope.hideMap = true;
  $rootScope.pageLoading = true;
  $rootScope.Stockist = [];
  $scope.mainStockist;


  setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.hideMap = false;
    $scope.$apply();


  }, 600);



    //setting an animation class for this specific page
    $scope.pageClass = 'page-stockists';










      $rootScope.getStockist = function(type, orderField){

            Prismic.Api('https://staple.cdn.prismic.io/api', function (err, Api) {
                Api.form('everything')
                    .ref(Api.master())

                    .query(Prismic.Predicates.at("document.type", type))
                    .orderings('['+orderField+']')
                    .submit(function (err, response) {

                        var Data = response;

                          $rootScope.pageLoading = false;

                          $rootScope.Stockist = response.results;
                          $scope.mainStockist = response.results[0];
                          $rootScope.$broadcast('stockistDone');
                          console.log($rootScope.Stockist);
                          $rootScope.$apply();

                        // The documents object contains a Response object with all documents of type "product".
                        var page = response.page; // The current page number, the first one being 1
                        var results = response.results; // An array containing the results of the current page;
                        // you may need to retrieve more pages to get all results
                        var prev_page = response.prev_page; // the URL of the previous page (may be null)
                        var next_page = response.next_page; // the URL of the next page (may be null)
                        var results_per_page = response.results_per_page; // max number of results per page
                        var results_size = response.results_size; // the size of the current page
                        var total_pages = response.total_pages; // the number of pages
                        var total_results_size = response.total_results_size; // the total size of results across all pages
                        return results;
                    });
              });
      };

      $rootScope.getStockist('stockist', 'my.stockist.name');













$scope.thisStockist = function(uid){

    for (i in  $rootScope.Stockist){

      if (uid == $rootScope.Stockist[i].uid){
        $scope.mainStockist = $rootScope.Stockist[i];
          console.log(uid);
      }

      if($rootScope.isMobileDevice){
        anchorSmoothScroll.scrollToZero();
      }

    }
}









$scope.mapFilter = function(lat, long){



        var newUrl = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyDlRnfLb1kcfhll7bM6gonsQfhaR1ICJ4A&center='+lat+','+long+'&zoom=18&maptype=roadmap';
        console.log(newUrl);

          // var trusted = $sce.trustAsResourceUrl(newUrl);
          return newUrl;

}










});



var Committee = angular.module('myApp');


Committee.controller('committeeCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory){

$scope.success = false;
$scope.error = false;
$scope.committeeForm = {};
$scope.committeeForm.equipment = {
   roles: ['user']
 };



$scope.completedForm = false;
$scope.committeeStatus = 0;
$scope.committeeProgress = 0;


$scope.nextSectionCommittee=function(){
  $scope.committeeStatus = $scope.committeeStatus + 1;
}

$scope.prevSectionCommittee=function(){
  $scope.committeeStatus = $scope.committeeStatus - 1;
}






$scope.$watch(
    "committeeStatus",
    function handleFooChange( newValue, oldValue ) {
        if(newValue != oldValue){

          $scope.committeeProgress = ($scope.committeeStatus/19)*100;
          $scope.committeePercentage = Math.round($scope.committeeStatus/19*100)

        }
    }
);








  // process the form
  $scope.processFormCommittee = function() {

    // $scope.committeeForm.mandrill_subject = $scope.committeeForm.subject.toUpperCase() + " REQUEST FROM STAPLEPIGEON.COM"

     var mandrill = {
          "key": "",
          "message": {
              "html": $scope.committeeForm.body,
              "text": $scope.committeeForm.body,
              "from_email": $scope.committeeForm.email,
              "from_name": $scope.committeeForm.name,
              "to": [
                  {
                      "email": "dev@eliafornari.com",
                      "name": "STAPLEPIGEON.COM",
                      "type": "to"
                  }
              ],
              "headers": {
                  "Reply-To": $scope.formData.email
              }

          }
      }


$http({
  method  : 'POST',
  dataType: 'JSON',
  url     : 'https://mandrillapp.com/api/1.0/messages/send.json',
  data    : mandrill  // pass in data as strings
 })


.success(function (data) {

      $scope.success = true;
      $scope.formdata = {};
      $scope.hideContact = true;


})
.error(function (data) {
    $scope.error = true;
    $scope.hideContact = true;
});
};





});//end od controller



Committee.directive('committeeSections', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'committee/committee-sections.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})



var About = angular.module('myApp');


About.controller('aboutCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory, anchorSmoothScroll){

$rootScope.About ={};


            $http({
              url: '/about/about.json',
              method: 'get',
              cache: true,
              isArray: false

            }).then(function successCallback(response) {

              $rootScope.About = response.data.list;

              console.log(response.data);

            }, function errorCallback(response) {

              console.log(response);
              console.log("an error occurred");

            });























      $rootScope.mainAbout;
      $scope.aboutIndex = 0;




      $rootScope.$watch(
          "About",
          function handleFooChange( newValue, oldValue ) {
              if(newValue != oldValue){
              setTimeout(function(){
                $rootScope.mainAbout = $rootScope.About[0];
                $scope.$apply();
              }, 600);

              }
          }
      );



      $rootScope.nextAbout = function(x) {

        if($scope.aboutIndex<($rootScope.About.length-1)){
            $scope.aboutIndex = $scope.aboutIndex + 1;
            $rootScope.mainAbout = $rootScope.About[$scope.aboutIndex];

            anchorSmoothScroll.scrollTo('about-'+$rootScope.About[$scope.aboutIndex].uid);
        }
        else if($scope.aboutIndex>=0){
          $scope.aboutIndex = 0;
          $rootScope.mainAbout = $rootScope.About[$scope.aboutIndex];

          anchorSmoothScroll.scrollTo('about-'+$rootScope.About[$scope.aboutIndex].uid);
        }



      };


      $rootScope.previousAbout = function() {
            if($scope.aboutIndex>0){
                $scope.aboutIndex = $scope.aboutIndex - 1;
                $rootScope.mainAbout = $rootScope.About[$scope.aboutIndex];

                anchorSmoothScroll.scrollTo('about-'+$rootScope.About[$scope.aboutIndex].uid);
            }
            else if($scope.aboutIndex<=0){
              $scope.aboutIndex = $rootScope.About.length -1;
              $rootScope.mainAbout = $rootScope.About[$scope.aboutIndex];


              anchorSmoothScroll.scrollTo('about-'+$rootScope.About[$scope.aboutIndex].uid);

            }




      };








setTimeout(function(){


    $(function() {

       $(".about-section").bind("mousewheel",function(event, delta) {

          this.scrollLeft -= (delta * 0.4);

          event.preventDefault();

       });

    });


}, 600);

$scope.$on("$destroy", function() {
    $(".about-section").unbind("mousewheel");
});




});//end od controller

var Contact = angular.module('myApp');

Contact.controller('contactCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http){


  $rootScope.pageLoading = true;

  setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.$apply();
  }, 500);



    //setting an animation class for this specific page
    $scope.pageClass = 'page-contact';



    $scope.success = false;
    $scope.error = false;


    // create a blank object to hold our form information
    // $scope will allow this to pass between controller and view
  $scope.contactMobileOutsideLink = function(){
    $window.open('http://www.taylorgng.com/', '_blank');
  }


  $scope.formData = {};


    // process the form
    $scope.processForm = function() {

      $scope.formData.mandrill_subject = $scope.formData.subject.toUpperCase() + " REQUEST FROM TAYLORGANG.COM"



       var mandrill = {
            "key": "kgS1hoQnJBhbLYF0v9jYXQ",
            "message": {
                "html": $scope.formData.body,
                "text": $scope.formData.body,
                "subject": $scope.formData.mandrill_subject,
                "from_email": $scope.formData.email,
                "from_name": $scope.formData.name,
                "to": [
                    {
                        "email": "dev@eliafornari.com",
                        "name": "TAYLORGANG.COM",
                        "type": "to"
                    }
                ],
                "headers": {
                    "Reply-To": $scope.formData.email
                }

            }
        }




      $http({
        method  : 'POST',
        dataType: 'JSON',
        url     : 'https://mandrillapp.com/api/1.0/messages/send.json',
        data    : mandrill  // pass in data as strings
       })


      .success(function (data) {

          	$scope.success = true;
          	$scope.formdata = {};
            $scope.hideContact = true;


      })
      .error(function (data) {
        	$scope.error = true;
          $scope.hideContact = true;
      });
    };



      $rootScope.pageLoading = false;









  //....mobile
  $scope.contactMobileOutsideBackLink = function(){
    $scope.hideContact = false;
    $window.location.reload();
  }




});
