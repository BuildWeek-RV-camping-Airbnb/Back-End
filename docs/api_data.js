define({ "api": [
  {
    "type": "post",
    "url": "/api/amenities",
    "title": "Create New Amenity",
    "name": "Create_New_Amenity",
    "group": "Amenities",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Amenity name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "icon",
            "description": "<p>Amenity icon url</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Amenity id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 Created\n 8",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routers/amenities_router.js",
    "groupTitle": "Amenities"
  },
  {
    "type": "delete",
    "url": "/api/amenities/:id",
    "title": "Delete Amenity",
    "name": "Delete_Amenity",
    "group": "Amenities",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Success",
            "description": "<p>1 for true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 Deleted\n 1",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routers/amenities_router.js",
    "groupTitle": "Amenities"
  },
  {
    "type": "get",
    "url": "/api/amenities",
    "title": "Get All Amenities",
    "name": "GetAmenities",
    "group": "Amenities",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "res",
            "description": "<p>Array of Amenity Objects</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/amenities_router.js",
    "groupTitle": "Amenities"
  },
  {
    "type": "get",
    "url": "api/listings/property/:id",
    "title": "Get Amenities by Property",
    "name": "GetAmenities_by_Property",
    "group": "Amenities",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Listing id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "amenity_id",
            "description": "<p>Amenity Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "property_id",
            "description": "<p>Property Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Amenity name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Icon url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "property_name",
            "description": "<p>Property name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "owner_id",
            "description": "<p>Owner Id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/listings_router.js",
    "groupTitle": "Amenities"
  },
  {
    "type": "get",
    "url": "/api/amenities/:id",
    "title": "Get Amenity by Id",
    "name": "GetAmenity_by_Id",
    "group": "Amenities",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Amenity id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Amenity name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Amenity icon url</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/amenities_router.js",
    "groupTitle": "Amenities"
  },
  {
    "type": "put",
    "url": "/api/amenities/:id",
    "title": "Update Amenity",
    "name": "Update_Amenity",
    "group": "Amenities",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Amenity name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "icon",
            "description": "<p>Amenity icon url</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Success",
            "description": "<p>1 for true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 Created\n 1",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routers/amenities_router.js",
    "groupTitle": "Amenities"
  },
  {
    "type": "post",
    "url": "api/users",
    "title": "Create New Listing",
    "name": "Create_New_Listing",
    "group": "Listings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "property_id",
            "description": "<p>Property Id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amenity_id",
            "description": "<p>Amenity Id (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "res",
            "description": "<p>Listing id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/listings_router.js",
    "groupTitle": "Listings"
  },
  {
    "type": "delete",
    "url": "api/listings/:id",
    "title": "Deletes Listing",
    "name": "Deletes_Listing",
    "group": "Listings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "null",
            "optional": false,
            "field": "res",
            "description": "<p>null</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/listings_router.js",
    "groupTitle": "Listings"
  },
  {
    "type": "get",
    "url": "api/listings/:id",
    "title": "Get Listing by Id",
    "name": "GetListing_by_Id",
    "group": "Listings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Listing id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "property_id",
            "description": "<p>Property Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "amenity_id",
            "description": "<p>Amenity ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/listings_router.js",
    "groupTitle": "Listings"
  },
  {
    "type": "get",
    "url": "api/listings",
    "title": "Get All Listings",
    "name": "GetListings",
    "group": "Listings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "res",
            "description": "<p>Array of Listing Objects</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/listings_router.js",
    "groupTitle": "Listings"
  },
  {
    "type": "put",
    "url": "api/listings/:id",
    "title": "Update Listing",
    "name": "Update_Listing",
    "group": "Listings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "property_id",
            "description": "<p>Property Id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amenity_id",
            "description": "<p>Amenity Id (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "res",
            "description": "<p>1 if Updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/listings_router.js",
    "groupTitle": "Listings"
  },
  {
    "type": "post",
    "url": "api/properties/",
    "title": "Create New Property",
    "name": "Create_New_Property",
    "group": "Properties",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "property_name",
            "description": "<p>Property name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "price",
            "description": "<p>Price (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "owner_id",
            "description": "<p>Owner Id (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "res",
            "description": "<p>Property id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/properties_router.js",
    "groupTitle": "Properties"
  },
  {
    "type": "delete",
    "url": "api/properties/:id",
    "title": "Deletes Property",
    "name": "Deletes_Property",
    "group": "Properties",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "null",
            "optional": false,
            "field": "res",
            "description": "<p>null</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/properties_router.js",
    "groupTitle": "Properties"
  },
  {
    "type": "get",
    "url": "api/properties",
    "title": "Get All Properties",
    "name": "GetProperties",
    "group": "Properties",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "res",
            "description": "<p>Array of Property Objects</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/properties_router.js",
    "groupTitle": "Properties"
  },
  {
    "type": "get",
    "url": "api/listings/amenity/:id",
    "title": "Get Properties by Amenity",
    "name": "GetProperties_by_Amenity",
    "group": "Properties",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Listing id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "amenity_id",
            "description": "<p>Amenity Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "property_id",
            "description": "<p>Property Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Amenity name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Icon url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "property_name",
            "description": "<p>Property name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "owner_id",
            "description": "<p>Owner Id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/listings_router.js",
    "groupTitle": "Properties"
  },
  {
    "type": "get",
    "url": "api/properties/user/:id",
    "title": "Get Properties owned by User",
    "name": "GetProperties_by_User",
    "group": "Properties",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "property_name",
            "description": "<p>Property name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "owner_id",
            "description": "<p>Owner Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "owner",
            "description": "<p>User true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>User avatar url</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/properties_router.js",
    "groupTitle": "Properties"
  },
  {
    "type": "get",
    "url": "api/properties/:id",
    "title": "Get Property by Id",
    "name": "GetProperty_by_Id",
    "group": "Properties",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Property id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "property_name",
            "description": "<p>Property name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "owner_id",
            "description": "<p>Owner Id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/properties_router.js",
    "groupTitle": "Properties"
  },
  {
    "type": "put",
    "url": "api/properties/:id",
    "title": "Update Property",
    "name": "Update_Property",
    "group": "Properties",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "property_name",
            "description": "<p>Property name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "price",
            "description": "<p>Price (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "owner_id",
            "description": "<p>Owner Id (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "res",
            "description": "<p>1 if Updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/properties_router.js",
    "groupTitle": "Properties"
  },
  {
    "type": "post",
    "url": "api/reservations",
    "title": "Create New Reservations",
    "name": "Create_New_Reservations",
    "group": "Reservations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Start Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>End Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "property_id",
            "description": "<p>Property Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "res",
            "description": "<p>Reservation id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/reservations_router.js",
    "groupTitle": "Reservations"
  },
  {
    "type": "delete",
    "url": "api/reservations/:id",
    "title": "Deletes Reservation",
    "name": "Deletes_Reservation",
    "group": "Reservations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "null",
            "optional": false,
            "field": "res",
            "description": "<p>null</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/reservations_router.js",
    "groupTitle": "Reservations"
  },
  {
    "type": "get",
    "url": "api/reservations/:id",
    "title": "Get Reservation by Id",
    "name": "GetReservationById",
    "group": "Reservations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Reservation id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Start Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>End Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "property_id",
            "description": "<p>Property Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/reservations_router.js",
    "groupTitle": "Reservations"
  },
  {
    "type": "get",
    "url": "api/reservations",
    "title": "Get All Reservations",
    "name": "GetReservations",
    "group": "Reservations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "res",
            "description": "<p>Array of Reservation Objects</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/reservations_router.js",
    "groupTitle": "Reservations"
  },
  {
    "type": "get",
    "url": "api/reservations/owner/:id",
    "title": "Get Reservations by Owner",
    "name": "GetReservationsByOwner",
    "group": "Reservations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Reservation id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Start Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>End Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "property_id",
            "description": "<p>Property Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/reservations_router.js",
    "groupTitle": "Reservations"
  },
  {
    "type": "get",
    "url": "api/reservations/property/:id",
    "title": "Get Reservations by Property",
    "name": "GetReservationsByProperty",
    "group": "Reservations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Reservation id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Start Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>End Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "property_id",
            "description": "<p>Property Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "property_name",
            "description": "<p>Property name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "owner_id",
            "description": "<p>Owner Id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/reservations_router.js",
    "groupTitle": "Reservations"
  },
  {
    "type": "get",
    "url": "api/reservations/user/:id",
    "title": "Get Reservations by User",
    "name": "GetReservationsByUser",
    "group": "Reservations",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Reservation id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Start Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>End Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "property_id",
            "description": "<p>Property Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/reservations_router.js",
    "groupTitle": "Reservations"
  },
  {
    "type": "put",
    "url": "api/reservations",
    "title": "Update Reservation",
    "name": "Update_Reservation",
    "group": "Reservations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Start Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>End Date ('YYYY-MM-DD')</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "property_id",
            "description": "<p>Property Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "res",
            "description": "<p>1 if Updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/reservations_router.js",
    "groupTitle": "Reservations"
  },
  {
    "type": "post",
    "url": "api/users",
    "title": "Create New User",
    "name": "Create_New_User",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User first name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User last name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "owner",
            "description": "<p>User true/false (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>User avatar url (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "res",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/users_router.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "api/users/:id",
    "title": "Deletes User",
    "name": "Deletes_User",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "null",
            "optional": false,
            "field": "res",
            "description": "<p>null</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/users_router.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/users/:id",
    "title": "Get User by Id",
    "name": "GetUser_by_Id",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "owner",
            "description": "<p>User true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>User avatar url</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/users_router.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/users",
    "title": "Get All Users",
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "res",
            "description": "<p>Array of User Objects</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/users_router.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "api/users",
    "title": "Login",
    "name": "Login",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "res.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res.token",
            "description": "<p>token token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/users_router.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "api/users/:id",
    "title": "Update User",
    "name": "Update_User",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User first name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User last name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "owner",
            "description": "<p>User true/false (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>User avatar url (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "res",
            "description": "<p>1 if Updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routers/users_router.js",
    "groupTitle": "Users"
  }
] });
