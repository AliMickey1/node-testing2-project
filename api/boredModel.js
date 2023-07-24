const db = require('../data/db-config')

module.exports = {
    // findBy,
    getById,
    getAll,
    add,
    // remove,
    // update,
}
async function add(act) {
    const [id] = await db('bored').insert(act)
    return db('bored').where('activity_id', id).first()
    // const newId = await db('bored').insert(act)
    // const newActivity = await db('bored')
    //     .select('activity_id','activity')
    //     .where('activity_id', newId)
    //     .first()
    // return findById(newActivity)
}

// async function remove(id) {
//     const act = await db('bored').where('activity_id', id).first()
//     // return db('bored').where('activity_id', id).del()
//     await db('bored').where('activity_id', id).del()
//     return act
// }


// async function findBy(filter) {
//     const [bored] = await db('bored')
//     .where('activity_id', filter).orWhere('activity', filter)
//     .orWhere('type', filter).orWhere('people', filter).orWhere('free', filter)
  
//      return bored
//   }

  async function getById(id) {
    return db('bored').where('activity_id', id).first()
  }

//     const activity = await db('bored')
//     .select('activity_id', 'activity')
//     .where('activity_id', activity_id)
//     return activity
//   }

function getAll() {
    return db('bored')
}



// function update() {
//     return null
// }