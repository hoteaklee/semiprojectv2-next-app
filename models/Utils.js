import axios from "axios";
import bcrypt from "bcryptjs";

const check_captcha = async (response) => {
    let url = '/api/board/recaptcha?response=' + response;
    const data = axios.get(url).then(data => data.data);
    console.log((await data).success);

    return (await data).success;
};
const handleInput = (setInput, e) => {
    setInput(e.target.value);
};

const process_submit = async (url,data) => {
    const cnt = fetch(url , {
        method: 'POST', mode: 'cors', //cors 서버랑 클라이언트 주소가 같다는 뜻
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json());

    return (await cnt).cnt;
};

// 압호 임력시 해시함수에 의해 해시코드로 변환된 암호 생성
const hashPassword = async (passwd) => {
    let saltRounds = 10;
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(passwd, salt);
        console.log(' hashpwd- ',hash,passwd, salt);

        return hash;
    } catch (err){
        console.log(err);
    }
}

// 암호 비교 함수 - 암호와 해시화된 암호를 비교
const comparePasswd = async (passwd, hashpwd) => {
    try {
        const result = await bcrypt.compare(passwd, hashpwd);
        return result;
    } catch (err){
        console.log(err);
    }
}

module.exports = { check_captcha, handleInput, process_submit,
                    hashPassword, comparePasswd };