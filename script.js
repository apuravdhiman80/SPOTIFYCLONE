let currsong = new Audio();
async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        console.log(element.href);
        if (element.href.endsWith(".mp3")) {
            let st = element.href.split("/songs/")[1];
            st = st.replaceAll("%20", " ");
            songs.push(st);
        }
    }
    return songs;
}
async function main() {
    let songs = await getSongs();
    console.log(songs);
    let d = document.querySelector(".songlist").firstElementChild;
    for (const song of songs)
        {
        // d.innerHTML = d.innerHTML + `<li><span class ="span1">${song} </span><span class="span2"><img class="play1" src="play.svg" alt="">play now</span></li>`
    }
    Array.from( document.querySelector(".UL").getElementsByTagName("li")).forEach((e)=>
    {
        e.addEventListener(("click"),()=>
        {
            console.log(e);
                let p = e.innerHTML;
                console.log(p);
                currsong.src = "/songs/" + p;
                currsong.play();
                document.querySelector(".songinfo").innerHTML="dfsdf";
                document.querySelector(".songtime").innerHTML="dfsdf";
                play.src="pause.svg";
            })
        })
    play.addEventListener(("click"),()=>
    {
        if(currsong.paused)
            {
                if(!currsong.src)
                    {
                        alert("Select a song first");
                    }
                    else{
                currsong.play();
                play.src="pause.svg";
            }}
            else
            {
                currsong.pause();
                play.src="play.svg";
            }
    })
    next.addEventListener(("click"),()=>
    {

    })
}
main();