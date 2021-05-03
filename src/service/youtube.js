import axios from 'axios';

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      params: { key },
    });
    this.key = key;
  };

  async mostPopular() {
    try {
      const { data } = await this.youtube.get('videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
        },
      });
      return data.items;
    } catch (err) {
      console.log('err: ', err);
    }
  };
  async search(keyword) {
    const { data } = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
      },
    });
    data.items = data.items.map(item => ({
      ...item,
      id: item.id.videoId,
    }));
    return data.items;
  };
}

export default Youtube;
