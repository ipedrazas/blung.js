App.View = (function(lng, App, undefined) {

    var markup = '<li id="playlist">\
                    <a href="#" id="loadMusic" class="button onright" data-icon="music" data-song="{{id}}" >play</a>\
                        {{title-song}}<small>{{band}}</small>\
                    <small>{{album}}</small>\
                </li>';

        var markupSong = 'Test<audio controls preload>\
                            <source src="http://localhost/actions/playMp3?i={{id}}" />\
                        </audio>';

    lng.View.Template.create('music-tmp', markup);
    lng.View.Template.create('song-tmp', markupSong);
    
    var songs = function(data){
        lng.View.Template.render('#music-items','music-tmp',data);
    }

    var song = function(data){
        lng.View.Template.render('#playSong','song-tmp',data);
        lng.Router.section('view');
    }


    return{
        songs: songs,
        song: song
    }

})(LUNGO, App);