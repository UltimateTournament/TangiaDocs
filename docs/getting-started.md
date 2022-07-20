---
sidebar_position: 2
---

# Getting Started

Integrating with Tangia consist a few simple steps:
* get an account for [tangia.co](https://app.tangia.co)
* add your game to the list on our dashboard
* create a list of interactions you want to offer in-game
  * examples could be: monsters spawning, an extra live, a new item with the name of the donor on it, ...
* adapt your game code to talk to our API

## Adapting your game

Your game needs to do:
* let a player (a content creator/streamer) log into their Tangia account
  * they get an 8 letter code that they will enter e.g. in your settings
  * if they aren't logged in, you simply don't use any of our APIs and your game stays as-is
* poll for interaction events (identified by an ID previously defined by you)
* notify us when they stop playing

Implementing this is as easy as adding a few HTTP calls. If you're game is written in Unity we even have an SDK available:
* [Integrating a Unity game](./integration/unity)
* [Integrating anything else](./integration/http-api) (that can call HTTP)
