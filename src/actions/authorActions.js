"use strict";

var Dispatcher = require("../dispatcher/appDispatcher.js");
var AuthorApi = require("../api/authorApi.js");
var ActionTypes = require("../constants/actionTypes.js");

var AuthorActions = {
    createAuthor: function(author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: function(author) {
        var updatedAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    }
};

module.exports = AuthorActions;