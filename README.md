# App Title: AFBELARDI Photo Store

### App Demo:

---

## Concept:




## Concept:

This site is a combination of portfolio/webstore of some of my favorite photos that I've taken throughout my 10 years of using a camera. The user has the ability to scroll through the photos, click on each individually to reveal the title and price and then check out using a secure Stripe payment method. 

## Technologies Used

* MongoDB
* Mongoose
* Express 
* React
* Node.js
* React
* JSX


#### Credits:

https://stripe.com/docs


### Wireframe



#### User Stories

Upon landing at the store page, the user will see a header image with my store title as well as a store button. Upon scrolling down, the user will see a side-scrolling row of images. After clicking on an individual image, the user is directed to a page with a larger resolution version of the image with the title, size of print and price. At the bottom of the page there is a checkout button which redirects to Stripe's API to complete the checkout. Once a user successfully checks out, they are redirected to a success page.

### Development Plan

* Development Plan One: Create a display a header component at the top of each page
* Development Plan Two: Create the row of images sized equally so they all line up properly
* Development Plan Three: Create the show page with all needed relevant information
* Development Plan Four: Integrate Stripe API so the user can successfully check out


### MVP

* MVP One: A full working stack with Node.js, MongoDB/Mongoose, Express and React
* MVP Two: Use React Router to handle page changes
* MVP Three: Integrating Stripe API for the checkout process
* MVP Four: A README.md to explain the application

### Stretch Goals

* Add a shopping cart feature so that users can buy multiple products at the same time
* Add a contact page with a form that sends email directly to my email address
* Allow the customer to choose from multiple different sizes of prints


### Challenges

The main huge challenge I faced while creating this application was Stripe integration. I found that there are many different ways to implement Stripe payments and spent a couple of days trying to add it in various ways. I was finally able to overcome the challenge by directing the customer to a stripe pre-built checkout page.
