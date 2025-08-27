const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('serves the index.html', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<title>PDF Reader</title>');
    expect(res.headers['x-dns-prefetch-control']).toBe('off');
  });
});

describe('GET /not-found', () => {
  it('returns 404 JSON', async () => {
    const res = await request(app).get('/not-found');
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ error: 'Not Found' });
  });
});
