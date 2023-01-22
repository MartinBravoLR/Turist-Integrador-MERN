const request = require("supertest");
const app = require('../../app');


describe("Test GET the /v1/places/:id route / Specific Place", () => {
    test("It should responds with 200 when id params is present", async () => {
        const id = '63c9dfafbfcb2d10d6a27a34'; //Example id
        const response = await request(app)
          .get(`/v1/places/${id}`);
    expect(response.statusCode).toBe(200);
    });
    test("It should responds with 200 when id params is not found", async () => {
        const id = 'Marte'; //Example id not found
        const response = await request(app)
        .get(`/v1/current/${id}`);
    expect(response.statusCode).toBe(404);
    });
;})