# API Documentation

This document provides information about the API endpoints, request/response formats, sample usage, and setup instructions.

## Endpoints

### Create a New User

Create a new user with a unique name.

- **URL**: `/api`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "John Doe"
  }
  ```

-  **Success Response**: 
    -  **Status Code**:  201 (Created)
    -  **Response Body**: 

    ```json
    {
    "success": true,
    "data": {
        "user": {
        "user_id": 1,
        "name": "John Doe"
        }
    },
    "message": "User created successfully."
    }
    ```

- **Error Responses**:
    - **Status Code**: 400 (Bad Request)

        ```json
        {
        "success": false,
        "errors": ["Name is required."]
        }

        ```

    - **Status Code**: 500 (Internal Server Error)

        ```json
        {
        "success": false,
        "errors": ["Internal server error."]
        }
        ```

### Get All Users
Retrieve a list of all users.

-  **URL**:  /api
-  **Method**:  GET
-  **Success Response**: 
    -  **Status Code**:  200 (OK)
    -  **Response Body**: 

    ```json
    {
    "success": true,
    "data": {
        "users": [
        {
            "user_id": 1,
            "name": "John Doe"
        },
        {
            "user_id": 2,
            "name": "Jane Smith"
        }
        ]
    },
    "message": "Users retrieved successfully."
    }

    ```

-  **Error Response**: 
    -  **Status Code**:  500 (Internal Server Error)

    ```json
    {
    "success": false,
    "errors": ["Internal server error."]
    }

    ```

### Get a Specific User by ID
Retrieve user details by specifying the user ID.

-  **URL**:  /api/:param
-  **Method**:  GET
-  **Success Response**: 
    -  **Status Code**:  200 (OK)
    -  **Response Body**: 

    ```json
    {
    "success": true,
    "data": {
        "user": {
        "user_id": 1,
        "name": "John Doe"
        }
    },
    "message": "User retrieved successfully."
    }

    ```

- Error Responses:
    -  **Status Code**:  404 (Not Found)

        ```json
        {
        "success": false,
        "errors": ["User not found."]
        }

        ```

    -  **Status Code**:  500 (Internal Server Error)

        ```json
        {
        "success": false,
        "errors": ["Internal server error."]
        }

        ```

### Update a User by ID
Update user details by specifying the user ID.

-  **URL**:  /api/:param
-  **Method**:  PUT
- Request Body:

    ```json
    {
    "name": "Updated Name"
    }

    ```

-  **Success Response**: 
    -  **Status Code**:  200 (OK)
    -  **Response Body**: 
        ```json
        
        {
        "success": true,
        "data": {
            "user": {
            "user_id": 1,
            "name": "Updated Name"
            }
        },
        "message": "User updated successfully."
        }
        ```

- Error Responses:
    -  **Status Code**:  404 (Not Found)

    ```json
    {
    "success": false,
    "errors": ["User not found."]
    }
    ```

    **Status Code**: 500 (Internal Server Error)
    ```json
    {
    "success": false,
    "errors": ["Internal server error."]
    }
    ```

### Delete a User by ID
Delete a user by specifying the user ID.

-  **URL**:  /api/:param
-  **Method**:  DELETE
-  **Success Response**: 
    -  **Status Code**:  200 (OK)
    -  **Response Body**: 
    ```json
    
    {
    "success": true,
    "message": "User deleted successfully."
    }
    ```

- Error Responses:
    -  **Status Code**:  404 (Not Found)

    ```json
    {
    "success": false,
    "errors": ["User not found."]
    }
    ```

    -  **Status Code**:  500 (Internal Server Error)

    ```json
    {
    "success": false,
    "errors": ["Internal server error."]
    }
    ```

## Sample Usage

### Create a New User

```http
POST /api
Content-Type: application/json

{
  "name": "John Doe"
}
```

### Get All Users
```http 
GET /api
```

### Get a Specific User by ID
```http
GET /api/1

```
### Update a User by ID
```http
PUT /api/1
```

Content-Type: application/json
```json
{
  "name": "Updated Name"
}
```

### Delete a User by ID
```http
DELETE /api/1
```
### Known Limitations

The API assumes that the user_id is a unique identifier for each user.
The API does not support user authentication or authorization.

### Setup and Deployment
To set up and deploy the API locally or on a server, please refer to the provided setup instructions in the README.md file of the project repository.

This documentation.md file outlines the API endpoints, their request/response formats, sample usage, known limitations, and setup/deployment instructions, as required. You can add this file to your project repository to provide comprehensive documentation for your API.