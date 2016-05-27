'use strict';

var React = require('react-native');
var {
  AsyncStorage
} = React;
var fetchFactory = require('fetch-factory').default;

 var urlBase = "http://10.0.3.2:3000/api";
// var urlBase = "http://192.168.0.100:3000/api";
var authHeader = 'authorization';
var token = null;
AsyncStorage.getItem("apiToken").then(function(response) {
  token = response;
  console.log(token);
});

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

//var urlBaseHost = getHost(urlBase) || location.host;

var Doctor = fetchFactory.create({
  url: urlBase + "/Doctors/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "prototype$__findById__hospitals": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/hospitals/:fk",
        method: "GET"
    },
    "prototype$__destroyById__hospitals": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/hospitals/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__hospitals": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/hospitals/:fk",
        method: "PUT"
    },
    "prototype$__link__hospitals": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/hospitals/rel/:fk",
        method: "PUT"
    },
    "prototype$__unlink__hospitals": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/hospitals/rel/:fk",
        method: "DELETE"
    },
    "prototype$__exists__hospitals": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/hospitals/rel/:fk",
        method: "HEAD"
    },
    "prototype$__findById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/accessTokens/:fk",
        method: "GET"
    },
    "prototype$__destroyById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/accessTokens/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/accessTokens/:fk",
        method: "PUT"
    },
    "prototype$__get__hospitals": {
        url: urlBase + "/Doctors/:id/hospitals",
        method: "GET"
    },
    "prototype$__create__hospitals": {
        url: urlBase + "/Doctors/:id/hospitals",
        method: "POST"
    },
    "prototype$__delete__hospitals": {
        url: urlBase + "/Doctors/:id/hospitals",
        method: "DELETE"
    },
    "prototype$__count__hospitals": {
        url: urlBase + "/Doctors/:id/hospitals/count",
        method: "GET"
    },
    "prototype$__get__accessTokens": {
        url: urlBase + "/Doctors/:id/accessTokens",
        method: "GET"
    },
    "prototype$__create__accessTokens": {
        url: urlBase + "/Doctors/:id/accessTokens",
        method: "POST"
    },
    "prototype$__delete__accessTokens": {
        url: urlBase + "/Doctors/:id/accessTokens",
        method: "DELETE"
    },
    "prototype$__count__accessTokens": {
        url: urlBase + "/Doctors/:id/accessTokens/count",
        method: "GET"
    },
    "create": {
        url: urlBase + "/Doctors",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Doctors",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Doctors",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Doctors/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Doctors/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Doctors",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Doctors/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Doctors/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Doctors/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Doctors/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Doctors/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Doctors/change-stream",
        method: "POST"
    },
    "login": {
        url: urlBase + "/Doctors/login",
        method: "POST"
    },
    "logout": {
        url: urlBase + "/Doctors/logout",
        method: "POST"
    },
    "confirm": {
        url: urlBase + "/Doctors/confirm",
        method: "GET"
    },
    "resetPassword": {
        url: urlBase + "/Doctors/reset",
        method: "POST"
    },
    "::findById::Hospital::doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Hospitals/:id/doctors/:fk",
        method: "GET"
    },
    "::destroyById::Hospital::doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Hospitals/:id/doctors/:fk",
        method: "DELETE"
    },
    "::updateById::Hospital::doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Hospitals/:id/doctors/:fk",
        method: "PUT"
    },
    "::link::Hospital::doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Hospitals/:id/doctors/rel/:fk",
        method: "PUT"
    },
    "::unlink::Hospital::doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Hospitals/:id/doctors/rel/:fk",
        method: "DELETE"
    },
    "::exists::Hospital::doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Hospitals/:id/doctors/rel/:fk",
        method: "HEAD"
    },
    "::get::Hospital::doctors": {
        url: urlBase + "/Hospitals/:id/doctors",
        method: "GET"
    },
    "::create::Hospital::doctors": {
        url: urlBase + "/Hospitals/:id/doctors",
        method: "POST"
    },
    "::createMany::Hospital::doctors": {
        url: urlBase + "/Hospitals/:id/doctors",
        method: "POST"
    },
    "::delete::Hospital::doctors": {
        url: urlBase + "/Hospitals/:id/doctors",
        method: "DELETE"
    },
    "::count::Hospital::doctors": {
        url: urlBase + "/Hospitals/:id/doctors/count",
        method: "GET"
    },
    "::get::Practice::doctor": {
        url: urlBase + "/Practices/:id/doctor",
        method: "GET"
    },
  });

