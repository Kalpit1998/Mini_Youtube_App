// =======================================================================================================================
// function execute on window load
// =======================================================================================================================


window.onload = function(){

    showDefault();
}

async function showDefault(){

    let popular = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=technology&type=videos&key=AIzaSyD2wqMv-MTZyCiDqKx9Eh1Vyy_YIJ2ErKc&maxResults=20`);

    let trending_videos = await popular.json();

    // console.log("Show default");

    appendVideos(trending_videos.items);
}

// showDefault();


// ======================================================================================================================
// function for search input 
// ======================================================================================================================

async function showQuery(){

    let query = document.getElementById("search").value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=videos&key=AIzaSyD2wqMv-MTZyCiDqKx9Eh1Vyy_YIJ2ErKc&maxResults=20`);

    let data = await res.json();

    console.log(data.items);

    appendVideos(data.items);
}


// ======================================================================================================================
// Function to append result on DOM
// ======================================================================================================================


let videos = document.getElementById("movie-grid");


function appendVideos(videos_data){

    videos.innerHTML = null;

    videos_data.forEach(({id: { videoId } }) => {
        
        // console.log(video.id.videoId);
        // console.log(videoID);

        let div = document.createElement("div");

        div.innerHTML = `<iframe width="360" height="215" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        videos.append(div);
    });
}



// ======================================================================================================================
// function to show username after login
// ======================================================================================================================


let userFromStorage = JSON.parse(localStorage.getItem("userdata"));

console.log(userFromStorage[0])

if(userFromStorage != undefined){

    showUsername()
}


function showUsername(){

    document.getElementById("signin").innerHTML = null;

    document.getElementById("signin").innerHTML = userFromStorage[0].username;

    document.getElementById("signin").style.border = "none";

    window.onbeforeunload = function(){
        localStorage.removeItem("userdata");
        return;
    }
}