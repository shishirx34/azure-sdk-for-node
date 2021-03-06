// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla4109.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661?api-version=2016-03-20-preview', '*')
  .reply(200, "{\"jobId\":\"2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"2016-05-25T00:56:13.1597465+00:00\",\"state\":\"Compiling\",\"result\":\"Succeeded\",\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2016-05-25T00:56:13.1597465+00:00\",\"details\":\"userName:adlsvc01@benwgoldoutlook.onmicrosoft.com;submitMachine:N/A\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"resources\":[],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls6557.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/05/25/00/56/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"PT0S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"type\":\"USql\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b4136d9e-62cf-41c2-bbc0-2695d0748557',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:56:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla4109.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661?api-version=2016-03-20-preview', '*')
  .reply(200, "{\"jobId\":\"2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"2016-05-25T00:56:13.1597465+00:00\",\"state\":\"Compiling\",\"result\":\"Succeeded\",\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2016-05-25T00:56:13.1597465+00:00\",\"details\":\"userName:adlsvc01@benwgoldoutlook.onmicrosoft.com;submitMachine:N/A\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"resources\":[],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls6557.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/05/25/00/56/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"PT0S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"type\":\"USql\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b4136d9e-62cf-41c2-bbc0-2695d0748557',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:56:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla4109.azuredatalakeanalytics.net:443')
  .post('/Jobs/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661/CancelJob?api-version=2016-03-20-preview')
  .reply(200, "", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '02e74daa-1cf7-4220-bd17-6709e2e6286e',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:56:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla4109.azuredatalakeanalytics.net:443')
  .post('/Jobs/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661/CancelJob?api-version=2016-03-20-preview')
  .reply(200, "", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '02e74daa-1cf7-4220-bd17-6709e2e6286e',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:56:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla4109.azuredatalakeanalytics.net:443')
  .get('/Jobs/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661?api-version=2016-03-20-preview')
  .reply(200, "{\"jobId\":\"2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"2016-05-25T00:56:13.1597465+00:00\",\"endTime\":\"2016-05-25T00:56:15.5660395+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_USER_CJS_CANCELEDBYUSER\",\"name\":\"CANCELED_BY_USER\",\"severity\":\"Info\",\"source\":\"User\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"details\":\"\",\"description\":\"Job was cancelled by {0}.\",\"resolution\":\"\",\"helpLink\":\"\",\"innerError\":null}],\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2016-05-25T00:56:13.1597465+00:00\",\"details\":\"userName:adlsvc01@benwgoldoutlook.onmicrosoft.com;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"2016-05-25T00:56:14.0191368+00:00\",\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"2016-05-25T00:56:15.5660395+00:00\",\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls6557.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/05/25/00/56/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls6557.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/05/25/00/56/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls6557.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/05/25/00/56/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"UserError\",\"totalCompilationTime\":\"PT1.5469027S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"type\":\"USql\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9adf1085-05a9-4700-93b8-163c023c0b59',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:56:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla4109.azuredatalakeanalytics.net:443')
  .get('/Jobs/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661?api-version=2016-03-20-preview')
  .reply(200, "{\"jobId\":\"2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"2016-05-25T00:56:13.1597465+00:00\",\"endTime\":\"2016-05-25T00:56:15.5660395+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_USER_CJS_CANCELEDBYUSER\",\"name\":\"CANCELED_BY_USER\",\"severity\":\"Info\",\"source\":\"User\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"details\":\"\",\"description\":\"Job was cancelled by {0}.\",\"resolution\":\"\",\"helpLink\":\"\",\"innerError\":null}],\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2016-05-25T00:56:13.1597465+00:00\",\"details\":\"userName:adlsvc01@benwgoldoutlook.onmicrosoft.com;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"2016-05-25T00:56:14.0191368+00:00\",\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"2016-05-25T00:56:15.5660395+00:00\",\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls6557.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/05/25/00/56/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls6557.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/05/25/00/56/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls6557.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/05/25/00/56/2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"UserError\",\"totalCompilationTime\":\"PT1.5469027S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"type\":\"USql\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9adf1085-05a9-4700-93b8-163c023c0b59',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 25 May 2016 00:56:16 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['2ec7d1f8-0d90-49ee-90c6-dc9fc7aa3661'];};