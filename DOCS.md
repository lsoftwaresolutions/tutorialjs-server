# tutorialjs-server v1.0.0

Tutorial JS (Server / Backend)

- [Auth](#auth)
	- [Authenticate](#authenticate)
	- [Authenticate with Facebook](#authenticate-with-facebook)
	- [Authenticate with Github](#authenticate-with-github)
	- [Authenticate with Google](#authenticate-with-google)
	
- [Course](#course)
	- [Create course](#create-course)
	- [Delete course](#delete-course)
	- [Retrieve course](#retrieve-course)
	- [Retrieve courses](#retrieve-courses)
	- [Update course](#update-course)
	
- [Level](#level)
	- [Create level](#create-level)
	- [Delete level](#delete-level)
	- [Retrieve level](#retrieve-level)
	- [Retrieve levels](#retrieve-levels)
	- [Update level](#update-level)
	
- [News](#news)
	- [Create news](#create-news)
	- [Delete news](#delete-news)
	- [Retrieve news](#retrieve-news)
	- [Update news](#update-news)
	
- [PasswordReset](#passwordreset)
	- [Send email](#send-email)
	- [Submit password](#submit-password)
	- [Verify token](#verify-token)
	
- [Review](#review)
	- [Create review](#create-review)
	- [Delete review](#delete-review)
	- [Retrieve review](#retrieve-review)
	- [Retrieve reviews](#retrieve-reviews)
	- [Update review](#update-review)
	
- [Section](#section)
	- [Create section](#create-section)
	- [Delete section](#delete-section)
	- [Retrieve section](#retrieve-section)
	- [Retrieve sections](#retrieve-sections)
	- [Update section](#update-section)
	
- [Tag](#tag)
	- [Create tag](#create-tag)
	- [Delete tag](#delete-tag)
	- [Retrieve tag](#retrieve-tag)
	- [Retrieve tags](#retrieve-tags)
	- [Update tag](#update-tag)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

## Authenticate with Facebook



	POST /auth/facebook


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Facebook user accessToken.</p>							|

## Authenticate with Github



	POST /auth/github


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Github user accessToken.</p>							|

## Authenticate with Google



	POST /auth/google


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Google user accessToken.</p>							|

# Course

## Create course



	POST /courses


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| 			|  <p>Course's name.</p>							|
| description			| 			|  <p>Course's description.</p>							|
| image			| 			|  <p>Course's image.</p>							|
| order			| 			|  <p>Course's order.</p>							|
| levelId			| 			|  <p>Course's levelId.</p>							|
| isAvailable			| 			|  <p>Course's availability.</p>							|

## Delete course



	DELETE /courses/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve course



	GET /courses/:id


## Retrieve courses



	GET /courses


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update course



	PUT /courses/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| 			|  <p>Course's name.</p>							|
| description			| 			|  <p>Course's description.</p>							|
| image			| 			|  <p>Course's image.</p>							|
| order			| 			|  <p>Course's order.</p>							|
| levelId			| 			|  <p>Course's levelId.</p>							|
| isAvailable			| 			|  <p>Course's availability.</p>							|

# Level

## Create level



	POST /levels


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| 			|  <p>Level's name.</p>							|
| description			| 			|  <p>Level's description.</p>							|
| color			| 			|  <p>Level's color.</p>							|
| points			| 			|  <p>Level's points.</p>							|

## Delete level



	DELETE /levels/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve level



	GET /levels/:id


## Retrieve levels



	GET /levels


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update level



	PUT /levels/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| 			|  <p>Level's name.</p>							|
| description			| 			|  <p>Level's description.</p>							|
| color			| 			|  <p>Level's color.</p>							|
| points			| 			|  <p>Level's points.</p>							|

# News

## Create news



	POST /news


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| 			|  <p>News's name.</p>							|
| text			| 			|  <p>News's text.</p>							|
| image			| 			|  <p>News's image.</p>							|
| isAvailable			| 			|  <p>News's isAvailable.</p>							|

## Delete news



	DELETE /news/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve news



	GET /news


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update news



	PUT /news/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| 			|  <p>News's name.</p>							|
| text			| 			|  <p>News's text.</p>							|
| image			| 			|  <p>News's image.</p>							|
| isAvailable			| 			|  <p>News's isAvailable.</p>							|

# PasswordReset

## Send email



	POST /password-resets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>Email address to receive the password reset token.</p>							|
| link			| String			|  <p>Link to redirect user.</p>							|

## Submit password



	PUT /password-resets/:token


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Verify token



	GET /password-resets/:token


# Review

## Create review



	POST /reviews


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| 			|  <p>Review's name.</p>							|
| text			| 			|  <p>Review's text.</p>							|
| isAvailable			| 			|  <p>Review's isAvailable.</p>							|

## Delete review



	DELETE /reviews/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve review



	GET /reviews/:id


## Retrieve reviews



	GET /reviews


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update review



	PUT /reviews/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| 			|  <p>Review's name.</p>							|
| text			| 			|  <p>Review's text.</p>							|
| isAvailable			| 			|  <p>Review's isAvailable.</p>							|

# Section

## Create section



	POST /sections


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| courseId			| 			|  <p>Section's courseId.</p>							|
| name			| 			|  <p>Section's name.</p>							|
| description			| 			|  <p>Section's description.</p>							|
| order			| 			|  <p>Section's order.</p>							|
| levelId			| 			|  <p>Section's levelId.</p>							|
| isAvailable			| 			|  <p>Section's isAvailable.</p>							|

## Delete section



	DELETE /sections/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve section



	GET /sections/:id


## Retrieve sections



	GET /sections


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update section



	PUT /sections/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| courseId			| 			|  <p>Section's courseId.</p>							|
| name			| 			|  <p>Section's name.</p>							|
| description			| 			|  <p>Section's description.</p>							|
| order			| 			|  <p>Section's order.</p>							|
| levelId			| 			|  <p>Section's levelId.</p>							|
| isAvailable			| 			|  <p>Section's isAvailable.</p>							|

# Tag

## Create tag



	POST /tags


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| 			|  <p>Tag's name.</p>							|
| description			| 			|  <p>Tag's description.</p>							|

## Delete tag



	DELETE /tags/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve tag



	GET /tags/:id


## Retrieve tags



	GET /tags


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update tag



	PUT /tags/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| 			|  <p>Tag's name.</p>							|
| description			| 			|  <p>Tag's description.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| login			| String			|  <p>User's login.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| firstname			| String			| **optional** <p>User's first name.</p>							|
| lastname			| String			| **optional** <p>User's last name.</p>							|
| birthday			| String			| **optional** <p>User's birth date.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


