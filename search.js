function searchVideo(){
    const apiKey = "AIzaSyCRUpqNlnkp20wI7M8EfYrV8_KhwItl-t0";
    
    let input = document.querySelector(".search-bar").value;
    if(input){
      fetch("https://www.googleapis.com/youtube/v3/search?key="+apiKey+"&part=snippet&q="+input +"&maxResults=50&type=video",{method:"GET"})
      .then(data=>data.json())
      .then(data=>{
        console.log("search script");
        console.log(data.items[0].snippet.title);
        const section = document.querySelector(".recommended");
        data.items.forEach((video) => {
          const video_list = document.createElement("div");
          video_list.className = "searchList";
          video_list.innerHTML = `
          <img class="thumbnail" src ="${video.snippet.thumbnails.high.url}" />
          <p class="video_title">${video.snippet.title}</p>`;
          section.append(video_list);
          
        });
        return data;
      });
    }
    document.querySelector(".search-bar").value = "";
  }