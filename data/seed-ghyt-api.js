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
  "created_at": "2020-02-26T13:10:26.630133593Z",
  "request": {
    "Action": "edited",
    "Assignee": null,
    "Installation": {
      "ID": 0
    },
    "Label": {
      "Color": "",
      "Default": false,
      "Description": "",
      "ID": 0,
      "Name": "",
      "NodeID": "",
      "URL": ""
    },
    "Number": 2,
    "PullRequest": {
      "Additions": 1,
      "Assignee": {
        "AvatarURL": "https://avatars0.githubusercontent.com/u/881943?v=4",
        "EventsURL": "https://api.github.com/users/cifren/events{/privacy}",
        "FollowersURL": "https://api.github.com/users/cifren/followers",
        "FollowingURL": "https://api.github.com/users/cifren/following{/other_user}",
        "GistsURL": "https://api.github.com/users/cifren/gists{/gist_id}",
        "GravatarID": "",
        "HTMLURL": "https://github.com/cifren",
        "ID": 881943,
        "Login": "cifren",
        "NodeID": "MDQ6VXNlcjg4MTk0Mw==",
        "OrganizationsURL": "https://api.github.com/users/cifren/orgs",
        "ReceivedEventsURL": "https://api.github.com/users/cifren/received_events",
        "ReposURL": "https://api.github.com/users/cifren/repos",
        "SiteAdmin": false,
        "StarredURL": "https://api.github.com/users/cifren/starred{/owner}{/repo}",
        "SubscriptionsURL": "https://api.github.com/users/cifren/subscriptions",
        "Type": "User",
        "URL": "https://api.github.com/users/cifren"
      },
      "Assignees": [
        {
          "AvatarURL": "https://avatars0.githubusercontent.com/u/881943?v=4",
          "EventsURL": "https://api.github.com/users/cifren/events{/privacy}",
          "FollowersURL": "https://api.github.com/users/cifren/followers",
          "FollowingURL": "https://api.github.com/users/cifren/following{/other_user}",
          "GistsURL": "https://api.github.com/users/cifren/gists{/gist_id}",
          "GravatarID": "",
          "HTMLURL": "https://github.com/cifren",
          "ID": 881943,
          "Login": "cifren",
          "NodeID": "MDQ6VXNlcjg4MTk0Mw==",
          "OrganizationsURL": "https://api.github.com/users/cifren/orgs",
          "ReceivedEventsURL": "https://api.github.com/users/cifren/received_events",
          "ReposURL": "https://api.github.com/users/cifren/repos",
          "SiteAdmin": false,
          "StarredURL": "https://api.github.com/users/cifren/starred{/owner}{/repo}",
          "SubscriptionsURL": "https://api.github.com/users/cifren/subscriptions",
          "Type": "User",
          "URL": "https://api.github.com/users/cifren"
        }
      ],
      "Base": {
        "Label": "cifren:master",
        "Ref": "master",
        "Repo": {
          "ArchiveURL": "https://api.github.com/repos/cifren/test_repo/{archive_format}{/ref}",
          "AssigneesURL": "https://api.github.com/repos/cifren/test_repo/assignees{/user}",
          "BlobsURL": "https://api.github.com/repos/cifren/test_repo/git/blobs{/sha}",
          "BranchesURL": "https://api.github.com/repos/cifren/test_repo/branches{/branch}",
          "CloneURL": "https://github.com/cifren/test_repo.git",
          "CollaboratorsURL": "https://api.github.com/repos/cifren/test_repo/collaborators{/collaborator}",
          "CommentsURL": "https://api.github.com/repos/cifren/test_repo/comments{/number}",
          "CommitsURL": "https://api.github.com/repos/cifren/test_repo/commits{/sha}",
          "CompareURL": "https://api.github.com/repos/cifren/test_repo/compare/{base}...{head}",
          "ContentsURL": "https://api.github.com/repos/cifren/test_repo/contents/{+path}",
          "ContributorsURL": "https://api.github.com/repos/cifren/test_repo/contributors",
          "CreatedAt": "2018-02-02T13:46:23Z",
          "DefaultBranch": "master",
          "Description": "",
          "DownloadsURL": "https://api.github.com/repos/cifren/test_repo/downloads",
          "EventsURL": "https://api.github.com/repos/cifren/test_repo/events",
          "Fork": false,
          "Forks": 0,
          "ForksCount": 0,
          "ForksURL": "https://api.github.com/repos/cifren/test_repo/forks",
          "FullName": "cifren/test_repo",
          "GitCommitsURL": "https://api.github.com/repos/cifren/test_repo/git/commits{/sha}",
          "GitRefsURL": "https://api.github.com/repos/cifren/test_repo/git/refs{/sha}",
          "GitTagsURL": "https://api.github.com/repos/cifren/test_repo/git/tags{/sha}",
          "GitURL": "git://github.com/cifren/test_repo.git",
          "HTMLURL": "https://github.com/cifren/test_repo",
          "HasDownloads": true,
          "HasIssues": true,
          "HasPages": false,
          "HasWiki": true,
          "Homepage": null,
          "HooksURL": "https://api.github.com/repos/cifren/test_repo/hooks",
          "ID": 119987048,
          "IssueCommentURL": "https://api.github.com/repos/cifren/test_repo/issues/comments{/number}",
          "IssueEventsURL": "https://api.github.com/repos/cifren/test_repo/issues/events{/number}",
          "IssuesURL": "https://api.github.com/repos/cifren/test_repo/issues{/number}",
          "KeysURL": "https://api.github.com/repos/cifren/test_repo/keys{/key_id}",
          "LabelsURL": "https://api.github.com/repos/cifren/test_repo/labels{/name}",
          "Language": null,
          "LanguagesURL": "https://api.github.com/repos/cifren/test_repo/languages",
          "MergesURL": "https://api.github.com/repos/cifren/test_repo/merges",
          "MilestonesURL": "https://api.github.com/repos/cifren/test_repo/milestones{/number}",
          "MirrorURL": null,
          "Name": "test_repo",
          "NodeID": "MDEwOlJlcG9zaXRvcnkxMTk5ODcwNDg=",
          "NotificationsURL": "https://api.github.com/repos/cifren/test_repo/notifications{?since,all,participating}",
          "OpenIssues": 1,
          "OpenIssuesCount": 1,
          "Owner": {
            "AvatarURL": "https://avatars0.githubusercontent.com/u/881943?v=4",
            "EventsURL": "https://api.github.com/users/cifren/events{/privacy}",
            "FollowersURL": "https://api.github.com/users/cifren/followers",
            "FollowingURL": "https://api.github.com/users/cifren/following{/other_user}",
            "GistsURL": "https://api.github.com/users/cifren/gists{/gist_id}",
            "GravatarID": "",
            "HTMLURL": "https://github.com/cifren",
            "ID": 881943,
            "Login": "cifren",
            "NodeID": "MDQ6VXNlcjg4MTk0Mw==",
            "OrganizationsURL": "https://api.github.com/users/cifren/orgs",
            "ReceivedEventsURL": "https://api.github.com/users/cifren/received_events",
            "ReposURL": "https://api.github.com/users/cifren/repos",
            "SiteAdmin": false,
            "StarredURL": "https://api.github.com/users/cifren/starred{/owner}{/repo}",
            "SubscriptionsURL": "https://api.github.com/users/cifren/subscriptions",
            "Type": "User",
            "URL": "https://api.github.com/users/cifren"
          },
          "Private": false,
          "PullsURL": "https://api.github.com/repos/cifren/test_repo/pulls{/number}",
          "PushedAt": "2019-08-15T00:47:11Z",
          "ReleasesURL": "https://api.github.com/repos/cifren/test_repo/releases{/id}",
          "SSHURL": "git@github.com:cifren/test_repo.git",
          "Size": 2,
          "StargazersCount": 0,
          "StargazersURL": "https://api.github.com/repos/cifren/test_repo/stargazers",
          "StatusesURL": "https://api.github.com/repos/cifren/test_repo/statuses/{sha}",
          "SubscribersURL": "https://api.github.com/repos/cifren/test_repo/subscribers",
          "SubscriptionURL": "https://api.github.com/repos/cifren/test_repo/subscription",
          "SvnURL": "https://github.com/cifren/test_repo",
          "TagsURL": "https://api.github.com/repos/cifren/test_repo/tags",
          "TeamsURL": "https://api.github.com/repos/cifren/test_repo/teams",
          "TreesURL": "https://api.github.com/repos/cifren/test_repo/git/trees{/sha}",
          "URL": "https://api.github.com/repos/cifren/test_repo",
          "UpdatedAt": "2019-03-18T16:44:01Z",
          "Watchers": 0,
          "WatchersCount": 0
        },
        "Sha": "214ab811509ffadd3da5a61ff086b718f30e1cf2",
        "User": {
          "AvatarURL": "https://avatars0.githubusercontent.com/u/881943?v=4",
          "EventsURL": "https://api.github.com/users/cifren/events{/privacy}",
          "FollowersURL": "https://api.github.com/users/cifren/followers",
          "FollowingURL": "https://api.github.com/users/cifren/following{/other_user}",
          "GistsURL": "https://api.github.com/users/cifren/gists{/gist_id}",
          "GravatarID": "",
          "HTMLURL": "https://github.com/cifren",
          "ID": 881943,
          "Login": "cifren",
          "NodeID": "MDQ6VXNlcjg4MTk0Mw==",
          "OrganizationsURL": "https://api.github.com/users/cifren/orgs",
          "ReceivedEventsURL": "https://api.github.com/users/cifren/received_events",
          "ReposURL": "https://api.github.com/users/cifren/repos",
          "SiteAdmin": false,
          "StarredURL": "https://api.github.com/users/cifren/starred{/owner}{/repo}",
          "SubscriptionsURL": "https://api.github.com/users/cifren/subscriptions",
          "Type": "User",
          "URL": "https://api.github.com/users/cifren"
        }
      },
      "Body": "helo tets\r\ntest2 sur plop branche",
      "ChangedFiles": 1,
      "ClosedAt": null,
      "Comments": 0,
      "CommentsURL": "https://api.github.com/repos/cifren/test_repo/issues/2/comments",
      "Commits": 1,
      "CommitsURL": "https://api.github.com/repos/cifren/test_repo/pulls/2/commits",
      "CreatedAt": "2019-03-26T08:45:34Z",
      "Deletions": 0,
      "DiffURL": "https://github.com/cifren/test_repo/pull/2.diff",
      "HTMLURL": "https://github.com/cifren/test_repo/pull/2",
      "Head": {
        "Label": "cifren:plop",
        "Ref": "plop",
        "Repo": {
          "ArchiveURL": "https://api.github.com/repos/cifren/test_repo/{archive_format}{/ref}",
          "AssigneesURL": "https://api.github.com/repos/cifren/test_repo/assignees{/user}",
          "BlobsURL": "https://api.github.com/repos/cifren/test_repo/git/blobs{/sha}",
          "BranchesURL": "https://api.github.com/repos/cifren/test_repo/branches{/branch}",
          "CloneURL": "https://github.com/cifren/test_repo.git",
          "CollaboratorsURL": "https://api.github.com/repos/cifren/test_repo/collaborators{/collaborator}",
          "CommentsURL": "https://api.github.com/repos/cifren/test_repo/comments{/number}",
          "CommitsURL": "https://api.github.com/repos/cifren/test_repo/commits{/sha}",
          "CompareURL": "https://api.github.com/repos/cifren/test_repo/compare/{base}...{head}",
          "ContentsURL": "https://api.github.com/repos/cifren/test_repo/contents/{+path}",
          "ContributorsURL": "https://api.github.com/repos/cifren/test_repo/contributors",
          "CreatedAt": "2018-02-02T13:46:23Z",
          "DefaultBranch": "master",
          "Description": "",
          "DownloadsURL": "https://api.github.com/repos/cifren/test_repo/downloads",
          "EventsURL": "https://api.github.com/repos/cifren/test_repo/events",
          "Fork": false,
          "Forks": 0,
          "ForksCount": 0,
          "ForksURL": "https://api.github.com/repos/cifren/test_repo/forks",
          "FullName": "cifren/test_repo",
          "GitCommitsURL": "https://api.github.com/repos/cifren/test_repo/git/commits{/sha}",
          "GitRefsURL": "https://api.github.com/repos/cifren/test_repo/git/refs{/sha}",
          "GitTagsURL": "https://api.github.com/repos/cifren/test_repo/git/tags{/sha}",
          "GitURL": "git://github.com/cifren/test_repo.git",
          "HTMLURL": "https://github.com/cifren/test_repo",
          "HasDownloads": true,
          "HasIssues": true,
          "HasPages": false,
          "HasWiki": true,
          "Homepage": null,
          "HooksURL": "https://api.github.com/repos/cifren/test_repo/hooks",
          "ID": 119987048,
          "IssueCommentURL": "https://api.github.com/repos/cifren/test_repo/issues/comments{/number}",
          "IssueEventsURL": "https://api.github.com/repos/cifren/test_repo/issues/events{/number}",
          "IssuesURL": "https://api.github.com/repos/cifren/test_repo/issues{/number}",
          "KeysURL": "https://api.github.com/repos/cifren/test_repo/keys{/key_id}",
          "LabelsURL": "https://api.github.com/repos/cifren/test_repo/labels{/name}",
          "Language": null,
          "LanguagesURL": "https://api.github.com/repos/cifren/test_repo/languages",
          "MergesURL": "https://api.github.com/repos/cifren/test_repo/merges",
          "MilestonesURL": "https://api.github.com/repos/cifren/test_repo/milestones{/number}",
          "MirrorURL": null,
          "Name": "test_repo",
          "NodeID": "MDEwOlJlcG9zaXRvcnkxMTk5ODcwNDg=",
          "NotificationsURL": "https://api.github.com/repos/cifren/test_repo/notifications{?since,all,participating}",
          "OpenIssues": 1,
          "OpenIssuesCount": 1,
          "Owner": {
            "AvatarURL": "https://avatars0.githubusercontent.com/u/881943?v=4",
            "EventsURL": "https://api.github.com/users/cifren/events{/privacy}",
            "FollowersURL": "https://api.github.com/users/cifren/followers",
            "FollowingURL": "https://api.github.com/users/cifren/following{/other_user}",
            "GistsURL": "https://api.github.com/users/cifren/gists{/gist_id}",
            "GravatarID": "",
            "HTMLURL": "https://github.com/cifren",
            "ID": 881943,
            "Login": "cifren",
            "NodeID": "MDQ6VXNlcjg4MTk0Mw==",
            "OrganizationsURL": "https://api.github.com/users/cifren/orgs",
            "ReceivedEventsURL": "https://api.github.com/users/cifren/received_events",
            "ReposURL": "https://api.github.com/users/cifren/repos",
            "SiteAdmin": false,
            "StarredURL": "https://api.github.com/users/cifren/starred{/owner}{/repo}",
            "SubscriptionsURL": "https://api.github.com/users/cifren/subscriptions",
            "Type": "User",
            "URL": "https://api.github.com/users/cifren"
          },
          "Private": false,
          "PullsURL": "https://api.github.com/repos/cifren/test_repo/pulls{/number}",
          "PushedAt": "2019-08-15T00:47:11Z",
          "ReleasesURL": "https://api.github.com/repos/cifren/test_repo/releases{/id}",
          "SSHURL": "git@github.com:cifren/test_repo.git",
          "Size": 2,
          "StargazersCount": 0,
          "StargazersURL": "https://api.github.com/repos/cifren/test_repo/stargazers",
          "StatusesURL": "https://api.github.com/repos/cifren/test_repo/statuses/{sha}",
          "SubscribersURL": "https://api.github.com/repos/cifren/test_repo/subscribers",
          "SubscriptionURL": "https://api.github.com/repos/cifren/test_repo/subscription",
          "SvnURL": "https://github.com/cifren/test_repo",
          "TagsURL": "https://api.github.com/repos/cifren/test_repo/tags",
          "TeamsURL": "https://api.github.com/repos/cifren/test_repo/teams",
          "TreesURL": "https://api.github.com/repos/cifren/test_repo/git/trees{/sha}",
          "URL": "https://api.github.com/repos/cifren/test_repo",
          "UpdatedAt": "2019-03-18T16:44:01Z",
          "Watchers": 0,
          "WatchersCount": 0
        },
        "Sha": "210b645478276fba41158e17452ad326d9fd7cae",
        "User": {
          "AvatarURL": "https://avatars0.githubusercontent.com/u/881943?v=4",
          "EventsURL": "https://api.github.com/users/cifren/events{/privacy}",
          "FollowersURL": "https://api.github.com/users/cifren/followers",
          "FollowingURL": "https://api.github.com/users/cifren/following{/other_user}",
          "GistsURL": "https://api.github.com/users/cifren/gists{/gist_id}",
          "GravatarID": "",
          "HTMLURL": "https://github.com/cifren",
          "ID": 881943,
          "Login": "cifren",
          "NodeID": "MDQ6VXNlcjg4MTk0Mw==",
          "OrganizationsURL": "https://api.github.com/users/cifren/orgs",
          "ReceivedEventsURL": "https://api.github.com/users/cifren/received_events",
          "ReposURL": "https://api.github.com/users/cifren/repos",
          "SiteAdmin": false,
          "StarredURL": "https://api.github.com/users/cifren/starred{/owner}{/repo}",
          "SubscriptionsURL": "https://api.github.com/users/cifren/subscriptions",
          "Type": "User",
          "URL": "https://api.github.com/users/cifren"
        }
      },
      "ID": 264421695,
      "IssueURL": "https://api.github.com/repos/cifren/test_repo/issues/2",
      "Labels": [
        {
          "Color": "e6e6e6",
          "Default": false,
          "Description": "",
          "ID": 1156387064,
          "Name": "En CR",
          "NodeID": "MDU6TGFiZWwxMTU2Mzg3MDY0",
          "URL": "https://api.github.com/repos/cifren/test_repo/labels/En%20CR"
        },
        {
          "Color": "e6e6e6",
          "Default": false,
          "Description": "",
          "ID": 1156387525,
          "Name": "En Conflit",
          "NodeID": "MDU6TGFiZWwxMTU2Mzg3NTI1",
          "URL": "https://api.github.com/repos/cifren/test_repo/labels/En%20Conflit"
        },
        {
          "Color": "ededed",
          "Default": false,
          "Description": "",
          "ID": 1290041569,
          "Name": "backlog",
          "NodeID": "MDU6TGFiZWwxMjkwMDQxNTY5",
          "URL": "https://api.github.com/repos/cifren/test_repo/labels/backlog"
        }
      ],
      "Links": {
        "Comments": {
          "Href": "https://api.github.com/repos/cifren/test_repo/issues/2/comments"
        },
        "Commits": {
          "Href": "https://api.github.com/repos/cifren/test_repo/pulls/2/commits"
        },
        "HTML": {
          "Href": "https://github.com/cifren/test_repo/pull/2"
        },
        "Issue": {
          "Href": "https://api.github.com/repos/cifren/test_repo/issues/2"
        },
        "ReviewComment": {
          "Href": "https://api.github.com/repos/cifren/test_repo/pulls/comments{/number}"
        },
        "ReviewComments": {
          "Href": "https://api.github.com/repos/cifren/test_repo/pulls/2/comments"
        },
        "Self": {
          "Href": "https://api.github.com/repos/cifren/test_repo/pulls/2"
        },
        "Statuses": {
          "Href": "https://api.github.com/repos/cifren/test_repo/statuses/210b645478276fba41158e17452ad326d9fd7cae"
        }
      },
      "Locked": false,
      "MergeCommitSha": "1e88129b04c361cc33a062aa56102c5b70e99f0d",
      "Mergeable": true,
      "MergeableState": "clean",
      "Merged": false,
      "MergedAt": null,
      "MergedBy": null,
      "Milestone": {
        "ClosedAt": "0001-01-01T00:00:00Z",
        "ClosedIssues": 0,
        "CreatedAt": "2019-03-26T09:39:14Z",
        "Creator": {
          "AvatarURL": "https://avatars0.githubusercontent.com/u/881943?v=4",
          "EventsURL": "https://api.github.com/users/cifren/events{/privacy}",
          "FollowersURL": "https://api.github.com/users/cifren/followers",
          "FollowingURL": "https://api.github.com/users/cifren/following{/other_user}",
          "GistsURL": "https://api.github.com/users/cifren/gists{/gist_id}",
          "GravatarID": "",
          "HTMLURL": "https://github.com/cifren",
          "ID": 881943,
          "Login": "cifren",
          "NodeID": "MDQ6VXNlcjg4MTk0Mw==",
          "OrganizationsURL": "https://api.github.com/users/cifren/orgs",
          "ReceivedEventsURL": "https://api.github.com/users/cifren/received_events",
          "ReposURL": "https://api.github.com/users/cifren/repos",
          "SiteAdmin": false,
          "StarredURL": "https://api.github.com/users/cifren/starred{/owner}{/repo}",
          "SubscriptionsURL": "https://api.github.com/users/cifren/subscriptions",
          "Type": "User",
          "URL": "https://api.github.com/users/cifren"
        },
        "Description": "",
        "DueOn": "2019-03-16T07:00:00Z",
        "HTMLURL": "https://github.com/cifren/test_repo/milestone/1",
        "ID": 4172794,
        "LabelsURL": "https://api.github.com/repos/cifren/test_repo/milestones/1/labels",
        "NodeID": "MDk6TWlsZXN0b25lNDE3Mjc5NA==",
        "Number": 1,
        "OpenIssues": 1,
        "State": "open",
        "Title": "v1",
        "URL": "https://api.github.com/repos/cifren/test_repo/milestones/1",
        "UpdatedAt": "2019-03-26T09:42:06Z"
      },
      "NodeID": "MDExOlB1bGxSZXF1ZXN0MjY0NDIxNjk1",
      "Number": 2,
      "PatchURL": "https://github.com/cifren/test_repo/pull/2.patch",
      "RequestedReviewers": [],
      "ReviewCommentURL": "https://api.github.com/repos/cifren/test_repo/pulls/comments{/number}",
      "ReviewComments": 0,
      "ReviewCommentsURL": "https://api.github.com/repos/cifren/test_repo/pulls/2/comments",
      "State": "open",
      "StatusesURL": "https://api.github.com/repos/cifren/test_repo/statuses/210b645478276fba41158e17452ad326d9fd7cae",
      "Title": "connect-15 - lol",
      "URL": "https://api.github.com/repos/cifren/test_repo/pulls/2",
      "UpdatedAt": "2019-11-22T14:21:06Z",
      "User": {
        "AvatarURL": "https://avatars0.githubusercontent.com/u/881943?v=4",
        "EventsURL": "https://api.github.com/users/cifren/events{/privacy}",
        "FollowersURL": "https://api.github.com/users/cifren/followers",
        "FollowingURL": "https://api.github.com/users/cifren/following{/other_user}",
        "GistsURL": "https://api.github.com/users/cifren/gists{/gist_id}",
        "GravatarID": "",
        "HTMLURL": "https://github.com/cifren",
        "ID": 881943,
        "Login": "cifren",
        "NodeID": "MDQ6VXNlcjg4MTk0Mw==",
        "OrganizationsURL": "https://api.github.com/users/cifren/orgs",
        "ReceivedEventsURL": "https://api.github.com/users/cifren/received_events",
        "ReposURL": "https://api.github.com/users/cifren/repos",
        "SiteAdmin": false,
        "StarredURL": "https://api.github.com/users/cifren/starred{/owner}{/repo}",
        "SubscriptionsURL": "https://api.github.com/users/cifren/subscriptions",
        "Type": "User",
        "URL": "https://api.github.com/users/cifren"
      }
    },
    "Repository": {
      "ArchiveURL": "https://api.github.com/repos/cifren/test_repo/{archive_format}{/ref}",
      "AssigneesURL": "https://api.github.com/repos/cifren/test_repo/assignees{/user}",
      "BlobsURL": "https://api.github.com/repos/cifren/test_repo/git/blobs{/sha}",
      "BranchesURL": "https://api.github.com/repos/cifren/test_repo/branches{/branch}",
      "CloneURL": "https://github.com/cifren/test_repo.git",
      "CollaboratorsURL": "https://api.github.com/repos/cifren/test_repo/collaborators{/collaborator}",
      "CommentsURL": "https://api.github.com/repos/cifren/test_repo/comments{/number}",
      "CommitsURL": "https://api.github.com/repos/cifren/test_repo/commits{/sha}",
      "CompareURL": "https://api.github.com/repos/cifren/test_repo/compare/{base}...{head}",
      "ContentsURL": "https://api.github.com/repos/cifren/test_repo/contents/{+path}",
      "ContributorsURL": "https://api.github.com/repos/cifren/test_repo/contributors",
      "CreatedAt": "2018-02-02T13:46:23Z",
      "DefaultBranch": "master",
      "Description": "",
      "DownloadsURL": "https://api.github.com/repos/cifren/test_repo/downloads",
      "EventsURL": "https://api.github.com/repos/cifren/test_repo/events",
      "Fork": false,
      "Forks": 0,
      "ForksCount": 0,
      "ForksURL": "https://api.github.com/repos/cifren/test_repo/forks",
      "FullName": "cifren/test_repo",
      "GitCommitsURL": "https://api.github.com/repos/cifren/test_repo/git/commits{/sha}",
      "GitRefsURL": "https://api.github.com/repos/cifren/test_repo/git/refs{/sha}",
      "GitTagsURL": "https://api.github.com/repos/cifren/test_repo/git/tags{/sha}",
      "GitURL": "git://github.com/cifren/test_repo.git",
      "HTMLURL": "https://github.com/cifren/test_repo",
      "HasDownloads": true,
      "HasIssues": true,
      "HasPages": false,
      "HasWiki": true,
      "Homepage": null,
      "HooksURL": "https://api.github.com/repos/cifren/test_repo/hooks",
      "ID": 119987048,
      "IssueCommentURL": "https://api.github.com/repos/cifren/test_repo/issues/comments{/number}",
      "IssueEventsURL": "https://api.github.com/repos/cifren/test_repo/issues/events{/number}",
      "IssuesURL": "https://api.github.com/repos/cifren/test_repo/issues{/number}",
      "KeysURL": "https://api.github.com/repos/cifren/test_repo/keys{/key_id}",
      "LabelsURL": "https://api.github.com/repos/cifren/test_repo/labels{/name}",
      "Language": null,
      "LanguagesURL": "https://api.github.com/repos/cifren/test_repo/languages",
      "MergesURL": "https://api.github.com/repos/cifren/test_repo/merges",
      "MilestonesURL": "https://api.github.com/repos/cifren/test_repo/milestones{/number}",
      "MirrorURL": null,
      "Name": "test_repo",
      "NodeID": "MDEwOlJlcG9zaXRvcnkxMTk5ODcwNDg=",
      "NotificationsURL": "https://api.github.com/repos/cifren/test_repo/notifications{?since,all,participating}",
      "OpenIssues": 1,
      "OpenIssuesCount": 1,
      "Owner": {
        "AvatarURL": "https://avatars0.githubusercontent.com/u/881943?v=4",
        "EventsURL": "https://api.github.com/users/cifren/events{/privacy}",
        "FollowersURL": "https://api.github.com/users/cifren/followers",
        "FollowingURL": "https://api.github.com/users/cifren/following{/other_user}",
        "GistsURL": "https://api.github.com/users/cifren/gists{/gist_id}",
        "GravatarID": "",
        "HTMLURL": "https://github.com/cifren",
        "ID": 881943,
        "Login": "cifren",
        "NodeID": "MDQ6VXNlcjg4MTk0Mw==",
        "OrganizationsURL": "https://api.github.com/users/cifren/orgs",
        "ReceivedEventsURL": "https://api.github.com/users/cifren/received_events",
        "ReposURL": "https://api.github.com/users/cifren/repos",
        "SiteAdmin": false,
        "StarredURL": "https://api.github.com/users/cifren/starred{/owner}{/repo}",
        "SubscriptionsURL": "https://api.github.com/users/cifren/subscriptions",
        "Type": "User",
        "URL": "https://api.github.com/users/cifren"
      },
      "Private": false,
      "PullsURL": "https://api.github.com/repos/cifren/test_repo/pulls{/number}",
      "PushedAt": "2019-08-15T00:47:11Z",
      "ReleasesURL": "https://api.github.com/repos/cifren/test_repo/releases{/id}",
      "SSHURL": "git@github.com:cifren/test_repo.git",
      "Size": 2,
      "StargazersCount": 0,
      "StargazersURL": "https://api.github.com/repos/cifren/test_repo/stargazers",
      "StatusesURL": "https://api.github.com/repos/cifren/test_repo/statuses/{sha}",
      "SubscribersURL": "https://api.github.com/repos/cifren/test_repo/subscribers",
      "SubscriptionURL": "https://api.github.com/repos/cifren/test_repo/subscription",
      "SvnURL": "https://github.com/cifren/test_repo",
      "TagsURL": "https://api.github.com/repos/cifren/test_repo/tags",
      "TeamsURL": "https://api.github.com/repos/cifren/test_repo/teams",
      "TreesURL": "https://api.github.com/repos/cifren/test_repo/git/trees{/sha}",
      "URL": "https://api.github.com/repos/cifren/test_repo",
      "UpdatedAt": "2019-03-18T16:44:01Z",
      "Watchers": 0,
      "WatchersCount": 0
    },
    "RequestedReviewer": null,
    "RequestedTeam": {
      "Description": "",
      "HTMLURL": "",
      "ID": 0,
      "MembersURL": "",
      "Name": "",
      "NodeID": "",
      "Permission": "",
      "Privacy": "",
      "RepositoriesURL": "",
      "Slug": "",
      "URL": ""
    },
    "Sender": {
      "AvatarURL": "https://avatars0.githubusercontent.com/u/881943?v=4",
      "EventsURL": "https://api.github.com/users/cifren/events{/privacy}",
      "FollowersURL": "https://api.github.com/users/cifren/followers",
      "FollowingURL": "https://api.github.com/users/cifren/following{/other_user}",
      "GistsURL": "https://api.github.com/users/cifren/gists{/gist_id}",
      "GravatarID": "",
      "HTMLURL": "https://github.com/cifren",
      "ID": 881943,
      "Login": "cifren",
      "NodeID": "MDQ6VXNlcjg4MTk0Mw==",
      "OrganizationsURL": "https://api.github.com/users/cifren/orgs",
      "ReceivedEventsURL": "https://api.github.com/users/cifren/received_events",
      "ReposURL": "https://api.github.com/users/cifren/repos",
      "SiteAdmin": false,
      "StarredURL": "https://api.github.com/users/cifren/starred{/owner}{/repo}",
      "SubscriptionsURL": "https://api.github.com/users/cifren/subscriptions",
      "Type": "User",
      "URL": "https://api.github.com/users/cifren"
    }
  },
  "feedback": [
    {
      "ConditionFeedbacks": [
        {
          "Name": "equal",
          "Result": true,
          "ErrorMessage": ""
        },
        {
          "Name": "regex",
          "Result": true,
          "ErrorMessage": ""
        }
      ],
      "ActionFeedbacks": [
        {
          "Name": "addTag",
          "ErrorMessage": "An error happened in the AddTagYoutrack action for the folowing reason : 'Get https://my-YT.local/issues/connect-15?fields=id%2CidReadable%2Csummary%2Cdescription%2Ctags%28id%2Cname%2Ccolor%28background%2Cforeground%29%29: dial tcp: lookup my-YT.local: no such host'"
        }
      ]
    },
    {
      "ConditionFeedbacks": null,
      "ActionFeedbacks": null
    }
  ],
  "error_message": "",
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
