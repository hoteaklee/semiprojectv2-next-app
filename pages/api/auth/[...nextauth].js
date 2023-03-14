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
                //입력한 인증 정보 가져옴
                const email =credentials.email;
                const passwd =credentials.passwd;

                // 인증에 성공해야만 로그인 허용
                if (email === 'asd123@987xyz.com' & passwd=== '987xyz')
                //console.log('auth login - ',credentials)
              return credentials;
            }
        })
    ]
});