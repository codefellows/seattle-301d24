# RESTful API

REpresentational State Transfer


5 chefs do everything
  - receive and seat guests
  - take customer orders
  - check up on customers for like water & shit
  - cook the food for the orders
  - serve the food
  - bus

1 host to meet and seat guests
2 waiters to take orders, check on customers, serve food, and bus
2 chefs to cook food

Online Restaurant

access food menu
access drink menu
order food
update food order
pay for food
leave a review

| HTTP Method | API endpoint | purpose |
| ----- | --- | --- |
| GET | /api/menus/food |     list the food menu |
| GET | /api/menus/drinks |   list the drink menu |
| GET | /api/orders |         list out all the existing orders |
| POST | /api/orders  |       add a new order |
| PUT | /api/orders/:id  |    edit an existing order |
| POST | /api/payments |      add a new payment |
| GET | /api/payments | list existing payments |
| GET | /api/payments/:id | detail for one payment |
| POST | /api/reviews   |     add a new review |
| GET | /api/reviews  |       list all existing reviews |
| DELETE | /api/reviews/:id | delete an existing review |

API - Application-Programming Interface

The way that you interact with any program/object

e.g. Array
.map()
.sort()
.length
.slice()
.splice()
.forEach()
.reduce()
.push()
.pop()
.shift()
.unshift()

e.g. Car
.accelerate()
.horn()
.headlightsOn()
.headlightsOff()
.brake()
.radio()
.wipers()
.shift()
.windows()

e.g. jQuery
$()
$().find()
$().addClass()
$.get()
$.post()
$.ajax()