var Hospital = fetchFactory.create({
  url: urlBase + "/Hospitals/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "prototype$__findById__doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Hospitals/:id/doctors/:fk",
        method: "GET"
    },
    "prototype$__destroyById__doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Hospitals/:id/doctors/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Hospitals/:id/doctors/:fk",
        method: "PUT"
    },
    "prototype$__link__doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Hospitals/:id/doctors/rel/:fk",
        method: "PUT"
    },
    "prototype$__unlink__doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Hospitals/:id/doctors/rel/:fk",
        method: "DELETE"
    },
    "prototype$__exists__doctors": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Hospitals/:id/doctors/rel/:fk",
        method: "HEAD"
    },
    "prototype$__get__address": {
        url: urlBase + "/Hospitals/:id/address",
        method: "GET"
    },
    "prototype$__create__address": {
        url: urlBase + "/Hospitals/:id/address",
        method: "POST"
    },
    "prototype$__update__address": {
        url: urlBase + "/Hospitals/:id/address",
        method: "PUT"
    },
    "prototype$__destroy__address": {
        url: urlBase + "/Hospitals/:id/address",
        method: "DELETE"
    },
    "prototype$__get__doctors": {
        url: urlBase + "/Hospitals/:id/doctors",
        method: "GET"
    },
    "prototype$__create__doctors": {
        url: urlBase + "/Hospitals/:id/doctors",
        method: "POST"
    },
    "prototype$__delete__doctors": {
        url: urlBase + "/Hospitals/:id/doctors",
        method: "DELETE"
    },
    "prototype$__count__doctors": {
        url: urlBase + "/Hospitals/:id/doctors/count",
        method: "GET"
    },
    "create": {
        url: urlBase + "/Hospitals",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Hospitals",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Hospitals",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Hospitals/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Hospitals/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Hospitals",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Hospitals/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Hospitals/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Hospitals/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Hospitals/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Hospitals/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Hospitals/change-stream",
        method: "POST"
    },
    "::findById::Doctor::hospitals": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/hospitals/:fk",
        method: "GET"
    },
    "::destroyById::Doctor::hospitals": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/hospitals/:fk",
        method: "DELETE"
    },
    "::updateById::Doctor::hospitals": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/hospitals/:fk",
        method: "PUT"
    },
    "::link::Doctor::hospitals": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/hospitals/rel/:fk",
        method: "PUT"
    },
    "::unlink::Doctor::hospitals": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/hospitals/rel/:fk",
        method: "DELETE"
    },
    "::exists::Doctor::hospitals": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Doctors/:id/hospitals/rel/:fk",
        method: "HEAD"
    },
    "::get::Doctor::hospitals": {
        url: urlBase + "/Doctors/:id/hospitals",
        method: "GET"
    },
    "::create::Doctor::hospitals": {
        url: urlBase + "/Doctors/:id/hospitals",
        method: "POST"
    },
    "::createMany::Doctor::hospitals": {
        url: urlBase + "/Doctors/:id/hospitals",
        method: "POST"
    },
    "::delete::Doctor::hospitals": {
        url: urlBase + "/Doctors/:id/hospitals",
        method: "DELETE"
    },
    "::count::Doctor::hospitals": {
        url: urlBase + "/Doctors/:id/hospitals/count",
        method: "GET"
    },
    "::get::Practice::hospital": {
        url: urlBase + "/Practices/:id/hospital",
        method: "GET"
    },
  });

