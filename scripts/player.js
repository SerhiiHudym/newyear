const songs = [
    "ABBA – Happy New Year",
    "All I Want For Christmas Is You",
    "All I Want For Christmas",
    "Anthem Lights – Simple Little Christmas",
    "Ashanti - Christmas Time Again",
    "Baby Please Come Home (Christmas)",
    "Becky Hill - Only You",
    "Bing Crosby - I Wish You a Merry Christmas",
    "Brenda Lee - Rockin  Around the Christmas Tree",
    "Bryan Adams - Merry Christmas",
    "Carson Lueders - Lonely",
    "Christmas Love",
    "Ella Fitzgerald - Rudolph the Red Nosed",
    "Frank Sinatra - Jingle Bells",
    "Frank Sinatra – Have Yourself A Merry Little Christmas",
    "Frank Sinatra – Strangers In The Night",
    "Here",
    "I'll Be Home",
    "It's Beginning to Look a Lot Like Christmas",
    "Jingle Bells",
    "Jon Bon Jovi - Please Come home For Christmas",
    "Keith Richards - Run Run Rudolph",
    "Let It Snow! Let It Snow! Let It Snow!",
    "Little Mix - One I've Been Missing",
    "Loneliest Time Of Year",
    "Mariah Carey - All I Want for Christmas",
    "Mark Diamond - This Year",
    "Matt Terry - When Christmas Comes",
    "Merry Christmas Everyone",
    "Mery Christmas – Let It Snow",
    "Michael Bolton - Jingle Bell Rock",
    "Mistletoe And Holly",
    "Nickie Conley - 100 Christmas Kisses",
    "O Holy Night",
    "OneRepublic - Christmas Without You",
    "Perry Como - Magic Moments",
    "Sarah Conor - Christmas In My heart",
    "Taylor Swift - Christmas Tree Farm",
    "Thank God It's Christmas",
    "The Pussycat Dolls - Santa Baby",
    "Train - Shake up Christmas",
    "Underneath The Tree",
    "Wham - Last Christmas"
];

function generateSongsList(array) {
    let list = document.createElement('ol');

    for (let i = 0; i < array.length; i++) {
        const song = document.createElement('li');
        song.appendChild(document.createTextNode(array[i]));
        list.appendChild(song);
    }

    return list;
}
document.getElementById('songsList').appendChild(generateSongsList(songs));

$('#songsList ol li').on('click', function(){
    currentSong = songs.indexOf($(this).text());
    $("#image img").attr("src",'./media/images/posters/' + songs[currentSong] + '.jpg');
    $("#bg img").attr("src",'./media/images/posters/' + songs[currentSong] + '.jpg');
    $("#play img").attr("src","./media/images/controls/Pause.png");
    playSong();
});

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0;

window.onload = playSong;
song.onended = next;

function playSong(){
    
    song.src = './media/audio/' + songs[currentSong] + '.mp3'; 
    
    songTitle.textContent = songs[currentSong];

    $("#image img").attr("src",'./media/images/posters/' + songs[currentSong] + '.jpg');
    $("#bg img").attr("src", './media/images/posters/' + songs[currentSong] + '.jpg');
    
    song.play();
}

function playOrPauseSong(){
    
    if(song.paused){
        song.play();
        $("#play img").attr("src","./media/images/controls/Pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","./media/images/controls/Play.png");
    }
}

song.addEventListener('timeupdate',function(){ 
    
    var position = song.currentTime / song.duration;
    
    fillBar.style.width = position * 100 +'%';
});


function next(){
    
    currentSong++;
    if(currentSong > songs.length-1){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src","./media/images/controls/Pause.png");
    $("#image img").attr("src",'./media/images/posters/' + songs[currentSong] + '.jpg');
    $("#bg img").attr("src", './media/images/posters/' + songs[currentSong] + '.jpg');
}

function pre(){
    
    currentSong--;
    if(currentSong < 0){
        currentSong = songs.length-1;
    }
    playSong();
    $("#play img").attr("src","./media/images/controls/Pause.png");
    $("#image img").attr("src",'./media/images/posters/' + songs[currentSong] + '.jpg');
    $("#bg img").attr("src",'./media/images/posters/' + songs[currentSong] + '.jpg');
}