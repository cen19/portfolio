---
title: Back-End Controllers
order: 3
github: https://github.com/talented-tomatoes/converge/blob/master/server/controllers/controller.js#L346-L379
description: Two Back End controllers - editConference allows you to update all the details of the conference and update the DB, getConferenceById allows you to retreive all details associated with selected conference. Uses PostgreSQL as the DB and Knex/Bookshelf for the ORM.
---

```js
let editConference = (req, res) => {
  models.Conference.where({id: req.body.id}).fetch()
    .then(conference => {
      conference.save(req.body, {method: 'update'});
      res.status(200).send('Conference Updated!');
    })
    .catch(err => {
      res.status(400).send('error udpating conference');
    });
};

let getConferenceByConfID = (req, res) => {
  models.Conference.where({id: req.params.confID}).fetch()
    .then(conference => {
      res.status(200).send(conference);
    })
    .catch(err => {
      res.status(400).send('error fetching that specific conference');
    });
};
```