var fetch = require('node-fetch');

class Repo {
  constructor(name, description, owner) {
    this.name = name;
    this.description = description;
    this.owner = owner;
  }
}

class RepoService {
  constructor() { }

  static getUserRepos(token, callback) {
    const query = `
    query {
      viewer {
        repositories(first: 100, affiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER], orderBy: { field: NAME, direction: ASC }) {
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
      }
    }`;

    var request = {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }

    fetch('https://api.github.com/graphql', request)
      .then(handleErrors)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function (json) {
        var repos = new Array();

        json.data.viewer.repositories.edges.forEach(function (edge) {
          var repo = new Repo(edge.node.name, edge.node.description, edge.node.owner.name);
          repos.push(repo);
        });

        callback(repos);
      })
      .catch(error => console.error(error));
  }
};

module.exports = RepoService;