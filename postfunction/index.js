const uuid = require('uuid').v4;
const People = require('./peopleSchema')

exports.handler = async(event) => {
  // code goes here
  try {
    const id = uuid();
    const { name, city } = JSON.parse(event.body);
    let record = new People({ id, name, city });
    let newRecord = await record.save();
    return {
      statusCode: 201,
      body: JSON.stringify(newRecord)
    }
  } catch (err) {
    return {
      statusCode: 500,
      err: err.message
    }
  }

}