const request = require("supertest");
const app = require('../../app');


describe("Test POST /v1/places/ route Create New Place", () => {
    test("It should responds with 200 status code", async () => {
        const response = await request(app)
          .post(`/v1/places/`);
    expect(response.statusCode).toBe(200);
    });
    test("It should have a content-type: application/header json", async () => {
        const response = await request(app)
          .post(`/v1/places/`);
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });
;})