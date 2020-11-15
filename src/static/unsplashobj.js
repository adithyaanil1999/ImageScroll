// ES Modules syntax
import Unsplash, { toJson } from 'unsplash-js';
const APP_ACCESS_KEY = 'FPkmE2Kf0FYr7etEUgRbzsSm2vVfYeDZtwuNz19EXg0';


const unsplash = new Unsplash({
  accessKey: APP_ACCESS_KEY,
});

export default unsplash;