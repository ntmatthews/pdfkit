const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('serves the index.html', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<title>PDF Reader</title>');
  });
});
