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
        name: 'equal',
        arguments: {
          "variableName":"event.pull_request.state",
          "value": "open"
        },
      },
      {
        name: 'regex',
        arguments: {
          'variableName': 'event.pull_request.title',
          'value': 'connect-[^-][0-9]*',
          'persistName': 'yt_id',
        },
      },
    ],
    'actions': [
      {
        to: 'youtrack',
        name: 'addTag',
        arguments: {
          'youtrackId': 'yt_id',
          'tagName': 'nok',
        },
      },
      {
        to: 'youtrack',
        name: 'removeTag',
        arguments: {
          'youtrackId': 'yt_id',
          'tagName': 'nok',
        },
      },
    ],
  },
];

var log = {
  request: {
    type: "pull_request",
    title: "example"
  },
  feedback: [{
    condition_feedbacks: [
      {
        name: "example1",
        result: false,
        error_message: ""
      }
    ],
    action_feedbacks: [
      {
        name: "example1",
        error_message: ""
      }
    ]
  }]
}

// Tables
db.jobs = [];
db.logs = [];

// Factories
Factory.define('job').sequence('id');
Factory.define('log').sequence('id');

//Build
jobs.forEach(function(jobDef){
  var jobEntity = Factory.build('job', {name: jobDef.name, conditions: [], actions: []})

  jobDef.conditions.forEach(function(conditionDef){
    var conditionEntity = {...conditionDef, ...{jobId: jobEntity.id}}
    jobEntity.conditions.push({...conditionEntity})
  })

  jobDef.actions.forEach(function(actionDef){
    var actionEntity = {...actionDef, ...{jobId: jobEntity.id}}
    jobEntity.actions.push({...actionEntity})
  })
  db.jobs.push(jobEntity)
})

var logEntity = Factory.build('log', log)
db.logs.push(logEntity)

fs.writeFileSync('data/db-ghyt-api.json', JSON.stringify(db, null, 2));
