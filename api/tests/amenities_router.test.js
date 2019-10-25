const request = require('supertest');
const server = require('../../index');


describe('when a list of amenities is requested', () => {
    it('status code should be 200', async () => {
        const res = await request(server).get('/api/amenities')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
        expect(res.statusCode).toEqual(200);
    });
});


describe('when a specific amenity is requested', () => {
    it('status code should be 200', async () => {
        const res = await request(server).get('/api/amenities/3')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
        expect(res.statusCode).toEqual(200);
    });
});

// describe('when a new amenity is created', () => {
//     it('status code should be 201', async () => {
//         const res = await request(server).post('/api/amenities')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         .send({
//             "name": "Watewefrr",
//             "icon": "dgrrerwfrrw"
//         })
//         expect(res.statusCode).toEqual(201);
//     });
// });

// describe('when an amenity is updated', () => {
//     it('status code should be 201', async () => {
//         const res = await request(server).put('/api/amenities/3')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         .send({
//             "name": "Waterdfd1",
//             "icon": "dgrrrrfw"
//         })
//         expect(res.statusCode).toEqual(201);
//     });
// });

// describe('when an amenity is deleted', () => {
//     it('status code should be 204', async () => {
//         const res = await request(server).delete('/api/amenities/4')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         expect(res.statusCode).toEqual(204);
//     });
// });

//-------------------Properties----------------------------------------------------------------
describe('environment should be testing', () => {
    it('environment should be test', async () => {
        const res = await request(server).get('/api/amenities')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
        expect(process.env.NODE_ENV).toBe("test");
    });
});
describe('when a list of properties is requested without Auth', () => {
    it('status code should be 400', async () => {
        const res = await request(server).get('/api/properties')
        // .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
        expect(res.statusCode).toEqual(400);
    });
});
describe('when a list of properties is requested', () => {
    it('res type should be JSON', async () => {
        const res = await request(server).get('/api/properties')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
        expect(res.type).toMatch(/json/i);
    });
});
describe('when a list of properties is requested', () => {
    it('status code should be 200', async () => {
        const res = await request(server).get('/api/properties')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
        expect(res.statusCode).toEqual(200);
    });
});

describe('when a specific property is requested', () => {
    it('responce object should contain id property', async () => {
        const res = await request(server).get('/api/properties/1')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
        console.log(res.text)
        expect(typeof res).toMatch('object');
    });
});
// describe('when a new property is created', () => {
//     it('status code should be 201', async () => {
//         const res = await request(server).post('/api/properties')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         .send({
//             "property_name": "North Beachs1",
//             "address": "11 Main sSt.",
//             "city": "Miamis",
//             "state": "Floridas",
//             "rating": 5,
//             "owner_id": 1
//         })
//         expect(res.statusCode).toEqual(201);
//     });
// });

// describe('when a property is updated', () => {
//     it('status code should be 201', async () => {
//         const res = await request(server).put('/api/properties/1')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         .send({
//             "property_name": "North Beachg2",
//             "address": "12 Magin St.",
//             "city": "Miamgi",
//             "state": "Florgida",
//             "rating": 5,
//             "owner_id": 1
//         })
//         expect(res.statusCode).toEqual(201);
//     });
// });

// describe('when a property is deleted', () => {
//     it('status code should be 204', async () => {
//         const res = await request(server).delete('/api/properties/5')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         expect(res.statusCode).toEqual(204);
//     });
// });
//-------------------Reservations----------------------------------------------------------------
// describe('when a list of reservations is requested', () => {
//     it('status code should be 200', async () => {
//         const res = await request(server).get('/api/reservations')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         expect(res.statusCode).toEqual(200);
//     });
// });

describe('when a list of reservations is requested', () => {
    it('status code should be 200', async () => {
        const res = await request(server).get('/api/reservations')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
        expect(res.statusCode).toEqual(200);
    });
});

describe('when a specific reservation is requested', () => {
    it('status code should be 200', async () => {
        const res = await request(server).get('/api/reservations/1')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
        expect(res.statusCode).toEqual(200);
    });
});

// describe('when a new reservation is created', () => {
//     it('status code should be 201', async () => {
//         const res = await request(server).post('/api/reservations')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         .send({
//             "property_name": "North Beachs1",
//             "address": "11 Main sSt.",
//             "city": "Miamis",
//             "state": "Floridas",
//             "rating": 5,
//             "owner_id": 1
//         })
//         expect(res.statusCode).toEqual(201);
//     });
// });

// describe('when a reservation is updated', () => {
//     it('status code should be 201', async () => {
//         const res = await request(server).put('/api/reservations/1')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         .send({
//             "property_name": "North Beachg2",
//             "address": "12 Magin St.",
//             "city": "Miamgi",
//             "state": "Florgida",
//             "rating": 5,
//             "owner_id": 1
//         })
//         expect(res.statusCode).toEqual(201);
//     });
// });

// describe('when a reservation is deleted', () => {
//     it('status code should be 204', async () => {
//         const res = await request(server).delete('/api/reservations/5')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         expect(res.statusCode).toEqual(204);
//     });
// });
//-------------------Users----------------------------------------------------------------
describe('when a list of users is requested', () => {
    it('status code should be 200', async () => {
        const res = await request(server).get('/api/users')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
        expect(res.statusCode).toEqual(200);
    });
});

// describe('when a list of users is requested', () => {
//     it('status code should be 200', async () => {
//         const res = await request(server).get('/api/users')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         expect(res.statusCode).toEqual(200);
//     });
// });

describe('when a specific user is requested', () => {
    it('status code should be 200', async () => {
        const res = await request(server).get('/api/users/1')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
        expect(res.statusCode).toEqual(200);
    });
});

describe('when a new user is created', () => {
    it('status code should be 201', async () => {
        const res = await request(server).post('/api/users')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
        .send({
            "property_name": "North Beachs1",
            "address": "11 Main sSt.",
            "city": "Miamis",
            "state": "Floridas",
            "rating": 5,
            "owner_id": 1
        })
        expect(req.body).toHaveProperty('first_name');
    });
});

// describe('when a property is updated', () => {
//     it('status code should be 201', async () => {
//         const res = await request(server).put('/api/users/1')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         .send({
//             "property_name": "North Beachg2",
//             "address": "12 Magin St.",
//             "city": "Miamgi",
//             "state": "Florgida",
//             "rating": 5,
//             "owner_id": 1
//         })
//         expect(res.statusCode).toEqual(201);
//     });
// });

// describe('when a property is deleted', () => {
//     it('status code should be 204', async () => {
//         const res = await request(server).delete('/api/users/5')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE5NDgzMDcsImV4cCI6MTU3MTk4NDMwN30.EJoFtp2EKpy9phglZKnpoAyo9Y3ujpWeHgDeVr18mic')
//         expect(res.statusCode).toEqual(204);
//     });
// });
