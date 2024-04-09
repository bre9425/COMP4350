import request from 'supertest';
import app from '../src/app.js';


describe('POST /create_user', () => {
    it('should create a new user and return a token', async () => {
        const response = await request(app)
            .post('/api/user/create_user') 
            .send({
                data: {
                    username: 'testUser',
                    password: 'testPassword',
                }
            });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('token');
    });


    

    it('should return a 400 error for missing password', async () => {
        const response = await request(app)
            .post('/api/user/create_user') 
            .send({
                data: {
                    username: 'testUser',
                    // Bad Input
                }
            });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toEqual("Username and password are required.");
    });

    it('should return a 400 error for missing username', async () => {
        const response = await request(app)
            .post('/api/user/create_user') 
            .send({
                data: {
                    password: 'testPass',
                    // Bad Input
                }
            });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toEqual("Username and password are required.");
    });

    it('should return a 400 error for sending empty string as username and password', async () => {
        const response = await request(app)
            .post('/api/user/create_user') 
            .send({
                data: {
                    password: '',
                    username: ''
                    // Bad Input
                }
            });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toEqual("Username and password are required.");
    });

    it('should return a 400 bad request for duplicate username', async () => {
        const response = await request(app)
            .post('/api/user/create_user') 
            .send({
                data: {
                    username: 'testUser',
                    password: 'testPassword',
                }
            });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toEqual("E11000 duplicate key error collection: test.users index: username_1 dup key: { username: \"testUser\" }");
    })
});



describe ('POST /login', () =>{
    it('should return a valid token and user data', async ()=>{
        const response = await request(app)
        .post('/api/user/login') 
        .send({
            username: 'testUser',
            password: 'testPassword',
        });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('token');
    })

    it('should return a 401 unauthorized for wrong password', async ()=>{  
        const response = await request(app)
        .post('/api/user/login') 
        .send({
            username: 'testUser',
            password: 'wrongPass',
        });
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toEqual("That ain't gonna work here chief");
    })

    it('should return a 404 for bad username', async ()=>{  
        const response = await request(app)
        .post('/api/user/login') 
        .send({
            username: 'badUser',
            password: 'testPassword',
        });
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toEqual("You don't exist...yet.");
    })

    it('should return a 400 for not including password', async ()=>{  
        const response = await request(app)
        .post('/api/user/login') 
        .send({
            username: 'testUser'
        });
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toEqual("Illegal arguments: undefined, string");
    })
})



describe('POST /getUser', () => {
    let token;
    let userID;

    beforeAll(async () => {
        const response = await request(app)
        .post('/api/user/login') 
        .send({
            username: 'testUser',
            password: 'testPassword',
        });
        token = response.body.token;
        userID = response.body.userObj._id;


        const response2 = await request(app)
        .post('/api/user/create_user') 
        .send({
            data: {
                username: 'test77User',
                password: 'test77Password',
            }
        });
    });


    it('should create a new user and return a token', async () => {
        const response = await request(app)
            .post('/api/user/create_user') 
            .send({
                data: {
                    username: 'test55User',
                    password: 'test55Password',
                }
            });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('token');
    });


    it('should return 201 and user data for a valid user id and token', async () => {

        const response = await request(app)
            .post('/api/user/getUser')
            .set('Authorization', `Bearer ${token}`)
            .send({ _id: userID });

        expect(response.statusCode).toBe(201);
        expect(response.body.userObj).toBeDefined();
        expect(response.body.userObj).not.toHaveProperty('password');
    });

    it('should return a 404 error for an invalid user id', async () => {
        const invalidUserID = 'someInvalidUserID';

        const response = await request(app)
            .post('/api/user/getUser')
            .set('Authorization', `Bearer ${token}`) // Use the same token
            .send({ _id: invalidUserID });

        expect(response.statusCode).toBe(404);
        expect(response.body.message).toEqual("Who you tryna contact? The wind?");
    });

    it('should return a 401 error for missing or invalid token', async () => {
        const response = await request(app)
            .post('/api/user/getUser')
            .send({ _id: 'anyUserID' }); // No Authorization header set

        expect(response.statusCode).toBe(401);
        expect(response.body.message).toEqual("Please authenticate.");
    });

});



