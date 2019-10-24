const request = require('supertest');
const server = require('../../index');

// describe('when a list of properties is requested without authentication', () => {
//     it('status code should be 400', async () => {
//         const res = await request(server).get('/api/properties')
//         expect(res.statusCode).toEqual(400);
//     });
// });

// describe('when a list of properties is requested', () => {
//     it('status code should be 200', async () => {
//         const res = await request(server).get('/api/properties')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE4ODg2MjYsImV4cCI6MTU3MTkyNDYyNn0.DupG2O1brtW3ausAjLZgQqKnAiIoqFY4rham5ef1fUU')
//         expect(res.statusCode).toEqual(200);
//     });
// });

// describe('when a specific property is requested', () => {
//     it('status code should be 200', async () => {
//         const res = await request(server).get('/api/properties/1')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE4ODg2MjYsImV4cCI6MTU3MTkyNDYyNn0.DupG2O1brtW3ausAjLZgQqKnAiIoqFY4rham5ef1fUU')
//         expect(res.statusCode).toEqual(200);
//     });
// });

// describe('when a new property is created', () => {
//     it('status code should be 201', async () => {
//         const res = await request(server).post('/api/properties')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE4ODg2MjYsImV4cCI6MTU3MTkyNDYyNn0.DupG2O1brtW3ausAjLZgQqKnAiIoqFY4rham5ef1fUU')
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
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE4ODg2MjYsImV4cCI6MTU3MTkyNDYyNn0.DupG2O1brtW3ausAjLZgQqKnAiIoqFY4rham5ef1fUU')
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
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikplc3NpY2EiLCJmaXJzdF9uYW1lIjoiSmVzc2ljYSIsImxhc3RfbmFtZSI6IlF3ZXJ0eSIsImVtYWlsIjoiamVzc2ljYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxNCRSM3B6NUNNSXZpeVVsMS5kMjRrSUZPOHpLOHZvZnRodW9VLnEuYU5Ia21wMWdoc3hlVVBWMiIsIm93bmVyIjp0cnVlLCJhdmF0YXIiOiIiLCJpYXQiOjE1NzE4ODg2MjYsImV4cCI6MTU3MTkyNDYyNn0.DupG2O1brtW3ausAjLZgQqKnAiIoqFY4rham5ef1fUU')
//         expect(res.statusCode).toEqual(204);
//     });
// });