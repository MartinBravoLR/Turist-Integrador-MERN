const request = require("supertest");
const app = require('../../app');

describe("Test GET the /v1/places/ route", () => {
    
    test("It should responds with 200", async () => {
        const response = await request(app)
        .get('/v1/places/')
    expect(response.statusCode).toBe(200);
    })
    
    test("It should responds with an json", async () => {
        const response = await request(app)
        .get('/v1/places/')
    expect(response.body).toBeInstanceOf(Object);
    })
    
    ;})
    
