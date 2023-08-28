console.log("welcome to Spotify  ");

//initializing variable 
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let mastersongName=document.getElementById('mastersongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));


let songs=[
{songName: "Dil Jhoom" ,filePath :"songs/1.mp3" , coverPath:"covers/1.jpg"},
{songName: "Chal Tere Ishq Mein" ,filePath :"songs/2.mp3" , coverPath:"covers/2.jpg"},
{songName: "Zihaal e Miskin" ,filePath :"songs/3.mp3" , coverPath:"covers/3.jpg"},
{songName: "Gone Girl" ,filePath :"songs/4.mp3" , coverPath:"covers/4.jpg"},
{songName: "Chaleya " ,filePath :"songs/5.mp3" , coverPath:"covers/5.jpg"},
{songName: "Udd Jaa Kaale Kaava" ,filePath :"songs/6.mp3" , coverPath:"covers/6.jpg"},
{songName: " Main Nikla Gaddi Leke" ,filePath :"songs/7.mp3" , coverPath:"covers/7.jpg"},
{songName: "Dil Ka Telephone " ,filePath :"songs/8.mp3" , coverPath:"covers/8.jpg"},
]


songItems.forEach((element ,i) => {
    // console.log(element , i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});
//handle play & pause click

masterplay.addEventListener('click', ()=> {

    if(audioElement.paused || audioElement.currentTime <=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;



    }
    
        
});

//listen event 
audioElement.addEventListener('timeupdate' ,()=>{
//  console.log('timeupdate');
//update seekbar

progress=parseInt((audioElement.currentTime/audioElement.duration)*100) //progress(p)=(ct/d)*100;
// console.log(progress);
myprogressBar.value=progress;
})

myprogressBar.addEventListener('change' ,()=>{

    audioElement.currentTime=myprogressBar.value * audioElement.duration/100; //ct=(p *d) /100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element )=>{
    element.addEventListener('click' ,(e)=>{
        // console.log(e.target); // jis element pe click huaa hai o element melaga
        makeAllPlays(); 
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');



})

})

document.getElementById('next').addEventListener('click' ,()=>{
    if(songIndex >=7)
    {
        songIndex=0;
    }else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click' ,()=>{
    if(songIndex <=0)
    {
        songIndex=0;
    }else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})


