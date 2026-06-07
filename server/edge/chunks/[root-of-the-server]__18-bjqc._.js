(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__18-bjqc._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/server/auth/jwt.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signSession",
    ()=>signSession,
    "verifySession",
    ()=>verifySession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [middleware-edge] (ecmascript)");
;
function getSecret() {
    const raw = process.env.AUTH_SECRET;
    if (!raw) throw new Error("缺少 AUTH_SECRET");
    return new TextEncoder().encode(raw);
}
async function signSession(claims, expiresIn = "7d") {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SignJWT"]({
        role: claims.role
    }).setProtectedHeader({
        alg: "HS256"
    }).setSubject(claims.sub).setIssuedAt().setExpirationTime(expiresIn).sign(getSecret());
}
async function verifySession(token) {
    const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["jwtVerify"])(token, getSecret());
    const sub = payload.sub;
    const role = payload.role;
    if (typeof sub !== "string") throw new Error("会话无效");
    if (role !== "student" && role !== "teacher") throw new Error("会话无效");
    return {
        sub,
        role
    };
}
}),
"[project]/src/server/auth/constants.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SESSION_COOKIE",
    ()=>SESSION_COOKIE
]);
const SESSION_COOKIE = "conic_session";
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$auth$2f$jwt$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/auth/jwt.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$auth$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/auth/constants.ts [middleware-edge] (ecmascript)");
;
;
;
async function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$auth$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SESSION_COOKIE"])?.value ?? null;
    if (!token) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", req.url));
    try {
        const claims = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$auth$2f$jwt$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifySession"])(token);
        if (pathname.startsWith("/student") && claims.role !== "student") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/teacher", req.url));
        }
        if (pathname.startsWith("/teacher") && claims.role !== "teacher") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/student", req.url));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", req.url));
    }
}
const config = {
    matcher: [
        "/student/:path*",
        "/teacher/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__18-bjqc._.js.map