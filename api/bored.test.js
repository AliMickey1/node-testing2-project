const request = require('supertest')
const db = require('../data/db-config')
const server = require('../server')
const Bored = require('./boredModel')

const bored_one = {activity: 'Have a dance party', type: 'Social', people: 'friends', free: true}
const bored_two = {activity: 'Have a party', type: 'Social', people: 'varied', free: false}

beforeAll(async ()=> {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db('bored').truncate()
})

afterAll(async () => {
    await db.destroy()
})

it('correct env var', ()=> {
    expect(process.env.DB_ENV).toBe('testing')
})

describe('Bored model functions', () => {
    it('created activity in db', async () => {
        let activity
        await Bored.add(bored_one)
        activity = await db('bored')
        expect(activity).toHaveLength(1)
    })
    it('inserted activity', async () => {
        const activity = await Bored.add(bored_one)
        expect(activity).toMatchObject({ activity_id:1,...activity })

    })
})

describe('[GET] /bored', ()=> {
    it('responds with 200 ok', async () => {
        const res = await request(server).get('/bored')
        expect(res.status).toBe(200)
    })
})

describe('[POST] /bored', () => {
    it('responds with 201', async () => {
        const res = await request(server).post('/bored')
        expect(res.status).toBe(201)
    })
})


// describe('[DELETE] / - deletes activity', () => {
//     it('removes activity from db', async () => {
//         const [activity_id] = await db('bored').insert(bored_one)
//         let act = await db('bored').where({activity_id}).first()
//         expect(act).toBeTruthy()
//         await request(server).delete('/bored/'+ activity_id)
//         act = await db('bored').where({activity_id}).first()
//         expect(act).toBeFalsy()
//     })
//     it('responds with the deleted joke', async () => {
//         await db('bored').insert(bored_one)
//         let act = await request(server).delete('/jokes/1')
//         expect(act.body).toMatchObject(bored_one)
//     })
// })


