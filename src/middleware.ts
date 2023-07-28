export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        "/protected",
        "/((?!_next/static|favicon.ico|register|login|api).*)",
    ],
};