const peopleSchema = require('./peopleSchema');

exports.handler = async(event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;
    let items;
    if (id) {
      // get a specific record
      items = await peopleSchema.query('id').eq(id).exec();
      console.log('items', items);
      items = items[0];

    } else {
      // get all records
      items = await peopleSchema.scan().exec();
    }

    return {
      statusCode: 200,
      body: JSON.stringify(items)
    }
  } catch (err) {
    return {
      statusCode: 500,
      err: err.message
    }
  }


}