export type Method = 'post' | 'put' | 'delete' | 'get' | 'patch';

export type EndpointHeaders = {
  attr: string;
  value: string;
  render?: boolean;
};

export type EndpointTarget = {
  url: string;
  method: Method;
  render?: boolean;
  headers: EndpointHeaders[];
};
