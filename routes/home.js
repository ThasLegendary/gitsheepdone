var express = require('express');
var router = express.Router();

var fetch = require('node-fetch');

router.get('/home', function (req, res, next) {

  const query = `viewer {
    repositories(first: 100, affiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER], orderBy: { field: name, direction:desc }) {
      edges {
        node {
          name,
          description
          owner {
            login
          }
        }
      }
    }
  }`;

/*
nameWithOwner
    description
    createdAt
    updatedAt
    isFork
    */

  fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      'Authorization': `Bearer ${req.user.accessToken}`,
    },
  }).then(res => res.text())
    .then(body => console.log(body))
    .catch(error => console.error(error));
  res.render('home');
});

module.exports = router;
