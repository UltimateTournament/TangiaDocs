---
sidebar_position: 4
---

# Testing your game

Of course you want to test if your integration is working as expected, but you probably don't want to act as the audience and pay for your own items. 

Therefore every interaction has a _"Test Interaction"_ action, that you can trigger from the dashboard. This triggers an event specifically for your account.

To receive these events you have to log into Tangia within your game as if you were a creator. To do that, you'll find a _"Create testing creator code"_ on top of the game view. 

You can use it just like a regular creator code, the only difference is that 
* it only gets test events
* test events are not stored. So if your game is not currently polling the event will be lost
