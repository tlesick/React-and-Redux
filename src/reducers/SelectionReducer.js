// always return a value that is not undefined
// otherwise redux believes there is a mistake
// so instead return a null statement 



// the state = null means if state comes back undefined
// automatically make it null like a default
// which means continue on i dont have a selected library
export default (state = null, action) =>  {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
