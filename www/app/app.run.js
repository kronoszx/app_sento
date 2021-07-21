angular
   .module('app')
   .run(runBlock);

function runBlock($ionicPlatform) {
   $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
         cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
         cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
         StatusBar.styleDefault();
      }
      var ref = window.open('http://app.sentoentrenadorpersonal.com/login', '_self', 'location=no,zoom=no');

      ref.addEventListener('exit', function() {
         ionic.Platform.exitApp();
      })
   });
};