import express from 'express'
import { getEvents, addEvent } from '../handlers/events.js'

const router = express.Router({mergeParams: true})

router.route('/').get(getEvents)

router.route('/').post(addEvent)

export default router