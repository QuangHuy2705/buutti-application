import mongoose from 'mongoose'
import Event from '../models/event'

//Require the dev-dependencies
import chai from 'chai'
import chaiHttp from'chai-http'
import app from '../index'
const should = chai.should()

chai.use(chaiHttp)

describe('Events', () => {
    beforeEach((done) => { //Before each test we empty the database
        Event.remove({}, err => {
            done()
        })
    })
})

describe('/RANDOM routes', () => {
    it('it should return NOT FOUND response with /RANDOM routes', (done) => {
        chai.request(app)
            .get('/RANDOM')
            .end((err, res) => {
                res.should.have.status(404)
                res.body.err.message.should.be.eql('Not Found')

            })
    })
})

describe('/GET events', () => {
    it('it should NOT GET events without query input(s)', (done) => {
        chai.request(app)
            .get('/events')
            .end((err, res) => {
                res.should.have.status(400)
            })
    })
})