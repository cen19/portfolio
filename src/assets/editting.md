---
title: Editting controllers
order: 4
github: https://github.com/talented-tomatoes/converge/blob/master/server/controllers/controller.js#L346-L364
description: Various controllers that help to edit existing details regarding the conference using BookshelfJS/Knex.
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

let updateSpeakerOfConf = (req, res) => {
  models.Speaker.where({id: req.body.id}).fetch()
    .then(speaker => {
      speaker.save(req.body, {method: 'update'});
      console.log('speaker updated: ', speaker);
      res.status(200).send('Speaker Updated!');
    })
    .catch(err => {
      console.log('error: ', err);
      res.status(400).send('error udpating speaker');
    });
};
```