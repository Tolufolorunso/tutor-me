# Please still working on my heroku. my login and signup are working perfectly on my local machine but not working on heroku. others routes seems to work. please help to test it on local machine thanks. if i tried to go to other routes, it prompt me to login. heroku link is https://tranquil-dusk-39240.herokuapp.com/

# Tutor-me App

> This App was built for Startng. It's for Educational purposes. Not Perfect but the version 2 will be out soon. thank you.

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Dependency Status](http://img.shields.io/gemnasium/badges/badgerbadgerbadger.svg?style=flat-square)](https://gemnasium.com/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) [![Code Climate](http://img.shields.io/codeclimate/github/badges/badgerbadgerbadger.svg?style=flat-square)](https://codeclimate.com/github/badges/badgerbadgerbadger) [![Github Issues](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/issues.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/issues) [![Pending Pull-Requests](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/pulls.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/pulls) [![Gem Version](http://img.shields.io/gem/v/badgerbadgerbadger.svg?style=flat-square)](https://rubygems.org/gems/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Badges](http://img.shields.io/:badges-9/9-ff6799.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger)

## Table of Contents

- [Getting Started](#Getting-Started)
- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [Team](#team)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. This Api is not 100 percent perfect due to some circumstances.

## Installation

This is node.js API. Installation is done using npm install command:

```
$ npm install
```

All the packages needed for this API to works will be installed with this above command.

### Clone

- Clone this repo to your local machine using `https://github.com/fvcproductions/SOMEREPO`

### The HTTP verbs used

- GET: To retrive resources
- POST: TO create resources
- PATCH: To Update resources
- DELETE: To delete resources

  ### Version

This is version 1. All request will be on

```
/api/v1
```

## The version 2 will soon be out soon for better improvement.

## Handling unhandle routes

```
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Routes not found. Can't find ${req.originalUrl} on this server`,
      404
    )
  );
});

```

## Features

## Authentication and Authorizetion

-Admin has been created with this credential

```
{
	"email": "admin@yahoo.com",
	"password": "123"
}
```

- For new Tutor to register

```
//URL is

/api/v1/auth/signup/tutor
{
    "firstname": "dada",
    "surname": "ojo",
    "email": "eg@yahoo.com",
    "password": "123",
    "passwordConfirm": "123"
}

-Response is
-status code is 201 created

{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjUzNjZhOWFkZjJkMDMxYzM5NGYzZSIsImlhdCI6MTU4ODkzNDI1MiwiZXhwIjoxNTg5MzY2MjUyfQ.orGatsflnbPwcnMcVHbWqEc7nqBffiL14X50KtYU17E",
    "data": {
        "user": {
            "active": true,
            "subjects": [],
            "_id": "5eb5366a9adf2d031c394f3e",
            "firstname": "dada",
            "surname": "ojo",
            "email": "g@yahoo.com",
            "role": "tutor",
            "__v": 0
        }
    }
}
```

- For new Student to register

```
//URL is

/api/v1/auth/signup/user
{
    "firstname": "tolu",
    "surname": "kola",
    "email": "eg@yahoo.com",
    "password": "123",
    "passwordConfirm": "123"
}

-Response is
-status code is 201 created

{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjUzNjZhOWFkZjJkMDMxYzM5NGYzZSIsImlhdCI6MTU4ODkzNDI1MiwiZXhwIjoxNTg5MzY2MjUyfQ.orGatsflnbPwcnMcVHbWqEc7nqBffiL14X50KtYU17E",
    "data": {
        "user": {
            "active": true,
            "subjects": [],
            "_id": "5eb5366a9adf2d031c394f3c",
            "firstname": "tolu",
            "surname": "kola",
            "email": "eg2@yahoo.com",
            "role": "user",
            "__v": 0
        }
    }
}
```

- For login

```
//URL is

/api/v1/auth/login
{
	"email": "eg2@yahoo.com",
	"password": "123"
}

-Response is
-status code is 200 Ok

