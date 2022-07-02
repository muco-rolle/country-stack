import { json } from "@remix-run/node";

export const BadRequest = <T>(data: T) => json<T>(data, { status: 400 });
export const Ok = <T>(data: T) => json<T>(data, { status: 200 });
export const Created = <T>(data: T) => json<T>(data, { status: 201 });
export const ServerError = <T>(data: T) => json<T>(data, { status: 500 });
export const UnAuthorized = <T>(data: T) => json<T>(data, { status: 401 });