describe('POST /validate', () => {
    it('should return 200 for a unique username', async () => {

        const response = await request(app)
            .post('/api/user/validate')
            .send({username: 'unique' });

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toEqual("Username is available");
    });

    it('should return 409 for a unique username', async () => {

        const response = await request(app)
            .post('/api/user/validate')
            .send({username: 'testUser' });

        expect(response.statusCode).toBe(409);
        expect(response.body.message).toEqual("Already taken");
    });
}); 


describe('GET /getMatches', () => {

    let token;
    let userID;

    beforeAll(async () => {
        const response = await request(app)
        .post('/api/user/login') 
        .send({
            username: 'testUser',
            password: 'testPassword',
        });
        token = response.body.token;
        userID = response.body.userObj._id;
    });
    
    it('should return a list of matches', async () => {
        const response = await request(app)
            .get('/api/user/getMatches')
            .set('Authorization', `Bearer ${token}`)
            .send({ });

        expect(response.statusCode).toBe(201);

    });

});

describe('POST /modifyUser', () => {

    let token;
    let userID;

    beforeAll(async () => {
        const response = await request(app)
        .post('/api/user/login') 
        .send({
            username: 'testUser',
            password: 'testPassword',
        });
        token = response.body.token;
        userID = response.body.userObj._id;
    });

    it('should return an error for wrong password', async () => {

        const response = await request(app)
            .post('/api/user/modifyUser')
            .set('Authorization', `Bearer ${token}`)
            .send({ password: "testsword",
                    currentPassword: "tempPass", 
                    DOB: "2000-04-18"});

        expect(response.statusCode).toBe(401);
    });


    it('should return an error for leavign authentication', async () => {

        const response = await request(app)
            .post('/api/user/modifyUser')
            .send({ password: "testsword",
                    currentPassword: "tempPass", 
                    DOB: "2000-04-18"});

        expect(response.statusCode).toBe(401);
    });



    ///check why not needed
    it('password not needed', async () => {

        const response = await request(app)
            .post('/api/user/modifyUser')
            .set('Authorization', `Bearer ${token}`)
            .send({ 
                    currentPassword: "tempPass", 
                    DOB: "2000-04-18"});

        expect(response.statusCode).toBe(201);
    });


    it('should return an error for leaving out DOB', async () => {

        const response = await request(app)
            .post('/api/user/modifyUser')
            .set('Authorization', `Bearer ${token}`)
            .send({ password: "testPassword",
                    currentPassword: "tempPass", 
                });

        expect(response.statusCode).toBe(401);
    });

    it('should return an error for leavign authentication', async () => {

        const response = await request(app)
            .post('/api/user/modifyUser')
            .send({ password: "testPassword",
                    currentPassword: "tempPass", 
                    DOB: "2000-04-18"});

        expect(response.statusCode).toBe(401);
    });

    it('should return correct', async () => {

        const response = await request(app)
            .post('/api/user/modifyUser')
            .set('Authorization', `Bearer ${token}`)
            .send({ password: "testPassword",
                    currentPassword: "tempPass", 
                    DOB: "2000-04-18"});

        expect(response.statusCode).toBe(401);
    });

});

describe('GET /getCurrentUserId', () => {

    let token;
    let userID;

    beforeAll(async () => {
        const response = await request(app)
        .post('/api/user/login') 
        .send({
            username: 'testUser',
            password: 'testPassword',
        });
        token = response.body.token;
        userID = response.body.userObj._id;
    });

    it('should return 201 and id', async () => {

        const response = await request(app)
            .get('/api/user/getCurrentUserId')
            .set('Authorization', `Bearer ${token}`)
            .send();

        expect(response.statusCode).toBe(200);
    });

    it('should return 401 for missing or invalid token', async () => {

        const response = await request(app)
            .get('/api/user/getCurrentUserId')
            .send();

        expect(response.statusCode).toBe(401);
    });
});

describe('GET /getFinally', () => {

    let token;
    let userID;

    beforeAll(async () => {
        const response = await request(app)
        .post('/api/user/login') 
        .send({
            username: 'testUser',
            password: 'testPassword',
        });
        token = response.body.token;
        userID = response.body.userObj._id;
    });

    it('should return a 201 output', async () => {
        const response = await request(app)
            .get('/api/user/getFinally')
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(201);

    });


});