{
    "status": "success",
    "user": {
        "active": true,
        "subjects": [],
        "_id": "5eb3f892931fb41258500aa7",
        "firstname": "tolu",
        "surname": "kola",
        "email": "eg2@yahoo.com"
        "role": "admin",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjNmODkyOTMxZmI0MTI1ODUwMGFhNyIsImlhdCI6MTU4ODkzNDU5NSwiZXhwIjoxNTg5MzY2NTk1fQ.sbpaIsMWZdH1uVu7Q-Jw9ijTf2sDhHC9Bey7sOrumuk"
}
```

### The base url

```
'/'
{
    "message": "tutoring app built with love",
    "app": "tutor us"
}
```

### Create Category Using Post

- Only Admin can create Category

```
//URL is
/api/v1/categories
{
	"name": "primary",
	"description": "This is primary class category"
}
Response is
status code is 201 created
{
    "status": "success",
    "data": {
        "category": {
            "_id": "5eb529459adf2d031c394f3b",
            "name": "PRIMARY",
            "description": "This is primary class category",
            "date": "2020-05-08T09:41:26.007Z",
            "__v": 0
        }
    }
}
```

### Get Category Using HTTP GET

- all users can retrive Category

```
//URL is
/api/v1/categories

- Response is

{
    "status": "success",
    "lenght": 4,
    "data": {
        "category": [
            {
                "_id": "5eb24affed414d12008d688e",
                "name": "SSS",
                "description": "This is sss class category",
                "date": "2020-05-06T05:28:31.630Z",
                "__v": 0
            },
            {
                "_id": "5eb24b0ded414d12008d688f",
                "name": "JSS",
                "description": "This is jss class category",
                "date": "2020-05-06T05:28:45.817Z",
                "__v": 0
            },
```

### Update Category Using HTTP PATCH

- Only Admin can update Category

```
//URL is

/api/v1/categories/${_id}

{
	"name": "primary",
	"description": "This is primary class category"
}
```

### Delete Category Using HTTP DELETE

This endpoint will delete all the Subjects under the category.

```
//URL is
/api/v1/categories/${_id}

{
	"name": "primary",
	"description": "This is primary class category"
}
```

### Get all subject under a Category Using HTTP GET

```
//URL is
/api/v1/categories/${categoryID}/subjects

- Response is

{
    "status": "success",
    "lenght": 2,
    "category": "PRIMARY",
    "data": {
        "subjects": [
            {
                "_id": "5eb3eccef7f4ae299cbdb0aa",
                "name": "mathematics",
                "category_name": "PRIMARY",
                "__v": 0,
                "category": "5eb2e21c69fca9083c6af3ae"
            },
            {
                "_id": "5eb3ecdbf7f4ae299cbdb0ab",
                "name": "english",
                "category_name": "PRIMARY",
                "__v": 0,
                "category": "5eb2e21c69fca9083c6af3ae"
            }
        ]
    }
}
```

### Update a subject under a Category Using HTTP PATCH

- Only Admin can update subject in a Category

```
//URL is
/api/v1/categories/${categoryId}/subjects/${subjectId}
{
	"name": "agric",
	"category_name": "sss"
}

- Response is

{
    "status": "success",
    "message": "Data updated successfully"
}
```

### Delete a subject under a Category Using HTTP DELETE

- Only Admin can delete subject in a Category

```
//URL is
/api/v1/categories/${categoryId}/subjects/${subjectId}

- Response is

{
    "status": "success",
    "message": "Data deleted successfully"
}
```

### Get a subject under a Category Using HTTP GET

```
//URL is
/api/v1/categories/${categoryId}/subjects/${subjectId}

- Response is

{
    "status": "success",
    "data": {
        "subject": {
            "_id": "5eb3532b65d09319cc20b359",
            "name": "yoruba",
            "category_name": "PRIMARY",
            "__v": 0,
            "category": "5eb2e21c69fca9083c6af3ae"
        }
    }
}
```

### Create Subject Using HTTP POST method

```
//URL is
/api/v1/subjects
{
	"name": "biology",
	"category_name": "sss"
}
- Response is
- status code: 201 Created

{
    "status": "success",
    "data": {
        "subject": {
            "_id": "5eb5304b9adf2d031c394f3c",
            "name": "biology",
            "category_name": "SSS",
            "__v": 0
        }
    }
}
```

### Get all Subjects Using HTTP GET method

```
//URL is

/api/v1/subjects

- Response is
- status code: 201 Created

{
    "status": "success",
    "results": 10,
    "data": {
        "subject": [
            {
                "_id": "5eb5304b9adf2d031c394f3c",
                "name": "biology",
                "category_name": "SSS",
                "__v": 0,
                "category": "5eb24affed414d12008d688e"
            },
            {
                "_id": "5eb3ed12f7f4ae299cbdb0b1",
                "name": "civil",
                "category_name": "SSS",
                "__v": 0,
                "category": "5eb24affed414d12008d688e"
            },
            {
                "_id": "5eb3ecdbf7f4ae299cbdb0ab",
                "name": "english",
                "category_name": "PRIMARY",
                "__v": 0,
                "category": "5eb2e21c69fca9083c6af3ae"
            },
            .......
```

### Seacrh and sort Subjects Using category name and subject name

```
//URL is

api/v1/subjects?category_name=${category_name}&sort=${subjectName}

- Response is
- status code: 201 Created

{
    "status": "success",
    "results": 4,
    "data": {
        "subject": [
            {
                "_id": "5eb5304b9adf2d031c394f3c",
                "name": "biology",
                "category_name": "SSS",
                "__v": 0,
                "category": "5eb24affed414d12008d688e"
            },
            {
                "_id": "5eb3ed12f7f4ae299cbdb0b1",
                "name": "civil",
                "category_name": "SSS",
                "__v": 0,
                "category": "5eb24affed414d12008d688e"
            },
            .......
```

### Admin/users Profile Using HTTP GET method

- Only Admin can create Category

```
//URL is
/api/v1/users
{
	"name": "primary",
	"description": "This is primary class category"
}
Response is
status code: 200 Ok
{
    "status": "success",
    "data": {
        "admin": {
            "active": true,
            "subjects": [],
            "_id": "5eb3f892931fb41258500aa7",
            "firstname": "Tolulope",
            "surname": "Folorunso",
            "email": "admin@yahoo.com",
            "role": "admin"
        }
    }
}
```

### Get all tutors Using HTTP GET method

- Admin and students can get(search) Tutors

```
//URL is
/api/v1/users/get-tutors

- Response is
- status code: 200 Ok

{
    "status": "success",
    "result": 5,
    "data": {
        "tutors": [
            {
                "active": true,
                "subjects": [],
                "_id": "5eb3f9401140d50f707cf74c",
                "firstname": "ade",
                "surname": "ojo",
                "email": "a@yahoo.com",
                "role": "tutor",
                "__v": 0
            },
            {
                "active": true,
                "subjects": [],
                "_id": "5eb3f91e1140d50f707cf74a",
                "firstname": "bola",
                "surname": "jide",
                "email": "b@yahoo.com",
                "role": "tutor",
                "__v": 0
            },
            ......
```

- Admin and students can get(search) Tutors (search by firstname and/or sort in ascending order)

```
//URL is
/api/v1/users/get-tutors?sort=firstname&firstname=${firstname}

- Response is
- status code: 200 Ok

{
    "status": "success",
    "result": 2,
    "data": {
        "tutors": [
            {
                "active": true,
                "subjects": [],
                "_id": "5eb3f9401140d50f707cf74c",
                "firstname": "ade",
                "surname": "ojo",
                "email": "a@yahoo.com",
                "role": "tutor",
                "__v": 0
            },
            {
                "active": true,
                "subjects": [],
                "_id": "5eb3f91e1140d50f707cf74a",
                "firstname": "bola",
                "surname": "jide",
                "email": "b@yahoo.com",
                "role": "tutor",
                "__v": 0
            },
            ......
```

### get one Tutor Using HTTP GET method

- Admin and students can get a tutor

```
//URL is
/api/v1/users/get-tutors/${tutorId}

Response is
status code: 200 Ok
{
    "status": "success",
    "data": {
        "tutor": {
            "active": true,
            "subjects": [],
            "_id": "5eb3f91e1140d50f707cf74a",
            "firstname": "bola",
            "surname": "jide",
            "email": "b@yahoo.com",
            "role": "tutor",
            "__v": 0
        }
    }
}
```

### get one Tutor Using HTTP DELETE method

- only Admin can delete a tutor

```
//URL is
/api/v1/users/get-tutors/${tutorId}

Response is
status code: 200 Ok
{
    "status": "success",
    "data": {
        "message": "User deleted successfully"
    }
}
```

### Register for subject Using HTTP PATCH method

- Admin and tutor can register for a subject

```
//URL is
/api/v1/subjects/register/${subjectId}

Response is
status code: 200 Ok

{
    "status": "success",
    "message": "subject added"
}
```

### Get registered subject Using HTTP GET method

- Admin and tutor can retrive registered subject

```
//URL is
/api/v1/subjects/tutor/subjects

- Response is
- status code: 200 Ok
{
    "status": "success",
    "data": {
        "subject": {
            "active": true,
            "subjects": [
                {
                    "_id": "5eb3532b65d09319cc20b359",
                    "name": "yoruba",
                    "category_name": "PRIMARY",
                    "category": "5eb2e21c69fca9083c6af3ae"
                },
                {
                    "_id": "5eb3532b65d09319cc20b359",
                    "name": "yoruba",
                    "category_name": "PRIMARY",
                    "category": "5eb2e21c69fca9083c6af3ae"
                }
            ],
            "_id": "5eb3f892931fb41258500aa7",
            "firstname": "Tolulope",
            "surname": "Folorunso",
            "email": "admin@yahoo.com",
            "role": "admin",
            "__v": 0
        }
    }
}
```

### Delete registered subject Using HTTP PATCH method

- Tuutor and admin can delete a regiestered subject

```
//URL is
/api/v1/subjects/tutor/subjects/${subjectId}

Response is
status code: 200 Ok

{
    "status": "success",
    "message": "Deleted successfully"
}
```

### Student can book a lesson Using HTTP POST method

-

```
//URL is
/api/v1/lessons

Response is
status code: 200 Ok

{
    "status": "success",
    "data": {
        "lesson": {
            "_id": "5eb55ae9a21aac2d44fc7fae",
            "tutorID": "5eb3f91e1140d50f707cf74a",
            "subject": "5eb2e8704ead962ba8c32576",
            "user": "Folorunso Tolulope",
            "userID": "5eb3f892931fb41258500aa7",
            "createdAt": "2020-05-08T13:13:13.579Z",
            "__v": 0
        }
    }
}
```

### Admin can retrive all lesson Using HTTP GET method

-

```
//URL is
/api/v1/lessons

Response is
status code: 200 Ok

{
    "status": "success",
    "data": {
        "lesson": {
            "_id": "5eb55ae9a21aac2d44fc7fae",
            "tutorID": "5eb3f91e1140d50f707cf74a",
            "subject": "5eb2e8704ead962ba8c32576",
            "user": "Folorunso Tolulope",
            "userID": "5eb3f892931fb41258500aa7",
            "createdAt": "2020-05-08T13:13:13.579Z",
            "__v": 0
        }
    }
}
```

### Admin can retrive a lesson Using HTTP GET method

- Only admin can retrive a lesson

```
//URL is
/api/v1/lessons/${lessonId}

Response is
status code: 200 Ok

{
    "status": "success",
    "data": {
        "lesson": {
            "_id": "5eb55ae9a21aac2d44fc7fae",
            "tutorID": "5eb3f91e1140d50f707cf74a",
            "subject": "5eb2e8704ead962ba8c32576",
            "user": "Folorunso Tolulope",
            "userID": "5eb3f892931fb41258500aa7",
            "createdAt": "2020-05-08T13:13:13.579Z",
            "__v": 0
        }
    }
}
```

### Admin can delete a lesson Using HTTP POST method

- Only admin can delete a lesson

```
//URL is
/api/v1/lessons/${lessonId}

Response is
status code: 200 Ok

{
    "status": "success",
    "message": "Lesson deleted successfully",
    "data": null
}
```

### Admin can update a lesson Using HTTP PATCH method

- Only admin can update a lesson

```
//URL is
/api/v1/lessons/${lessonId}

{
	"user": "tolu folorunso"
}

Response is
status code: 200 Ok

{
    "status": "success",
    "message": "Lesson updated successfully",
    "data": {
        "updatedLesson": {
            "_id": "5eb55d94a21aac2d44fc7faf",
            "tutorID": "5eb3f91e1140d50f707cf74a",
            "subject": "5eb2e8704ead962ba8c32576",
            "user": "tolu folorunso",
            "userID": "5eb3f892931fb41258500aa7",
            "createdAt": "2020-05-08T13:24:36.589Z",
            "__v": 0
        }
    }
}
```

## Setup

- If you want more syntax highlighting, format your code like this:

> update and install this package first

```shell
$ brew update
$ brew install fvcproductions
```

> now install npm and bower packages

```shell
$ npm install
$ bower install
```

- For all the possible languages that support syntax highlithing on GitHub (which is basically all of them), refer <a href="https://github.com/github/linguist/blob/master/lib/linguist/languages.yml" target="_blank">here</a>.

---

## Features

## Usage (Optional)

## Documentation (Optional)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="http://fvcproductions.com" target="_blank">FVCproductions</a>.
