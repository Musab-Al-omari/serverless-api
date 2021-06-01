const peopleSchema = require('./peopleSchema');

exports.handler = async(event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;

    let items

    // get a specific record
    items = await peopleSchema.delete({ id: id })

    return {
      statusCode: 200,
      body: JSON.stringify('items deleted')
    }
  } catch (err) {
    return {
      statusCode: 500,
      err: err.message
    }
  }


}