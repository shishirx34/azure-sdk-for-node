# Microsoft Azure SDK for Node.js - Cdn

This project provides a Node.js package for accessing the Azure Cdn Client. Right now it supports:
- **Node.js version: 4.x.x or higher**
- **API version: **

## Features
- Manage Cdn Profile: create, update, delete, list, get.
- Manage Cdn Endpoint: create, update, delete, list, get, start, stop validate custom domain.
- Manage Cdn Origin: update, list, get.
- Manage Cdn CustomDomain: creat, list, get, update.


## Install from npm

```
npm install azure-arm-cdn
```
&nbsp;

## How to Use

### Authentication, client creation and listing profiles as an example

 ```javascript
 var msrestAzure = require('ms-rest-azure');
 var CDNManagementClient = require('azure-arm-cdn');

 // Interactive Login
 // It provides a url and code that needs to be copied and pasted in a browser and authenticated over there. If successful, 
 // the user will get a DeviceTokenCredentials object.
 msRestAzure.interactiveLogin(function(err, credentials) {
  var client = new CDNManagementClient(credentials, 'your-subscription-id');
  client.profiles.listBySubscriptionId(function(err, result, request, response) {
    if (err) console.log(err);
    console.log(result);
  });
 });
 ```

### Profile operations
```javascript
//List profiles under a subscription-id
client.profiles.listBySubscriptionId(function(err, result, request, response) {
    if (err) {
        console.log(err);
    } else {
		var profiles = result
		console.log(profiles.length);
	}
});

//List profiles by resource group
client.profiles.listByResourceGroup("your-resource-group-name", function(err, result, request, response) {
	if (err) {
        console.log(err);
    } else {
		var profiles = result
		console.log(profiles.length);
	}
});

//Create profile under certain resource group
var standardCreateParameters = {
	location: 'West US',
	tags: {
	    tag1: 'val1',
	    tag2: 'val2'
	},
	sku: {
	    name: 'Standard'
	}
};

client.profiles.create("your-profile-name", standardCreateParameters, "your-resource-group-name", function(err, result, request, response) {
	if (err) {
        console.log(err);
    } else {
		var profile = result;
		console.log(profile.name);
		console.log(profile.sku.name);
	}
});

//Delete profile
client.profiles.deleteIfExists("your-profile-name", "your-resource-group-name", function(err, result, request, response) {
	if (err) {
        console.log(err);
    }
});

//update tags
var tags = {
	tag1: 'val1',
	tag2: 'val2',
	tag3: 'val3'
};

client.profiles.update("your-profile-name", "your-resource-group-name", tags, function(err, result, request, response) {
	if (err) {
        console.log(err);
    } else {
		var profile = result;
		console.log(profile.tags.tag1);
		console.log(profile.tags.tag2);
		console.log(profile.tags.tag3);
	}
});

//Generate sso uri
client.profiles.generateSsoUri("your-profile-name", "your-resource-group-name", function(err, result, request, response) {
	if (err) {
        console.log(err);
    } else {
		console.log(result);
	}
});
```

