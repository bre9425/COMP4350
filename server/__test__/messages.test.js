import request from 'supertest';
import app from '../src/app.js'

describe('MESSAGES', () => {
    let tokenUser1;
    let userId1;
    let tokenUser2;
    let userId2;
    let convoId;
    let messageId;;



    describe('POST /create_user', () => {
        it('should create a new user and return a token', async () => {
            const response = await request(app)
                .post('/api/user/create_user')
                .send({
                    data: {
                        username: 'test1User',
                        password: 'test1Password',
                    }
                });
            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('token');
        });

        it('should create a new user and return a token', async () => {
            const response = await request(app)
                .post('/api/user/create_user')
                .send({
                    data: {
                        username: 'test2User',
                        password: 'test2Password',
                    }
                });
            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('token');
        });
    });


    describe('SET UP CONVO', () => {

        beforeAll(async () => {
            const response = await request(app)
                .post('/api/user/login')
                .send({
                    username: 'test1User',
                    password: 'test1Password',
                });
            tokenUser1 = response.body.token;
            userId1 = response.body.userObj._id;

            const respond = await request(app)
                .post('/api/user/login')
                .send({
                    username: 'test2User',
                    password: 'test2Password',
                });

            tokenUser2 = respond.body.token;
            userId2 = respond.body.userObj._id;

            // User 1 likes User 2
            const response1 = await request(app)
                .post('/api/user/likeDislike')
                .set('Authorization', `Bearer ${tokenUser1}`)
                .send({ _id: userId2, like: true });
            expect(response1.statusCode).toBe(201);

            // User 2 likes User 1
            const response2 = await request(app)
                .post('/api/user/likeDislike')
                .set('Authorization', `Bearer ${tokenUser2}`)
                .send({ _id: userId1, like: true });
            expect(response2.statusCode).toBe(201);

            // Create a new conversation between User 1 and User 2
            const response3 = await request(app)
                .post('/api/convo/newConvo')
                .set('Authorization', `Bearer ${tokenUser1}`)
                .send({ username: 'test2User' });
            expect(response3.statusCode).toBe(201);

            const response4 = await request(app)
                .get('/api/convo/getConvos')
                .set('Authorization', `Bearer ${tokenUser1}`)
            expect(response4.statusCode).toBe(200);

            convoId = response4.body[0]._id;


        });


        it('should allow user1 to get their conversations', async () => {
            const response = await request(app)
                .get('/api/convo/getConvos')
                .set('Authorization', `Bearer ${tokenUser1}`);

            expect(response.statusCode).toBe(200);
        });
    });




    describe('GET /batchGetMessages', () => {
        it('should get batch of messages for a conversation', async () => {
            const response = await request(app)
                .get(`/api/message/batchGetMessages?convoID=${convoId}`)
                .set('Authorization', `Bearer ${tokenUser1}`);
            expect(response.statusCode).toBe(201);
            expect(response.body.messageList).toEqual(expect.any(Array));
        });

    });



    describe('POST /postMessage', () => {

        it('should post a new message from User 1 to User 2', async () => {
            const response = await request(app)
                .post('/api/message/postMessage')
                .set('Authorization', `Bearer ${tokenUser1}`)
                .send({
                    body: "Hello from user1 to user2",
                    convoID: convoId,
                });
            expect(response.statusCode).toBe(201);
            messageId = response.body._id;
        });
    });

    describe('DELETE /deleteMessage', () => {

        it('should delete a specific message by ID', async () => {
            const response = await request(app)
                .delete('/api/message/deleteMessage')
                .set('Authorization', `Bearer ${tokenUser1}`)
                .send({ _id: messageId });
            expect(response.statusCode).toBe(201);

        });
    });

    describe('Ice Breaker Button', () => {
        it('should send a specific ice breaker message', async () => {
            const iceBreakerMessage = "Hey! What's something you're passionate about?";

            const response = await request(app)
                .post('/api/message/postMessage')
                .set('Authorization', `Bearer ${tokenUser1}`)
                .send({
                    body: iceBreakerMessage,
                    convoID: convoId,
                });
            expect(response.statusCode).toBe(201);
        });
    });
});
