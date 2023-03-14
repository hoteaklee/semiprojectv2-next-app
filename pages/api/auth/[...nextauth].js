// npm install next-auth@3.29.10 --save-dev
// 경로 : /pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials'

export default NextAuth({
    providers: [
        Credentials({
            name: 'email-passwd',
            credentials: {
                email: { label: "이메일", type: "email"},
                passwd: {  label: "비밀번호", type: "password" }
            },// 로그인 폼 정의
            async authorize(credentials, req) {
                // 아무거나 입력해도 그냥 로그인 됨
                console.log('auth login - ',credentials)
              return credentials;
            }
        })
    ]
});