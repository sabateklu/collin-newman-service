/**
 * @jest-environment node
 */
const express = require("express")
const mongoose = require("mongoose")
const createServer = require("../../server/createServer")
const supertest = require('supertest');
const Reviews = require('../../database/Reviews')
const sampleReviews = require('./sampleReviews');
console.log('MONGOOSE CONNECTION NAME', mongoose.connection.name);

describe('Server routes', () => {
  const app = createServer('test')

  beforeAll((done) => {
    app.listen(5000, () => {
      console.log("Server has started!")
    })
    mongoose.connect(
      "mongodb://localhost/test",
      { useNewUrlParser: true },
      () => done()
    )
  })

  afterAll((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done())
    });
    console.log('STOPING SERVER');
    app.close();
  })

  it('gets all reviews', async (done) => {
    Reviews.create(sampleReviews, async (err, data) => {
      await supertest(app)
        .get('/api/reviews')
        .expect(200)
        .then(response => {
          console.log(response.body);
          expect(Array.isArray(response.body)).toBeTruthy();
          done();
        })
        .catch(err => console.log(err))
    })
  });
})