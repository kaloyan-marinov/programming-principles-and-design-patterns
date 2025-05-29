export class HTTPRequest {
  constructor(
    public url: string,
    public method: string,
    public headers: Record<string, string>,
    public queryParams: Record<string, any>,
    public body: any,
    public timeout: number,
    public retries: number,
    public validateStatus: boolean,
    public cache: boolean | undefined,
    public followRedirect: boolean
  ) {}
}

const request = new HTTPRequest(
  "https://api.example.com",
  "POST",
  { authorization: " Bearer token" },
  { userId: 123 },
  { name: "John" },
  30000,
  3,
  true,
  undefined,
  false
);
