const db = require('./data/dbConfig.js');

module.exports = {
   find,
   findById,
   add,
   mod,
   destroy
};

function find(){
   return db('tbl-name');
}

function findById(id) {
   return db('tbl-name')
      .where({ id })
      .first();
}

async function add(arg) {
   try {
      const [id] = await 
         db("tbl-name")
            .insert(arg, "id");
      return findById(id);
   } catch (error) {
      throw error;
   }
}

function destroy(id) {
   return db('tbl-name')
   .where({ id })
   .del();
}

function mod(id, changes) {
   return db('tbl-name')
   .where({ id })
   .update(changes, '*');
}


