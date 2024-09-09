---
description: "We will start from explaining what kinds of annotation we are doing (essay annotation, transcript annotation, speech diarisation) and why (for the purpose of ML training in foreign language context). We will then briefly show architecture of a bespoke text editor based on good old Reagent. From that, we'll proceed to adding annotation capabilities (think MS Word with tracking changes enabled on steroids): our data structure, usefulness of rule engines, pros and cons of using Specter for that particular challenge and what has helped (tests and docstrings).\r\n\r\nIn the second part of the talk, we will move on to building a tool for annotating entire audio conversations. It will require explanations of concepts such as segments and speaker diarisation. It will also be useful to tell quickly what ML we are using to get the initial data we are going to annotate. We will then explain our segmentation algorithm in Clojure and the data structure we arrive at.\r\n\r\nFor the UI, we will stand on the shoulders of giants (Wavesurfer.js) but will still face some challenges such as how to represent overlapping speech, or what is the most effective way of an annotator to correct speaker assignment for a fragment of transcription. Also pros and cons of having multiple local undo histories as opposed to global undo. We will also cover some fun algorithmic stuff such as how to keep user's changes in the transcript while the user is resizing a segment and how Clojure is great for this stuff.\r\n\r\nWorking on annotation software is a very gratifying experience as the working material is a human output such as essays or conversations. If we add to this an interactive application written in ClojureScript, the fun is only multiplied and this talk is intended to share it."
speaker-img: /img/speakers/pawel-stroinski.jpeg
slug: building-conversational-speech-annotation-tool-in-clojure
speakers:
- name: Paweł Stroiński
  biography: Paweł first started writing code 25 years ago in Turbo Pascal. He's programmed professionally using Delphi, XSLT, VB.NET, C#, JavaScript, TypeScript, and Clojure. Has experience on the entrepreneurial side and passion for music. A proud father of a six years old.
  avatar: http://cfp.heartofclojure.eu/media/avatars/1372463_h7YMewg.jpeg
  img: /img/speakers/pawel-stroinski.jpeg
  personal-site-url: https://stroin.ski
  mastodon: '@pawel@functional.cafe'
  mastodon-handle: pawel
  mastodon-instance: functional.cafe
abstract: This talk will be a story of inheriting a bespoke text editor with annotation features written in ClojureScript and turning it into a number of things. It will include horror stories of debugging in-house Specter macros running in browser as well as calming stories of how nice it is to work in a code with a good test coverage even if it is difficult to approach, or how enjoyable it is to create interactive audio annotation tooling in ClojureScript.
type: Talk
title: Building Conversational Speech Annotation Tool in Clojure
code: SL7C7G
image: https://dynogee.com/gen?id=xqxdvgzswovkl2c&speaker=Pawe%C5%82+Stroi%C5%84ski&title=Building+Conversational+Speech+Annotation+Tool+in+Clojure&type=Talk&img=https%3A//2024.heartofclojure.eu/img/speakers/pawel-stroinski.jpeg%3Fv%3D-980027601
---