var Patient = fetchFactory.create({
  url: urlBase + "/Patients/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "prototype$__findById__practices": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/practices/:fk",
        method: "GET"
    },
    "prototype$__destroyById__practices": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/practices/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__practices": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/practices/:fk",
        method: "PUT"
    },
    "prototype$__link__practices": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/practices/rel/:fk",
        method: "PUT"
    },
    "prototype$__unlink__practices": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/practices/rel/:fk",
        method: "DELETE"
    },
    "prototype$__exists__practices": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/practices/rel/:fk",
        method: "HEAD"
    },
    "prototype$__findById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/accessTokens/:fk",
        method: "GET"
    },
    "prototype$__destroyById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/accessTokens/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/accessTokens/:fk",
        method: "PUT"
    },
    "prototype$__get__address": {
        url: urlBase + "/Patients/:id/address",
        method: "GET"
    },
    "prototype$__create__address": {
        url: urlBase + "/Patients/:id/address",
        method: "POST"
    },
    "prototype$__update__address": {
        url: urlBase + "/Patients/:id/address",
        method: "PUT"
    },
    "prototype$__destroy__address": {
        url: urlBase + "/Patients/:id/address",
        method: "DELETE"
    },
    "prototype$__get__practices": {
        url: urlBase + "/Patients/:id/practices",
        method: "GET"
    },
    "prototype$__create__practices": {
        url: urlBase + "/Patients/:id/practices",
        method: "POST"
    },
    "prototype$__delete__practices": {
        url: urlBase + "/Patients/:id/practices",
        method: "DELETE"
    },
    "prototype$__count__practices": {
        url: urlBase + "/Patients/:id/practices/count",
        method: "GET"
    },
    "prototype$__get__accessTokens": {
        url: urlBase + "/Patients/:id/accessTokens",
        method: "GET"
    },
    "prototype$__create__accessTokens": {
        url: urlBase + "/Patients/:id/accessTokens",
        method: "POST"
    },
    "prototype$__delete__accessTokens": {
        url: urlBase + "/Patients/:id/accessTokens",
        method: "DELETE"
    },
    "prototype$__count__accessTokens": {
        url: urlBase + "/Patients/:id/accessTokens/count",
        method: "GET"
    },
    "create": {
        url: urlBase + "/Patients",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Patients",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Patients",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Patients/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Patients/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Patients",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Patients/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Patients/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Patients/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Patients/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Patients/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Patients/change-stream",
        method: "POST"
    },
    "login": {
        url: urlBase + "/Patients/login",
        method: "POST"
    },
    "logout": {
        url: urlBase + "/Patients/logout",
        method: "POST"
    },
    "confirm": {
        url: urlBase + "/Patients/confirm",
        method: "GET"
    },
    "resetPassword": {
        url: urlBase + "/Patients/reset",
        method: "POST"
    },
    "::get::Appointment::patient": {
        url: urlBase + "/Appointments/:id/patient",
        method: "GET"
    },
    "::findById::Practice::patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Practices/:id/patients/:fk",
        method: "GET"
    },
    "::destroyById::Practice::patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Practices/:id/patients/:fk",
        method: "DELETE"
    },
    "::updateById::Practice::patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Practices/:id/patients/:fk",
        method: "PUT"
    },
    "::link::Practice::patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Practices/:id/patients/rel/:fk",
        method: "PUT"
    },
    "::unlink::Practice::patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Practices/:id/patients/rel/:fk",
        method: "DELETE"
    },
    "::exists::Practice::patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Practices/:id/patients/rel/:fk",
        method: "HEAD"
    },
    "::get::Practice::patients": {
        url: urlBase + "/Practices/:id/patients",
        method: "GET"
    },
    "::create::Practice::patients": {
        url: urlBase + "/Practices/:id/patients",
        method: "POST"
    },
    "::createMany::Practice::patients": {
        url: urlBase + "/Practices/:id/patients",
        method: "POST"
    },
    "::delete::Practice::patients": {
        url: urlBase + "/Practices/:id/patients",
        method: "DELETE"
    },
    "::count::Practice::patients": {
        url: urlBase + "/Practices/:id/patients/count",
        method: "GET"
    },
  });

var Enum = fetchFactory.create({
  url: urlBase + "/Enums/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "create": {
        url: urlBase + "/Enums",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Enums",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Enums",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Enums/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Enums/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Enums",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Enums/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Enums/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Enums/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Enums/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Enums/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Enums/change-stream",
        method: "POST"
    },
  });