### Endpoint operations
```javascript
//List endpoint by profile
client.endpoints.listByProfile("your-profile-name", "your-resource-group-name", function(err, result, request, response) {
	if (err) {
        console.log(err);
    } else {
		var endpoints = result;
		console.log(endpoints.length);
	}
});

//Create endpoint (Automatic start this endpoint)
var endpointProperties = {
	location: 'West US',
		tags: {
		tag1: 'val1'
	},
	origins: [{
		name: 'newname',
		hostName: 'newname.azure.com'
	}]
}

client.endpoints.create("your-endpoint-name", validEndpointProperties, "your-profile-name", "your-resource-group-name", function(err, result, request, response) {
    if (err) {
        console.log(err);
    } else {
		var endpoint = result;
		console.log(endpoint);
	}
});

//Update endpoint
var newEndpointProperties = {
	location: 'West US',
	tags: {
		tag1: 'val2',
		tag2: 'val1'
	}
  }

client.endpoints.update("your-endpoint-name", newEndpointProperties, "your-profile-name", "your-resource-group-name", function(err, result, request, response) {
	if (err) {
        console.log(err);
    } else {
		var endpoint = result;
		console.log(endpoint);
	}
});

//Get Endpoint
client.endpoints.get("your-endpoint-name", "your-profile-name", "your-resource-group-name", function(err, result, request, response) {
	if (err) {
        console.log(err);
    } else {
		var endpoint = result;
		console.log(endpoint);
	}
});

//Purge Content
var purgeContentPaths = [
	'/movies/*',
	'/pictures/pic1.jpg'
]

client.endpoints.purgeContent("your-endpoint-name", "your-profile-name", "your-resource-group-name", purgeContentPaths, function(err, result, request, response) {
	if (err) {
        console.log(err);
    }
});

//Load Content
var loadContentPaths = [
	'/movies/amazing.mp4',
	'/pictures/pic1.jpg'
]

client.endpoints.loadContent("your-endpoint-name", "your-profile-name", "your-resource-group-name", loadContentPaths, function(err, result, request, response) {
	if (err) {
        console.log(err);
    }
});

//Stop
client.endpoints.stop("your-endpoint-name", "your-profile-name", "your-resource-group-name", function(err, result, request, response) {
	if (err) {
        console.log(err);
    }
});

//Start
client.endpoints.start("your-endpoint-name", "your-profile-name", "your-resource-group-name", function(err, result, request, response) {
	if (err) {
        console.log(err);
    }
});

//Validate custom domain
client.endpoints.validateCustomDomain("your-endpoint-name", "your-profile-name", "your-resource-group-name", "your-hostName.whatever.com", function (err, result, request, response) {
	if (err) {
        console.log(err);
    } else {
		console.log(result.customDomainValidated);
	}
});

//Delete endpoint
client.endpoints.deleteIfExists("your-endpoint-name", "your-profile-name", "your-resource-group-name", function(err, result, request, response) {
	if (err) {
        console.log(err);
    }
});
```

### Origin operations
```javascript
//List Origins
client.origins.listByEndpoint("your-endpoint-name", "your-profile-name", "your-resource-group-name", function (err, result, request, response) {
	if (err) {
		console.log(err);
	} else {
		var origins = result;
		//...
	}
});

//Get origin
client.origins.get("your-origin-name", "your-endpoint-name", "your-profile-name", "your-resource-group-name", function (err, result, request, response) {
	if (err) {
		console.log(err);
	} else {
		var origin = result;
		//...
	}
});

//Update origin
var updateParameters = {
	hostName: "somename.helloworld.com",
	httpPort: 9874,
	httpsPort: 9090
}
client.origins.update("your-origin-name", updateParameters, "your-endpoint-name", "your-profile-name", "your-resource-group-name", function(err, result, request, response) {
    if (err) {
		console.log(err);
	}
}

//Delete origin
client.origins.deleteIfExists("your-origin-name", "your-endpoint-name", "your-profile-name", "your-resource-group-name", function (err, result, request, response) {
	if (err) {
		console.log(err);
	}
});
```

### Custom domain operations
```javascript
//List custom domain by endpoint
client.customDomains.listByEndpoint("your-endpoint-name", "your-profile-name", "your-resource-group-name", function (err, result, request, response) {
		if (err) {
		console.log(err);
	} else {
		var customDomains = result;
		//...
	}
});

//Create custom domain
client.customDomains.create("your-custom-domain-name", "your-endpoint-name", "your-profile-name", "your-resource-group-name", "customdomainhostname.hello.com", function (err, result, request, response) {
	if (err) {
		console.log(err);
	}
});

//Get custom domain
client.customDomains.get("your-custom-domain-name", "your-endpoint-name", "your-profile-name", "your-resource-group-name", function (err, result, request, response) {
	if (err) {
		console.log(err);
	} else {
		var customDomain = result;
		//...
	}
});

//Delete custom domain
client.customDomains.deleteIfExists("your-custom-domain-name", "your-endpoint-name", "your-profile-name", "your-resource-group-name", function (err, result, request, response) {
	if (err) {
		console.log(err);
	}
});
```

### Check Name Availability (only works for endpoint now)
```javascript
client.nameAvailability.checkNameAvailability("your-endpoint-name", "Microsoft.Cdn/Profiles/Endpoints", function(err, result, request, response) {
	if (err) {
		console.log(err);
	} else {
		console.log(result.nameAvailable);
	}
});
```

### Get Operations
```javascript
client.operations.list(function(err, result, request, response) {
	if (err) {
		console.log(err);
	} else {
		console.log(result);
	}
});
```

## Related Projects

- [Microsoft Azure SDK for Node.js](https://github.com/Azure/azure-sdk-for-node)
- [AutoRest](https://github.com/Azure/autorest)
