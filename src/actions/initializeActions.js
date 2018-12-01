"use strict";

var Dispatcher = require("../dispatcher/appDispatcher.js");
var AuthorApi = require("../api/authorApi.js");
var ActionTypes = require("../constants/actionTypes.js");

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    }
};

module.exports = InitializeActions;