var Receptionist = fetchFactory.create({
  url: urlBase + "/Receptionists/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "prototype$__findById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Receptionists/:id/accessTokens/:fk",
        method: "GET"
    },
    "prototype$__destroyById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Receptionists/:id/accessTokens/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Receptionists/:id/accessTokens/:fk",
        method: "PUT"
    },
    "prototype$__get__accessTokens": {
        url: urlBase + "/Receptionists/:id/accessTokens",
        method: "GET"
    },
    "prototype$__create__accessTokens": {
        url: urlBase + "/Receptionists/:id/accessTokens",
        method: "POST"
    },
    "prototype$__delete__accessTokens": {
        url: urlBase + "/Receptionists/:id/accessTokens",
        method: "DELETE"
    },
    "prototype$__count__accessTokens": {
        url: urlBase + "/Receptionists/:id/accessTokens/count",
        method: "GET"
    },
    "create": {
        url: urlBase + "/Receptionists",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Receptionists",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Receptionists",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Receptionists/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Receptionists/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Receptionists",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Receptionists/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Receptionists/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Receptionists/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Receptionists/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Receptionists/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Receptionists/change-stream",
        method: "POST"
    },
    "login": {
        url: urlBase + "/Receptionists/login",
        method: "POST"
    },
    "logout": {
        url: urlBase + "/Receptionists/logout",
        method: "POST"
    },
    "confirm": {
        url: urlBase + "/Receptionists/confirm",
        method: "GET"
    },
    "resetPassword": {
        url: urlBase + "/Receptionists/reset",
        method: "POST"
    },
  });

var Appointment = fetchFactory.create({
  url: urlBase + "/Appointments/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "prototype$__get__patient": {
        url: urlBase + "/Appointments/:id/patient",
        method: "GET"
    },
    "prototype$__get__practice": {
        url: urlBase + "/Appointments/:id/practice",
        method: "GET"
    },
    "create": {
        url: urlBase + "/Appointments",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Appointments",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Appointments",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Appointments/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Appointments/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Appointments",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Appointments/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Appointments/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Appointments/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Appointments/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Appointments/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Appointments/change-stream",
        method: "POST"
    },
  });

var Setting = fetchFactory.create({
  url: urlBase + "/settings/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "create": {
        url: urlBase + "/settings",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/settings",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/settings",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/settings/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/settings/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/settings",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/settings/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/settings/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/settings/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/settings/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/settings/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/settings/change-stream",
        method: "POST"
    },
  });

var Practice = fetchFactory.create({
  url: urlBase + "/Practices/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "prototype$__get__doctor": {
        url: urlBase + "/Practices/:id/doctor",
        method: "GET"
    },
    "prototype$__get__hospital": {
        url: urlBase + "/Practices/:id/hospital",
        method: "GET"
    },
    "prototype$__findById__patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Practices/:id/patients/:fk",
        method: "GET"
    },
    "prototype$__destroyById__patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Practices/:id/patients/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Practices/:id/patients/:fk",
        method: "PUT"
    },
    "prototype$__link__patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Practices/:id/patients/rel/:fk",
        method: "PUT"
    },
    "prototype$__unlink__patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Practices/:id/patients/rel/:fk",
        method: "DELETE"
    },
    "prototype$__exists__patients": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Practices/:id/patients/rel/:fk",
        method: "HEAD"
    },
    "prototype$__get__address": {
        url: urlBase + "/Practices/:id/address",
        method: "GET"
    },
    "prototype$__create__address": {
        url: urlBase + "/Practices/:id/address",
        method: "POST"
    },
    "prototype$__update__address": {
        url: urlBase + "/Practices/:id/address",
        method: "PUT"
    },
    "prototype$__destroy__address": {
        url: urlBase + "/Practices/:id/address",
        method: "DELETE"
    },
    "prototype$__get__patients": {
        url: urlBase + "/Practices/:id/patients",
        method: "GET"
    },
    "prototype$__create__patients": {
        url: urlBase + "/Practices/:id/patients",
        method: "POST"
    },
    "prototype$__delete__patients": {
        url: urlBase + "/Practices/:id/patients",
        method: "DELETE"
    },
    "prototype$__count__patients": {
        url: urlBase + "/Practices/:id/patients/count",
        method: "GET"
    },
    "create": {
        url: urlBase + "/Practices",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Practices",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Practices",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Practices/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Practices/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Practices",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Practices/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Practices/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Practices/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Practices/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Practices/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Practices/change-stream",
        method: "POST"
    },
    "::findById::Patient::practices": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/practices/:fk",
        method: "GET"
    },
    "::destroyById::Patient::practices": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/practices/:fk",
        method: "DELETE"
    },
    "::updateById::Patient::practices": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/practices/:fk",
        method: "PUT"
    },
    "::link::Patient::practices": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/practices/rel/:fk",
        method: "PUT"
    },
    "::unlink::Patient::practices": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/practices/rel/:fk",
        method: "DELETE"
    },
    "::exists::Patient::practices": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Patients/:id/practices/rel/:fk",
        method: "HEAD"
    },
    "::get::Patient::practices": {
        url: urlBase + "/Patients/:id/practices",
        method: "GET"
    },
    "::create::Patient::practices": {
        url: urlBase + "/Patients/:id/practices",
        method: "POST"
    },
    "::createMany::Patient::practices": {
        url: urlBase + "/Patients/:id/practices",
        method: "POST"
    },
    "::delete::Patient::practices": {
        url: urlBase + "/Patients/:id/practices",
        method: "DELETE"
    },
    "::count::Patient::practices": {
        url: urlBase + "/Patients/:id/practices/count",
        method: "GET"
    },
    "::get::Appointment::practice": {
        url: urlBase + "/Appointments/:id/practice",
        method: "GET"
    },
  });

