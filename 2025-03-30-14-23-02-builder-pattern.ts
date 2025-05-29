import { HTTPRequest } from "./2025-03-30-14-23-01-builder-pattern";

class RequestBuilder {
  private url: string = "";
  private method: string = "GET";
  private headers: Record<string, string> = {};
  private body: any = null;
  private timeout: number = 5000;
  private retries: number = 0;

  setURL(url: string): RequestBuilder {
    this.url = url;
    return this;
  }

  setMethod(method: string): RequestBuilder {
    this.method = method;
    return this;
  }

  addHeader(key: string, value: string): RequestBuilder {
    this.headers[key] = value;
    return this;
  }

  setBody(body: any): RequestBuilder {
    this.body = body;
    return this;
  }

  setTimeout(timeout: number): RequestBuilder {
    this.timeout = timeout;
    return this;
  }

  setRetries(retries: number): RequestBuilder {
    this.retries = retries;
    return this;
  }

  build(): HTTPRequest {
    return new HTTPRequest(
      this.url,
      this.method,
      this.headers,
      {}, // queryParams
      this.body,
      this.timeout,
      this.retries,
      true, // validateStatus,
      undefined, // cache
      false // followRedirect
    );
  }
}

const requestViaBuilder: HTTPRequest = new RequestBuilder()
  .setURL("https://api.example.com")
  .setMethod("POST")
  .addHeader("Authorization", "Bearer token")
  .setTimeout(30000)
  .setRetries(3)
  .setBody({ name: "John" })
  .build();
