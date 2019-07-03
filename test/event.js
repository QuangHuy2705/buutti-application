
import mongoose from 'mongoose'
import { Event } from '../models/index'

//Require the dev-dependencies
import chai from 'chai'
import chaiHttp from'chai-http'
import app from '../index'
const should = chai.should()

chai.use(chaiHttp)

//parent block
describe('EVENTS', () => {
    beforeEach((done) => { //mock data for testing
        Event.create([
            {
                name: 'Halloween Party',
                schedule: '2019-08-02 23:40',
                length: 4
            },
            {   
                name: 'Halloween Party1',
                schedule: '2019-08-20 23:40',
                length: 4
            }
        ], (err) => { 
           done()          
        })       
    })

    afterEach(done => { 
        Event.deleteMany({}, err => { //after the test, clear database
            done()
        })
    })

    //test /POST route 
    describe('/POST', () => {
        it('should create a new event', (done) => {
            const event = {
                name: 'test1',
                schedule: '2019-07-03 12:23',
                length: 4
            }
    
            chai.request(app)
                .post('/api/events/')
                .send({...event})
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('event')
                })
    
                done()
        })
    })

    //test /GET route
    describe('/GET events', () => {
        it('it should NOT GET events without query input(s)', (done) => {
            chai.request(app)
                .get('/api/events')
                .end((err, res) => {
                    res.should.have.status(400)
                    console.log(`here`)
                    done()
                })
        })
    })
    
    //test /RANDOM routes
    describe('/RANDOM routes', () => {
        it('it should return NOT FOUND response with /RANDOM routes', (done) => {
            chai.request(app)
                .get('/RANDOM')
                .end((err, res) => {
                    res.should.have.status(404)
                    res.body.err.message.should.be.eql('Not Found')
    
                    done()
                })
        })
    })
})



