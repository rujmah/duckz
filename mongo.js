var mquery  = require('mquery');
var uri     = 'mongodb://127.0.0.1:27017/test';
var mongodb = require('mongodb');

mongodb.connect(uri, function (err, db) {
  if (err) return handleError(err);

  // get a collection
  var collection = db.collection('fabric');

  // pass it to the constructor
  mquery(collection).find({}, function (err, res) {
    if (err)
      throw err;
    console.log('mquery: ' + JSON.stringify(res[0]));
    console.log('mquery: ' + res[0].title);
  });

  // or pass it to the collection method
  // mquery().find({..}).collection(collection).exec(callback)

  // or better yet, create a custom query constructor that has it always set
  // var Artist = mquery(collection).toConstructor();
  // Artist().find(..).where(..).exec(callback)
});