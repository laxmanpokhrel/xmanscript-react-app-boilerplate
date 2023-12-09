import languageSlice from './languageSlice';
import templateSlice from './templateSlice/templateSlice';

export default { templateState: templateSlice.reducer, language: languageSlice.reducer };
