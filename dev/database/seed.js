/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const Faker = require('faker');
const Reviews = require('../../database/Reviews.js');
const mongoose = require('mongoose');

const generateData = () => {
  Reviews.remove((err) => {
    if (err) {
      console.log(Err);
    } else {
      console.log('Database dropped');
    }
  });
  const dummyData = [];
  const destinations = ['Phitsanulok', 'Bangkok', 'Phuket', 'Trang', 'Ayutthaya'];

  for (let j = 0; j < destinations.length; j++) {
    for (let i = 0; i < 100; i += 1) {
      const randomImages = [];
      for (let k = 0; k < Math.floor(Math.random() * 6); k++) {
        randomImages.push(`http://d20lp9tw1uk7y6.cloudfront.net/images/tripadvisor_thailand_${Math.floor(Math.random() * 100)}.jpg`)
      }
      dummyReview = {
        userName: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
        profilePic: `http://d20lp9tw1uk7y6.cloudfront.net/profilePics/profilePic_people_${i}.jpg`,
        created_at: Faker.date.past(),
        userHomeLocation: Faker.address.country(),
        images: randomImages,
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

  Reviews.create(dummyData, (err) => {
    if (err) {
      console.log('Err', err);
    } else {
      console.log('Seeding complete');
      mongoose.disconnect();
    }
  });
};

generateData();
