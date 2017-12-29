export const changePicture = (state, obj) => {
    state.results.picture = obj;
}
export const changeMark = (state, array) => {
    state.results.mark = array;
}
export const changeFrame = (state, obj) => {
    state.results.frame = obj;
    state.total = obj.cost
}
export const changeFonts = (state, obj) => {
    state.results.form.font = obj;
}