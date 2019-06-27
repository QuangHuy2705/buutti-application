// import db from '../models/dbConnection'

// export const getEvents = async function(req, res, next) {
//     const { name = '', year = '', month = '', day = '', time = '' } = req.query

//     const sql = `SELECT * FROM events WHERE `
// }  

// export const addEvent = function(req, res, next) {
//     const { name, time, length } = req.body
//     if (!name || !time || !length) {
//         next({
//             status: 400,
//             message: 'Missing input field(s)'
//         })
//     } else {
//         const event = { name, time, length }
//         const sql = 'INSERT INTO events SET ?'
//         db.query(sql, event, (err, data) => {
//             if (err) {
//                 next(err)
//             } else {
//                 console.log(data)
//                 res.status(200).json({
//                     data
//                 })
//             }
//         }) 
//     }
// }

import { Event } from '../models/index'

export async function getEvents(req, res, next) {
    try {
        const { year, month, day, time, name } = req.query

        const events = await Event.find({
            time: `2012-06-18 15:34`
        })

        return res.status(200).json({
            events
        })
    } catch (e) {
        return next(e)
    }

}

export async function addEvent(req, res, next) {    
    try {
        const { name, length, time } = req.body
        if (!name || !time || !length) {
            next({
                status: 400,
                message: 'Missing input field(s)'
            }) 
        } else {
            const event = await Event.create({
                name,
                length,
                time
            })
            return res.status(200).json({event})
        }
    } catch (e) {
        return next(e)
    }
}