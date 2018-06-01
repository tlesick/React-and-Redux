export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};


// an object with a type property is an action
// the action is wrapped by a function called a action creator
// the returned action creator will be dispatched 



// if you want to export many things you have to use
// only the word export not default
