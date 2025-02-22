const mongoose = require('mongoose');
// const {schema, model} = mongoose;
require('dotenv').config();

mongoose.connect(process.env['MONGO_URI'], { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name : { type: String, required: true },
    age :  { type: Number },
    favoriteFoods : [{type: String}]
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
    var jubayerArefin = new Person({name: "Jubayer Arefin", age: 35, favoriteFoods: ["Biriyani", "Roast", "Borhani"]});
    jubayerArefin.save(function(err, data) {
        if (err) return console.error(err);
        done(null, data)
    });
};

var arrayOfPeople = [
        {name: "Mr. Arefin", age: 35, favoriteFoods: ["Biriyani", "Roast", "Borhani"]},
        {name: "Mr. Jubayer", age: 35, favoriteFoods: ["Biriyani", "Roast", "Borhani"]},
        {name: "Mr. Jubayer Arefin", age: 35, favoriteFoods: ["Biriyani", "Roast", "Borhani"]}
    ];

const createManyPeople = (arrayOfPeople, done) => {
    
    Person.create(arrayOfPeople, function(err, people) {
        if (err) return console.error(err);
        done(null, people)
    });
};

var personName = "Jubayer";

const findPeopleByName = (personName, done) => {
    Person.find({name:personName}, function(err, data){
        if (err) return console.error(err);
        done(null, data); 
    });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food}, function(err, data){
        if (err) return console.error(err);
        done(null, data); 
    });
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
