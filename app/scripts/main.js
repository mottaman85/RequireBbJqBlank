require.config({
  paths : {
    "jquery" : "vendor/jquery/dist/jquery",
    "underscore" : "vendor/underscore-amd/underscore",
    "backbone" : "vendor/backbone-amd/backbone"
  }
});

require(['views/app'], function(AppView){
  console.log('yah');
  new AppView;
})