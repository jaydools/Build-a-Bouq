# Build a Bouq 💐

## Overview

Build a Bouq is an interactive tool for flower shop owners to use on their website, to help increase engagement and drive sales. Users are able to pick flowers from the stores inventory, and have them displayed visually on screen in the way that they would expect to see them in real person. Users can then add that custom boquet to their shopping cart and checkout.

### Problem

Most flower shop websites are old and outdated, with no real way to see what it is that your ordering. There are usually short descriptions, referencing the colour themes, size and/or a list of flowers that are usually included, but flowers are seasonal and things change. Most flower shop websites will have a photo of a bouquet, but if you've ever ordered flowers for someone, you know that you usually have to wait to recieve a picture from the recipient in order to really know what you bought.

Websites should be interactive to hold attention, and users should be able to make orders effortlessly.  
Store owners should be able to showcase ALL their inventory and having a way to do that is essential.

The more that a customer looks forward to buying your product, the easier it is to sell. The simpler it is to purchase, the more likely it is that it will happen.

People love building things, so this app will showcase the options available and make it efortless to checkout.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

Customers - customer accounts? or maybe sprint 2
Owners - essential. they need to have an account to access api for data

### Features

Preview component:
---> This will dynamically display the users selected inputs

Options component:
---> There will be multiple layers for the user to choose - focal, secondary and folliage for example.
------> Within those layers, options will be available - lilly's, sunflowers, ferns for example.
---------> Focal and secondary will have the same options avilable

Price will be displayed:
---> Each individual flower will show its cost
------> There will be a grand total (+shipping and taxes)
---------> Add to cart will be the CTA

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.
HTML
SCSS
REACT
AXIOS
NODE
EXPRESS
MySQL

### APIs

I will need to create my own API that the client can request to. In order for the app to work,
the client will need to install the app and obtain an API key. The API key will fetch the flower
images from the server to be displayed live on the website, based off what inventory the store has.

### Sitemap

#### Homepage

---> This will be where main feature of this application will live.
------> It will have a nav bar ontop, the builder component as the hero and then some hooks and social proof below to help secure sales

### Login

---> This is where customers can log in and see their order history

### About

---> This will be a brief description of the "company" and/or will outline the project, and why it was built

### Mockups

![image](./src/Assets/Mockups/mobile.jpg)
![image](./src/Assets/Mockups/desktop.png)

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

### Endpoints

Get localhost:8080/ (website assets)
Get locahost:8080/builder (builder images)

(maybe)
Get localhost:8080/inventory
Put localhost:8080/inventory
Get localhost:8080/login (user ID data)

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

### Current considerations

How to deal with store inventory
---> Do they need to host inventory data on my server?
------> can they send inventory data instead so its only get request?

API Key
---> How do I make one?

Users
---> Can this be the responsability of client? (as Build a Bouq is only for stores, users are stores responsability)
