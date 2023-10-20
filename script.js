console.log("PLay The Way You Want")

let songIndex=0;
let audioElement=new Audio("/songs/1.mp3")
let masterPlay= document.getElementById('masterPlay')
let myProgressBar= document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songItems= Array.from(document.getElementsByClassName('singItem'));
let masterSongName=document.getElementById('masterSongName')

let songs=[
    
        {songName:"The One", filePath:"/songs/1.mp3",coverPath:"covers/1.jpg"},
        {songName:"KavKaz", filePath:"/songs/2.mp3",coverPath:"/covers/2.jpeg"},
        {songName:"Rich Love", filePath:"/songs/3.mp3",coverPath:"/covers/3.jpg"},
        {songName:"Hookah Bar", filePath:"/songs/4.mp3",coverPath:"/covers/4.jpg"},
        {songName:"Hold My Hand", filePath:"/songs/5.mp3",coverPath:"/covers/5.jpg"},
        {songName:"Haareya", filePath:"/songs/6.mp3",coverPath:"/covers/6.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0;
        // <i class="fa-solid fa-circle-pause"></i>
    }
})


//move seekbar according to song duration
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

// Change seekbar according to mouse click
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex=0
    }
    else{
        songIndex+=1;
    }

    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }

    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})

// document.addEventListener('keydown',(event)=>{
//     if(event.key()=" " || event.keyCode==32){
//         event.preventDefault();
//         if(audioElement.paused || audioElement.currentTime<=0){
//             audioElement.play();
//             masterPlay.classList.remove('fa-circle-play');
//             masterPlay.classList.add('fa-circle-pause');
//         }
//         else{
//             audioElement.pause();
//             masterPlay.classList.remove('fa-circle-pause');
//             masterPlay.classList.add('fa-circle-play');
//         }
//     }
// })
