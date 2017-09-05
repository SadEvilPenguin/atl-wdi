[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

> A Project has...
> - a bunch of tasks
> - a Project name
> A Task has...
> - a action to do
> - a started date
> - a completion date
```js
  let project = {
    name: "Project",
    description: "The description of project",
    tasks: ['Run a 5k', 'task 2']
  }
  let task = {
    action: "Run a 5k",
    startDate: "Jan 1, 2017",
    endDate: null
  }
```  
> The project needs to have a name, a description of what the project is for and taks associated to it.
>The task would have an action/name, a start date and end date to figure out length of completion.


### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

>A User has...
> - a username
> - a set of uploaded images
> - a set of albums
>A Album has...
> - a name
> - a description
> - a collection of images
>A Photo has...
> - a name
> - a description
> - image url

```js
  const user = {
    username: "Chris",
    imagesUploaded: ["images/beach.jpg","photo2"]
    albums: ["summer vaca", "album2"]
  }
  const album = {
    name: "summer vaca",
    description: "Album of my summer vacation",
    images: ["beach.jpg","shopping.jpg"]
  }
  const photo = {
    name: "Beach",
    description: "Me at the beach",
    url: "images/beach.jpg"
  }
```
>The user is going to have a username set of albums and uploaded images The albums will have a name, descriptions and photo in the album. Each photo should have a name, description and url to access image file

### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

> A house has...
> - a list of thermostates in house
> - a list of lights in house
> - a temperatue
A light has...
> - a name
> - brightness level
A thermostat has...
> - a name

```js
const house = {
  temp: "79 degrees",
  thermostats: ["therm1", "therm2"],
  lights: ["light1", "light2"]
}
const lights = {
  name: "light1",
  brightness: "Bright"
}
const thermostat = {
  name: "therm1"
}
```
>Time should already be tracked but the house will have a temperature thermostates and lights. Each light will need to know what level of britness it has as well as a name. While Thermostats just need a name assuming there is more than one.

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

> The store has...
> - products
> - users

> A user has...
> - a username
> - orders

>The Product has ...
> - a price
> - qty
> - name
> - desctiption

The cart has ...
> - a list of products to purchase
> - a total

```js
const store = {
  products: ["sneaker1", "sneaker2"],
  users: ["user1", "user2"]
}
const user = {
  userName: "Chris",
  orders: ["order1", "order2"]
}
const product = {
  price: 100,
  qty: 1,
  name: "Sneaks",
  description: "these sneakers rock"
}
const cart = {
  productPurchase: ["sneaker1", "sneaker2"],
  totatl: 200
}
```
>so there are four levels here the store which has products and user. The user which buys products and has previous orders. The product itself which can be added to the cart. Finally the cart which allow user to buy product.

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

> each rail line can contain each station along its path. which means a user can see the stops along the way. However there is no way of keeping track of how many stops between each station as there is not data for it.

### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

> so in option 1 the appointment is made under the doctor which allow the user to choose there doctor first however if the user wanted to change their doctor for the appointment they wouldn't be able to.
>in option 2 both the doctor and patient are under the appointment allowing for the change in doctor or patient. 

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

  > Game:
  > - name
  > - users
  > - winner
  >User:
  > - name
  > - game peice
  > - tally

b.  How might those entities be represented in JavaScript code?

  > User = {
    name: "Chris",
    gamePiece: "x",
    tally: 2
  }
  >Game = {
    name: tic tac toe,
    users: ["user1", "user2"],
    winner: null
  }

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

  > I chose game and user. The game prepresent the current game being played by the users. So I nested them under the game. I am also tracking the game type and who won the current game. As for the users, since they are nested inside of the game they will have names as well as different game piece which will also represent who starts first and then a tally of time the user has won.
