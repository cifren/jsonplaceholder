// Run this to generate db.json
var fs = require('fs');
var _ = require('underscore');
var Factory = require('rosie').Factory;
var Faker = require('Faker');
var db = {};

// Credit http://www.paulirish.com/2009/random-hex-color-code-snippets/
function hex() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

var jobs = [
  {
    'name': "First Job",
    'conditions': [
      {
        Name: 'equal',
        Arguments: {
          "variableName":"event.pull_request.state",
          "value": "open"
        },
      },
      {
        Name: 'regex',
        Arguments: {
          'variableName': 'event.pull_request.title',
          'value': 'connect-[^-][0-9]*',
          'persistName': 'yt_id',
        },
      },
    ],
    'actions': [
      {
        To: 'youtrack',
        Name: 'addTag',
        Arguments: {
          'youtrackId': 'yt_id',
          'tagName': 'nok',
        },
      },
      {
        To: 'youtrack',
        Name: 'removeTag',
        Arguments: {
          'youtrackId': 'yt_id',
          'tagName': 'nok',
        },
      },
    ],
  },
];

// Tables
db.jobs = [];
db.actions = [];
db.conditions = [];

// Factories
Factory.define('job').sequence('id');
Factory.define('action').sequence('id');
Factory.define('condition').sequence('id');

//Build
jobs.forEach(function(jobDef){
  var jobEntity = Factory.build('job', {name: jobDef.name, conditions: [], actions: []})

  jobDef.conditions.forEach(function(conditionDef){
    var conditionEntity = Factory.build('condition', {...conditionDef, ...{jobId: jobEntity.id}})
    db.conditions.push(conditionEntity)
    jobEntity.conditions.push({...conditionEntity})
  })

  jobDef.actions.forEach(function(actionDef){
    var actionEntity = Factory.build('action', {...actionDef, ...{jobId: jobEntity.id}})
    db.actions.push(actionEntity)
    jobEntity.actions.push({...actionEntity})
  })
  db.jobs.push(jobEntity)
})

fs.writeFileSync('data/db-ghyt-api.json', JSON.stringify(db, null, 2));
