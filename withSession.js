import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "./session-conf";
import { withIronSession } from 'iron-session';

export function withSessionRoute(handler) {
    return withIronSessionApiRoute(handler, ironOptions);
}

export function withSessionSsr(handler) {
    return withIronSessionSsr(handler, ironOptions);
}

export function withSession(handler) {
    return withIronSession(handler, ironOptions);
}
