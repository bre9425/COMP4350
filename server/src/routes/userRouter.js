import express from 'express';
import { createUser, login, validUsername, getFinally, getUserData, modifyUser, likeDislike, getLikes, getCurrentUserId, getInterestMatches, blockUser, uploadImages } from '../controllers/userController.js'
import { decodeJWT } from '../config/auth.js'

const router = express.Router();

router.post('/create_user', createUser);
router.post('/validate', validUsername); 
router.post('/login', login)

router.get('/getMatches', decodeJWT, getInterestMatches)
router.post('/getUser', decodeJWT, getUserData)
router.post('/modifyUser', decodeJWT, modifyUser)
router.post('/likeDislike', decodeJWT, likeDislike)
router.get('/getLikes',decodeJWT, getLikes)
router.get('/getCurrentUserId', decodeJWT, getCurrentUserId)
router.get('/getFinally', decodeJWT, getFinally)
router.put('/blockUser', decodeJWT, blockUser); 
router.post('/uploadImages', decodeJWT, uploadImages)


export default router;
