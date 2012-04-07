App.Events = (function(lng, undefined) {

    //Login
    lng.dom('#btnLogin').tap(function(event) {
    	var user = lng.dom('#bluser');
    	var pwd = lng.dom('#blassword');
    	if(user.val()==pwd.val()){
    		lng.Router.section('main');
    		App.Services.music();
    	}else{
    		lng.Router.section('main');	
    	}
    });

 	lng.dom('section#main #loadMusic').tap(function(event) { 		
 		var sId = lng.dom(this).attr('data-song'); 
 		var params = Array();
 		params['id'] = sId;
 		App.View.song(params);
 		

 		
 	});

 	lng.dom('section#view header a').tap(function(event) {
 		lng.Router.section('main');
 		App.Services.music();
 		
 	});
	
})(LUNGO);