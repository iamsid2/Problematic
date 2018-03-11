import 'whatwg-fetch';

class HttpService{
  getProblems = () => {
    var promise = new Promise((resolve, reject) => {
      fetch('http://localhost:4000/problem')
      .then(response => {
        resolve(response.json());
      });
    });

    return promise;
  }
}

export default HttpService;
