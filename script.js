function searchVideo(){
    document.querySelector(".recommended").innerHTML = ``
    const apiKey = "AIzaSyDLSu9xUswfHHHmN0dlTA3Lb5d_9HUkcyo";
    const input = document.getElementById("search").value;
    console.log(input);
    
      fetch("https://www.googleapis.com/youtube/v3/search?key="+apiKey+"&part=snippet&q="+input +"&maxResults=2&type=video",{method:"GET"})
      .then(data=>data.json())
      .then(data=>{
        const section = document.querySelector(".recommended");
        data.items.forEach((video) => {
          const video_list = document.createElement("div");
          video_list.className = "searchList";
          video_list.innerHTML = `
          <img class="thumbnail" src ="${video.snippet.thumbnails.high.url}" />
          <p><a href="https://www.youtube.com/watch?v=${video.id.videoId}">${video.snippet.title}></a></p>`;
          section.append(video_list);
  });
        return data;
    });
    
  }
  
  
  
  function searchChannel(){
    document.querySelector(".recommended").innerHTML = ``
    const apiKey = "AIzaSyDLSu9xUswfHHHmN0dlTA3Lb5d_9HUkcyo";
    const input = document.getElementById("search").value;
    console.log(input);
    
    fetch("https://www.googleapis.com/youtube/v3/search?key="+apiKey+"&part=snippet&type=channel&maxResults=5&q="+input, {method:"GET"})
    .then(data=>data.json())
    .then(data=>{
      const section = document.querySelector(".recommended");
        data.items.forEach((video) => {
          const video_list = document.createElement("div");
          video_list.className = "searchList";
          video_list.innerHTML = `
          <img class="thumbnail" src ="${video.snippet.thumbnails.high.url}" />
          <h4 class="title"><a href="https://www.youtube.com/channel/${video.id.channelId}">${video.snippet.title}</a></h4>
          <p class="desc">${video.snippet.description}<br></p>
          `;
          
          section.append(video_list);
    });
    return data;
    });
  }
  
  function channelInfo(){
    document.querySelector(".recommended").innerHTML = ``
    const apiKey = "AIzaSyDLSu9xUswfHHHmN0dlTA3Lb5d_9HUkcyo";
    const input = document.getElementById("search").value;
    console.log(input);
    
    fetch("https://www.googleapis.com/youtube/v3/search?key="+apiKey+"&part=snippet&type=channel&maxResults=1&q="+input, {method:"GET"})
    .then(data=>data.json())
    .then(data=> {
      fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id="+data.items[0].id.channelId+"&key="+apiKey,{method:"GET"})
      .then(data1=>data1.json())
      .then(data1=>{
        console.log(data1.items[0])
        const section = document.querySelector(".recommended");
        const video_list = document.createElement("div");
          video_list.className = "searchList";
          video_list.innerHTML = `
          <img class="thumbnail" src ="${data1.items[0].snippet.thumbnails.high.url}" />
          <h4 class="title"><a href="https://www.youtube.com/channel/${data1.items[0].id}">${data1.items[0].snippet.title}</a></h4>
          <p class="desc">View count = ${data1.items[0].statistics.viewCount}<br></p>
          <p class="desc">Video count = ${data1.items[0].statistics.videoCount}<br></p>`;
          console.log("second fetch complete")
          section.append(video_list);
      });
            return data1;
            });
      
    }
  
  function searchPlaylist(){
    
  }
  
          
