const { externalApi } = require('../config');
class FetchInstance {
  constructor(baseUrl, defaultOptions = {}) {
    this.baseUrl = baseUrl;
    this.defaultOptions = defaultOptions;
  }

  async request(url, options = {}) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async get(url, options = {}) {
    options.method = 'GET';
    return await this.request(url, options);
  }

  async post(url, body, options = {}) {
    options.method = 'POST';
    options.body = JSON.stringify(body);
    return await this.request(url, options);
  }

  async put(url, body, options = {}) {
    options.method = 'PUT';
    options.body = JSON.stringify(body);
    return await this.request(url, options);
  }

  async delete(url, options = {}) {
    options.method = 'DELETE';
    return await this.request(url, options);
  }
}

const instanceExternalApi = new FetchInstance(externalApi.baseUrl, {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

module.exports = { instanceExternalApi };