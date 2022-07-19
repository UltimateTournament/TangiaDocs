---
sidebar_position: 1
---

# Integrating *any* game

As long as your programming language of choice has a way to do HTTP calls and de-/serialize JSON, you should have no trouble integrating with Tangia.

As a short recap, this is what you have to do:
1. In your settings allow content creators to enter their Tangia code to log in
   * store the resulting session key
   * don't do any of the below if you don't have a session
2. Poll for interaction events
3. Confirm or reject events after you've processed/rejected them
4. Stop polling and notify us when the player has stopped actively playing
   * this is so we can immediately show what they are currently playing and nobody tries buy some boost while they are outside of the game

## Login

Content creators log into your game with a short code that they get from their Tangia profile.
You need to offer the content creator a way to configure this code, e.g. as a text box in your settings.

:::note
Make sure to enable pasting the code, so your players don't have to type out their codes
:::

These codes are one-time use: You send them to our API and get a session token that you need to store, so the player doesn't have to re-enter the code every time

```http
POST https://api.tangia.co/game/login HTTP/1.1
Content-Type: application/json

{ "GameID": "YOUR_GAME_ID", "Code": "THE_STREAMERS_CODE" }
```

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{ "SessionID": "THE_SESSION_ID" }
```

## Polling and Confirming Events

If the user is logged in and within a game you have to poll our API for interaction events and for each event either acknowledge or reject it, so we know if it was successful.

:::note
You have to confirm events to get the next one! Also only confirmed events count towards your commission.
:::

### Polling

This is a long-polling API, which means it will immediately return events that have happened since you last called and otherwise will block for some time (currently ~10s) and either return as soon as an event happens or with an empty response after a timeout.

While the player is actively playing you should call this endpoint in an infinite loop.

```http
POST https://api.tangia.co/game/interactions/poll HTTP/1.1
Authorization: Bearer THE_SESSION_ID
Content-Length: 0
```

If there are no events for ~10s you'll get a 204. Just start polling again in this case:
```http
HTTP/1.1 204 No Content
```

If there are events:
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
  "Events": [
    {
      "EventID": "A_RANDOM_UNIQUE_ID",
      "InteractionID": "ID_YOU_DEFINED_IN_THE_DASHBOARD",
      "Price": 123, // these are USD cents
      "BuyerName": "Display Name of the buyer"
    }
  ]
}
```

### Ack or Reject

So we know if the game was actually able to process an interaction, you have to acknowledge or reject them as needed. Rejected events will be refunded to buyers.

```http
POST https://api.tangia.co/game/interactions/ack HTTP/1.1
Authorization: Bearer THE_SESSION_ID
Content-Type: application/json

{
    "EventResults": [
        {
            "EventID": "THE_ID_YOU_RECEIVED_ABOVE",
            "Executed": true, // or false to reject it
            "Message": "" // if rejected, describe why
        }
    ]
}
```

```http
HTTP/1.1 202 Accepted
```

## Stop Polling and Notify Game Stopped

You should only be polling for events when the player is actively playing the game and interaction events _could_ be processed.
You should not poll when they are in a menu or lobby screen, so their audience doesn't try to interact with them while it's not possible.

Stopping to poll will also eventually mark the content creator as not-playing your game anymore, but to get this experience instanly you should call this as soon as you stop polling:

```http
POST https://api.tangia.co/game/interactions/stop_playing HTTP/1.1
Authorization: Bearer THE_SESSION_ID
```

```http
HTTP/1.1 202 Accepted
```
