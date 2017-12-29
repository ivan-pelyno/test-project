export const total = (state) => state.total;

export const errorMessage = (state) => (step) => {
    switch (step) {
        case 1:
            return { step: step, status: state.results.picture != null ? 'good' : 'error' }
            break;
        case 2:
            return { step: step, status: state.results.frame != null ? 'good' : 'error' }
            break;
        case 3:
            return { step: step, status: state.results.form.title != null && state.results.form.title != "" && state.results.form.signature != null && state.results.form.signature != "" && state.results.form.date != null && state.results.form.date != "" ? 'good' : 'error' }
            break;
        case 4:
            return { step: step, status: state.results.mark.length >= 2 ? 'good' : 'error' }
            break;
        default:
            return 'error';
            break;
    }
}