async function showDefault(){

    let popular = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=technology&type=videos&key=AIzaSyD2wqMv-MTZyCiDqKx9Eh1Vyy_YIJ2ErKc&maxResults=20`);

    let trending_videos = await popular.json();

    console.log("Show default");

    appendVideos(trending_videos.items);
}

showDefault();


async function showQuery(){

    let query = document.getElementById("search").ariaValueMax;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=videos&key=AIzaSyD2wqMv-MTZyCiDqKx9Eh1Vyy_YIJ2ErKc&maxResults=20`);

    let data = await res.json();

    console.log(data.items);

    appendVideos(data.items);
}

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