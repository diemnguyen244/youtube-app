import axios from "axios";
export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: import.meta.env.VITE_APP_YOUTUBE_API_KEY },
    });
  }
  async search(keyword) {
    return keyword ? this.searchVideoByKeyword(keyword) : this.mosPopular();
  }
  async channelThumbnail(id) {
    return this.httpClient
      .get("/channels", {
        params: {
          part: "snippet",
          id: id,
        },
      })
      .then((response) => {
        // console.log("haha");
        // console.log(response);
        return response.data.items[0].snippet.thumbnails.default.url;
      });
  }

  async relatedVideos(id) {
    return this.httpClient
      .get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          type: "video",
          relatedToVideos: id,
        },
      })
      .then((response) => {
        console.log(response);
        return response.data.items;
      })
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }
  async searchVideoByKeyword(keyword) {
    return this.httpClient
      .get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          type: "video",
          q: keyword,
        },
      })
      .then((response) => {
        console.log(response);
        return response.data.items;
      })
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }
  async mosPopular() {
    return this.httpClient
      .get("/videos", {
        params: {
          part: "snippet",
          maxResults: 20,
          chart: "mostPopular",
        },
      })
      .then((response) => {
        return response.data.items;
      });
  }
}
