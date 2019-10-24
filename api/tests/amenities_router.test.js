const request = require('supertest');
const server = require('../../index');


// describe('when a list of amenities is requested', () => {
//     it('status code should be 200', async () => {
//         const res = await request(server).get('/api/amenities')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE4ODg2MjYsImV4cCI6MTU3MTkyNDYyNn0.DupG2O1brtW3ausAjLZgQqKnAiIoqFY4rham5ef1fUU')
//         expect(res.statusCode).toEqual(200);
//     });
// });

// describe('when a specific amenity is requested', () => {
//     it('status code should be 200', async () => {
//         const res = await request(server).get('/api/amenities/3')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE4ODg2MjYsImV4cCI6MTU3MTkyNDYyNn0.DupG2O1brtW3ausAjLZgQqKnAiIoqFY4rham5ef1fUU')
//         expect(res.statusCode).toEqual(200);
//     });
// });

// describe('when a new amenity is created', () => {
//     it('status code should be 201', async () => {
//         const res = await request(server).post('/api/amenities')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE4ODg2MjYsImV4cCI6MTU3MTkyNDYyNn0.DupG2O1brtW3ausAjLZgQqKnAiIoqFY4rham5ef1fUU')
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
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE4ODg2MjYsImV4cCI6MTU3MTkyNDYyNn0.DupG2O1brtW3ausAjLZgQqKnAiIoqFY4rham5ef1fUU')
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
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE4ODg2MjYsImV4cCI6MTU3MTkyNDYyNn0.DupG2O1brtW3ausAjLZgQqKnAiIoqFY4rham5ef1fUU')
//         expect(res.statusCode).toEqual(204);
//     });
// });
