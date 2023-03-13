import axios from "axios";

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

module.exports = { check_captcha, handleInput, process_submit };