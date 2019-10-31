import { CaseModel } from './model';

export class CaseStudyOptions {
    movieList: CaseModel[];
    constructor() { }

    ascendic(movieList): any {
        movieList = movieList.sort((n1, n2) => {
            if (n1.rating < n2.rating) {
                return 1;
            }
            if (n1.rating > n2.rating) {
                return -1;
            }
            return 0;
        });
    }

    descendic(movieList): any {
        movieList = movieList.sort((n1, n2) => {
            if (n1.rating > n2.rating) {
                return 1;
            }
            if (n1.rating < n2.rating) {
                return -1;
            }
            return 0;
        });
    }
}