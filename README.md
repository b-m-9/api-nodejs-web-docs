```
const RestapiDocs = require('api-nodejs-docs');


RestapiDocs({
    "baseUrl": config.get('shema') + '://' + config.get('domain'),
    "API_URL": config.get('api_url'),
    "projectName": config.get('project_name'),
    "hideDeveloper": false
});
app.use('/api/v1/docs/', express.static('api_docs/dist'));
```
