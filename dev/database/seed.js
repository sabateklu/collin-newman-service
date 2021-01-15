/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const Faker = require('faker');
const Review = require('../../database/Reviews.js');

const generateData = () => {
  const dummyData = [];
  for (let i = 0; i < 100; i += 1) {
    const dummyReview = {
      userName: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
      created_at: Date.now(),
      userHomeLocation: Faker.address.country(),
      images: [Faker.image.imageUrl(), Faker.image.imageUrl(), Faker.image.imageUrl()],
      starRating: Math.floor(Math.random() * (5 - 1) + 1),
      reviewTitle: Faker.lorem.words(),
      reviewBody: Faker.lorem.paragraph(),
      dateOfExperience: Faker.date.past(),
      helpfulVotes: Math.floor(Math.random() * (20 - 1) + 1),
    };
    dummyData.push(dummyReview);
  }

  Review.create(dummyData, (err) => {
    if (err) {
      console.log('Err', err);
    } else {
      console.log('Seeding complete');
      return;
    }
  });
};

generateData();
