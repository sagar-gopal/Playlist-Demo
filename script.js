function homePage(){
  const apiKey = "AIzaSyCRUpqNlnkp20wI7M8EfYrV8_KhwItl-t0";
 fetch("https://www.googleapis.com/youtube/v3/search?key="+apiKey+"&part=snippet&q=trending&maxResults=100&type=video",{method:"GET"})
    .then(data=>data.json())
    .then(data=>{
      console.log("Script is called");
      const section = document.querySelector(".recommended");
      data.items.forEach((video) => {
        const video_list = document.createElement("div");
        video_list.className = "recommendedVideos";
        video_list.innerHTML = `
        <img class="thumbnail" src ="${video.snippet.thumbnails.high.url}" />
        <p class="video_title">${video.snippet.title}</p>`;
        section.append(video_list);
        
      });
      return data;
    });
  
}

