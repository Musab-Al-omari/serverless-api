const peopleSchema = require('./peopleSchema');

exports.handler = async(event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;
    const { name, city } = JSON.parse(event.body);
    let items

    // get a specific record
    items = await peopleSchema.update({ id: id }, { name: name, city: city })
    items = await peopleSchema.query('id').eq(id).exec()
    console.log(items);
    items = items[0];

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