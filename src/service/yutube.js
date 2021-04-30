import axios from 'axios';

class Youtube {
  constructor(key) {
    this.key = key;
  };

  async mostPopular() {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`
      );
      return data.items;
    } catch (err) {
      console.log('err: ', err);
    }
  };
  async search(keyword) {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/search?part=snippet&maxResults=25&type=video&q=${keyword}&key=${this.key}`
    );
    data.items = data.items.map(item => ({
      ...item,
      id: item.id.videoId,
    }));
    return data.items;
  };
}

export default Youtube;
