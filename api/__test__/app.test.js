/* eslint-disable no-undef */
import request from "supertest";

import app from "../index.js"

beforeEach(()=>{

})

describe("GET /user", function () {
  test("gives us back 200, with a message", async function () {
  
    const actual = await request(app).get("/user");
  
    expect(actual.statusCode).toBe(200);
    
  });

});


describe("GET /user/GSSP", function () {
    test("gives us back 200, with a message", async function () {
    
      const actual = await request(app).get("/user/GSSP");
    
      expect(actual.statusCode).toBe(200);
      
    });
})
    

describe("GET /user/name", function () {
    test("gives us back 200, with a message", async function () {
    
      const actual = await request(app).get("/user/name");
    
      expect(actual.statusCode).toBe(200);
      
    });
  
  });

  describe("GET /user/name", function () {
    test("gives us back 200, with a message", async function () {
    
      const actual = await request(app).get("/user/name");
    
      expect(actual.statusCode).toBe(200);
      
    });
  
  });



