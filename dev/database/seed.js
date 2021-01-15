/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const Faker = require('faker');
const Review = require('../../database/Reviews.js');
const mongoose = require('mongoose');

const generateData = () => {
  const dummyData = [];
  const destinations = [Faker.address.city(), Faker.address.city(), Faker.address.city(), Faker.address.city(), Faker.address.city()];

  for (let j = 0; j < destinations.length; j++) {
    for (let i = 0; i < 100; i += 1) {
      dummyReview = {
        userName: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
        profilePic: `http://d20lp9tw1uk7y6.cloudfront.net/profilePics/profilePic_people_${i}.jpg`,
        created_at: Date.now(),
        userHomeLocation: Faker.address.country(),
        images: [
          `http://d20lp9tw1uk7y6.cloudfront.net/images/tripadvisor_thailand_${Math.floor(Math.random() * 100)}.jpg`,
          `http://d20lp9tw1uk7y6.cloudfront.net/images/tripadvisor_thailand_${Math.floor(Math.random() * 100)}.jpg`,
          `http://d20lp9tw1uk7y6.cloudfront.net/images/tripadvisor_thailand_${Math.floor(Math.random() * 100)}.jpg`,
          `http://d20lp9tw1uk7y6.cloudfront.net/images/tripadvisor_thailand_${Math.floor(Math.random() * 100)}.jpg`
        ],
        starRating: Math.floor(Math.random() * (5 - 1) + 1),
        reviewTitle: Faker.lorem.words(),
        reviewBody: Faker.lorem.paragraph(),
        dateOfExperience: Faker.date.past(),
        helpfulVotes: Math.floor(Math.random() * (20 - 1) + 1),
        destination: destinations[j]
      };
      dummyData.push(dummyReview);
    }
  }

  Review.create(dummyData, (err) => {
    if (err) {
      console.log('Err', err);
    } else {
      console.log('Seeding complete');
      mongoose.disconnect();
    }
  });
};

generateData();
