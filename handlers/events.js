import db from '../models/dbConnection'

export const getEvents = async function(req, res, next) {
    const { year = '', month = '', day = '', time = '' } = req.query
    
}  

export const addEvent = function(req, res, next) {
    const { name, time, length } = req.body
    if (!name || !time || !length) {
        next({
            status: 400,
            message: 'Missing input field(s)'
        })
    } else {
        const event = { name, time, length }
        const sql = 'INSERT INTO events SET ?'
        db.query(sql, event, (err, data) => {
            if (err) {
                next(err)
            } else {
                console.log(data)
                res.status(200).json({
                    data
                })
            }
        }) 
    }
}
