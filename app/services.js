App.Services = (function(lng, App, undefined) {
	

	var music = function(){
		$$.get('http://localhost/actions/getAlbum',
		{
			b: '4f7aae23711ee00a46000008',
			callback: '?'			
		},
			function(response){
				App.View.songs(response.items);
			}
		);
	};


	return{
		music: music
	}

})(LUNGO, App);