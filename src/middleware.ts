import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/newspaper/1", request.url));
}

export const config = {
  matcher: "/edition/1/1",
};
