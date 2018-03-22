---
title: Adding Controllers
order: 3
github: https://github.com/talented-tomatoes/converge/blob/master/server/controllers/controller.js#L252-L275
description: Various controllers for creating new details about the event.
---

```js
let addPresentation = (req, res) => {
  var presentation = req.body.presentation;
  var speakers = req.body.speakers;

  models.Presentation.forge(presentation).save()
    .then(pres => {
      console.log('1 new presentation added to conference');
      for (var key in speakers) {
        models.PresentationSpeaker.forge({speaker_id: speakers[key].id, presentation_id: pres.id}).save()
          .then(record => {
            console.log('speaker_id/presentation_id added to join table');
          })
          .catch(err => {
            console.log(err);
          });

      }
      res.status(201).end();
    })
    .catch(err => {
      console.log('Error saving presentation: ', err);
      res.status(400).send('error saving presentation');
    });
};

let addConference = (req, res) => {
  models.Conference.forge(req.body).save()
    .then(conference => {
      console.log(conference.attributes.name, 'conference created');
      res.status(200).send('Conference saved!');
    })
    .catch(err => {
      console.log('error.error==> ',  err);
      if (err.detail.includes('already exists')) {
        res.status(500).send(`Conference ${req.body.name} has been added already!`);
      }
    });
};

let addSpeaker = (req, res) => {
  models.Speaker.forge(req.body).save()
    .then(speaker => {
      console.log('1 speaker saved: ', speaker.attributes.first_name, speaker.attributes.last_name);
      res.status(201).send(speaker);
    })
    .catch(err => {
      console.log('error: ', err);
      res.status(400).send('error saving speaker');
    });
};
```