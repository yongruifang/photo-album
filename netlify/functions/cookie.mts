import { Context } from "@netlify/functions"
import { Cookie } from '@netlify/node-cookies';

export default async (req: Request, context: Context) => {
    if (context.cookies.get("chocolate")) {
        return new Response("Sorry, no more cookies for you")
    }
    const cookie: Cookie = { name: "chocolate", value: "yummy" }
    context.cookies.set(cookie)
    return new Response("Here's a chocolate cookie! 🍪")
}