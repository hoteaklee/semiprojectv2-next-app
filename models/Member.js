import mariadb from "./MariaDB";

let membersql = {
    insertsql : ' insert into member (userid, passwd, name, email) ' +
        '  values ( ?, ?, ?, ?) ',

    loginsql : ' select count(userid) cnt from member where userid = ? and passwd = ? ',

    selectOne: ` select mno, userid, name, email, `+
                    ` date_format(regdate, "%Y-%m-%d %H:%i:%s") regdate ` +
                    ` from member where userid = ? `
}

class Member{
    // 생성자 정의 - 변수 초기화
    // 즉, 매개변수로 전달된 값을 클래스 멤버변수에 대입함
    constructor(userid, passwd, name, email) {
        this.userid = userid;
        this.passwd = passwd;
        this.name = name;
        this.email = email;
    }
    // 회원 정보 저장
    async insert(){
        // 데이터베이스 처리 - sungjuk 테이블에 insert
        let conn = null;
        let params = [this.userid, this.passwd, this.name, this.email];
        let result = -1;

        try {
            conn = await mariadb.makeConn()
            result = await conn.query(membersql.insertsql, params);
            await conn.commit();
            if (result.affectedRows > 0) result = result.affectedRows;
        } catch (ex) {console.log(ex);}
        finally { await mariadb.closeConn(conn);
        }
        return result
    }

    async login (uid, passwd) {     // 로그인 처리
        let conn = null;
        let params = [uid, passwd];
        let result= -1;

        try { conn = await mariadb.makeConn();
            result = await conn.query(membersql.loginsql, params);

        } catch (e){ console.log(e); }
        finally { await mariadb.closeConn(); }
        return result;
    }

    async selectOne (uid) {     // 아이디로 겸색된 회원의 모든 정보 조회
        let conn = null;
        let params = [uid];
        let result = -1;

        try { conn = await mariadb.makeConn();
            result = await conn.query(membersql.selectOne, params);

        } catch (e){ console.log(e); }
        finally { await mariadb.closeConn(); }
        return result;
    }
};

module.exports = Member;