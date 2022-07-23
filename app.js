
let index=0;
let audioElement=new Audio('audio/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogress=document.getElementById('progressbar');
let songItem=Array.from(document.getElementsByClassName('Item'));

let songs=[{songName:"Dil dil_bechara",filePath:"audio/1.mp3"},
{songName:"Aa Jao Meri Tamana",filePath:"audio/10.mp3"},

{songName:"Aashiyan, Barfi",filePath:"audio/2.mp3"},
{songName:"Baarish Aayi Hai",filePath:"audio/11.mp3"},

{songName:"Baarishon Mein-Darshan",filePath:"audio/3.mp3"},
{songName:"Galliyan teri Galliya",filePath:"audio/12.mp3"},

{songName:"Kal Ki Hi Baat hai- K.K",filePath:"audio/4.mp3"},
{songName:"Gun Gun Guna,Agneepath",filePath:"audio/13.mp3"},

{songName:"Raabta- Arijit Singh",filePath:"audio/5.mp3"},
{songName:"Hawa Banke- Darshan",filePath:"audio/14.mp3"},

{songName:"Shayad- Arijit Singh",filePath:"audio/6.mp3"},
{songName:"Kesariya ,Brahmastra",filePath:"audio/15.mp3"},

{songName: "Ek Zindgi-Sachin jigar",filePath:"audio/7.mp3"},
{songName:"Khudaya Khair ,Billu Barber",filePath:"audio/16.mp3"},

{songName:"Matargashti, Tamasha",filePath:"audio/8.mp3"},
{songName:"Tera Hone Laga Hoon",filePath:"audio/17.mp3"},

{songName:"Kabira- Pritam",filePath:"audio/9.mp3"},

{songName:"Tu jo Mila- K.K",filePath:"audio/18.mp3"},


];


songItem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
});


masterplay.addEventListener('click',()=>{
    
    if(audioElement.paused|audioElement.currentTime<=0){
        console.log(audioElement.pause);
        audioElement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");    
    }

    else{
        audioElement.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");     
    }

});

myprogress.addEventListener('change',()=>{
    audioElement.currentTime=(myprogress.value*audioElement.duration)/100;
});

audioElement.addEventListener('timeupdate',()=>{
 progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
 myprogress.value=progress;

});


const makeallPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
       element.classList.remove("fa-circle-pause");
       element.classList.add("fa-circle-play");
    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallPlays();
        index=parseInt( e.target.id)
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause"); 
        audioElement.src='audio/'+index+'.mp3';
        audioElement.currentTime=0;
        audioElement.play();
    })
})


document.getElementById('next').addEventListener('click',()=>{

    if(index>=9){
        index=1;
    }

    else{
        index=index+1;
    }

    audioElement.src='audio/'+index+'.mp3';
    audioElement.currentTime=0;
    audioElement.play();

})


document.getElementById('previous').addEventListener('click',()=>{

    if(index<=1){
        index=9;
    }

    else{
        index=index-1;
    }

    audioElement.src='audio/'+index+'.mp3';
    audioElement.currentTime=0;
    audioElement.play();

})