var Admin = fetchFactory.create({
  url: urlBase + "/Admins/:id",
  interceptors: {
    request: function(request) {
      request.headers[authHeader] = token;
      console.log(request);
      return request;
    }
  },
  }, {
    "prototype$__findById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Admins/:id/accessTokens/:fk",
        method: "GET"
    },
    "prototype$__destroyById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Admins/:id/accessTokens/:fk",
        method: "DELETE"
    },
    "prototype$__updateById__accessTokens": {
      params: {
            'fk': '@fk'
        },
        url: urlBase + "/Admins/:id/accessTokens/:fk",
        method: "PUT"
    },
    "prototype$__get__accessTokens": {
        url: urlBase + "/Admins/:id/accessTokens",
        method: "GET"
    },
    "prototype$__create__accessTokens": {
        url: urlBase + "/Admins/:id/accessTokens",
        method: "POST"
    },
    "prototype$__delete__accessTokens": {
        url: urlBase + "/Admins/:id/accessTokens",
        method: "DELETE"
    },
    "prototype$__count__accessTokens": {
        url: urlBase + "/Admins/:id/accessTokens/count",
        method: "GET"
    },
    "create": {
        url: urlBase + "/Admins",
        method: "POST"
    },
    "createMany": {
        url: urlBase + "/Admins",
        method: "POST"
    },
    "upsert": {
        url: urlBase + "/Admins",
        method: "PUT"
    },
    "exists": {
        url: urlBase + "/Admins/:id/exists",
        method: "GET"
    },
    "findById": {
        url: urlBase + "/Admins/:id",
        method: "GET"
    },
    "find": {
        url: urlBase + "/Admins",
        method: "GET"
    },
    "findOne": {
        url: urlBase + "/Admins/findOne",
        method: "GET"
    },
    "updateAll": {
        url: urlBase + "/Admins/update",
        method: "POST"
    },
    "deleteById": {
        url: urlBase + "/Admins/:id",
        method: "DELETE"
    },
    "count": {
        url: urlBase + "/Admins/count",
        method: "GET"
    },
    "prototype$updateAttributes": {
        url: urlBase + "/Admins/:id",
        method: "PUT"
    },
    "createChangeStream": {
        url: urlBase + "/Admins/change-stream",
        method: "POST"
    },
    "login": {
        url: urlBase + "/Admins/login",
        method: "POST"
    },
    "logout": {
        url: urlBase + "/Admins/logout",
        method: "POST"
    },
    "confirm": {
        url: urlBase + "/Admins/confirm",
        method: "GET"
    },
    "resetPassword": {
        url: urlBase + "/Admins/reset",
        method: "POST"
    },
  });


module.exports = {
  Doctor,
  Hospital,
  Patient,
  Enum,
  Receptionist,
  Appointment,
  Setting,
  Practice,
  Admin,
}
