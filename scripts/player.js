const songs = [
    "ABBA – Happy New Year",
    "All I Want For Christmas Is You",
    "All I Want For Christmas",
    "Anna Lively - What Are You Doing New Year's Eve",
    "Andy Williams - Happy Holiday (The Holiday Season)",
    "Anthem Lights – Simple Little Christmas",
    "Ashanti - Christmas Time Again",
    "Baby Please Come Home",
    "Becky Hill - Only You",
    "Bing Crosby - Winter Wonderland",
    "Bing Crosby - I Wish You a Merry Christmas",
    "Brett Eldredge - A Holly Jolly Christmas",
    "Brett Eldredge - Baby, It's Cold Outside",
    "Brenda Lee - Rockin  Around the Christmas Tree",
    "Britney Spears - My Only Wish (This Year)",
    "Bruce Springsteen - Santa Claus Is Comin' to Town",
    "Bryan Adams - Merry Christmas",
    "Burl Ives - Have a holly jolly Christmas",
    "Catherine Fenny - The Christmas Song",
    "Carson Lueders - Lonely",
    "Ceraadi - Christmas With You",
    "Christmas Love",
    "Chuck Berry - Run Rudolph Run",
    "Daniela Andrade - Have Yourself a Merry Little Christmas",
    "Ella Fitzgerald - Frosty The Snowman",
    "Ella Fitzgerald - Rudolph the Red Nosed",
    "Elvis Presley - Blue christmas",
    "Frank Sinatra - Jingle Bells",
    "Frank Sinatra – Fly me to the moon",
    "Frank Sinatra – Have Yourself A Merry Little Christmas",
    "Frank Sinatra – Strangers In The Night",
    "Gabrielle Aplin - In the Bleak Midwinter",
    "Gwen Stefani - You Make It Feel Like Christmas",
    "Hannah Kerr - Winter Wonderland",
    "Here",
    "Hollyn, GAWVI - Thanking You",
    "I'll Be Home",
    "It's Beginning to Look a Lot Like Christmas",
    "Jingle Bells",
    "John Legend - Bring Me Love",
    "John Williams - Christmas Carol Medley",
    "Jon Bon Jovi - Please Come home For Christmas",
    "Jos Feliciano - Feliz Navidad",
    "Josh Garrels - What Child Is This",
    "Keith Richards - Run Run Rudolph",
    "Let It Snow! Let It Snow! Let It Snow!",
    "Linneah - Season's Greetings",
    "Little Mix - One I've Been Missing",
    "Loneliest Time Of Year",
    "Mariah Carey - All I Want for Christmas",
    "Mark Diamond - This Year",
    "Matt Terry - When Christmas Comes",
    "Meiko - Merry Christmas Wherever You Are",
    "Merry Christmas Everyone",
    "Mery Christmas – Let It Snow",
    "Michael Bolton - Jingle Bell Rock",
    "Michael Bublé - Winter Wonderland",
    "Mistletoe And Holly",
    "Nickie Conley - 100 Christmas Kisses",
    "O Holy Night",
    "OneRepublic - Christmas Without You",
    "Pentatonix - Angels We Have Heard On High",
    "Pentatonix - Away in a Manger",
    "Pentatonix - Carol of the Bells",
    "Pentatonix - Coldest Winter",
    "Pentatonix - Dance of the Sugar Plum Fairy",
    "Pentatonix - Deck The Halls",
    "Pentatonix - Do You Hear What I Hear",
    "Pentatonix - God Only Knows",
    "Pentatonix - God Rest Ye Merry Gentlemen",
    "Pentatonix - Hallelujah",
    "Pentatonix - Hark! The Herald Angels Sing",
    "Pentatonix - I'll Be Home For Christmas",
    "Pentatonix - Joy To The World",
    "Pentatonix - Little Drummer Boy",
    "Pentatonix - Making Christmas",
    "Pentatonix - Mary, Did You Know",
    "Pentatonix - O Come, All Ye Faithful",
    "Pentatonix - O Come, O Come Emmanuel",
    "Pentatonix - Santa Claus is Coming to Town",
    "Pentatonix - Sweater Weather",
    "Pentatonix - Thats Christmas To Me",
    "Pentatonix - The Christmas Song",
    "Pentatonix - The First Noel",
    "Pentatonix - This Christmas",
    "Pentatonix - Up on The Housetop",
    "Pentatonix - What Christmas Means To Me",
    "Pentatonix - Where Are You, Christmas",
    "Pentatonix - White Winter Hymnal",
    "Pentatonix - Winter Wonderland",
    "Pentatonix - You're A Mean One, Mr. Grinch",
    "Perry Como - It s Beginning to Look a Lot Like Christmas",
    "Perry Como - Magic Moments",
    "SALES - Chinese New Year",
    "Sarah Conor - Christmas In My heart",
    "Sia - Santa's Coming For Us",
    "Taylor Swift - Christmas Tree Farm",
    "Taylor Swift - Last Christmas",
    "Thank God It's Christmas",
    "The Jackson 5 - Santa Claus Is Coming To Town",
    "The Pussycat Dolls - Santa Baby",
    "Train - Shake up Christmas",
    "Underneath The Tree",
    "Westlife - White Christmas",
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