enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  method: METHOD;
  data?: any;
  timeout?: number;
  headers?: Record<string, string>;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;
type HTTPMethod = (url: string, options?: OptionsWithoutMethod) => Promise<XMLHttpRequest>;

function queryStringify(data: Record<string, unknown>): string {
  if (typeof data !== 'object') {
      throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
      return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

export default class HTTPTransport {
  get: HTTPMethod = (url, options = {}) => {
      return this.request(url, {...options, method: METHOD.GET}, options.timeout);
  }

  post: HTTPMethod = (url, options = {}) => {
      return this.request(url, {...options, method: METHOD.POST}, options.timeout);
  };

  put: HTTPMethod = (url, options = {}) => {
      return this.request(url, {...options, method: METHOD.PUT}, options.timeout);
  };

  delete: HTTPMethod = (url, options = {}) => {
      return this.request(url, {...options, method: METHOD.DELETE}, options.timeout);
  };

  request(url: string, options: Options = { method: METHOD.GET }, timeout = 5000): Promise<XMLHttpRequest> {
    const {headers = {}, method, data} = options;

    return new Promise((resolve, reject) => {
      if (!method) {
          reject('No method');
          return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHOD.GET;

      xhr.open(
          method,
          isGet && !!data
              ? `${url}${queryStringify(data)}`
              : url,
      );

      Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
          resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = () =>
          reject(new Error('время вышло!'));

      if (isGet || !data) {
          xhr.send();
      } else {
          xhr.send(JSON.stringify(data));
      }
    });
  }
}
