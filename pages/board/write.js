import {useState} from "react";
import axios from "axios";


const check_captcha = async (response) => {
    let url = 'http://localhost:3000/api/board/recaptcha?response=' + response
    const data = axios.get(url).then(data => data.data);
    console.log((await data).success);

    return (await data).success;
};
const process_write = async (data) => {
    const cnt = fetch('/api/board/write', {
        method: 'POST', mode: 'cors', //cors 서버랑 클라이언트 주소가 같다는 뜻
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json());

    return (await cnt).cnt;
};
export default function Write(){

    const [title, setTitle] = useState('');
    const [userid,setUserid ] = useState('hoteak');
    const [contents,setContents ] = useState('');

    const handlewrite = async () => {
        if (grecaptcha.getResponse() && check_captcha(grecaptcha.getResponse())) {
            // 글쓰기 작업 진행
            const data = {title: title, userid: userid, contents: contents};
            if (await process_write(data) > 0) {
                location.href = '/board/list';
            }
        }
        //alert(recaptcha);
    };
    const handleTitle = (e) => { setTitle(e.target.value) };
    const handleContents = (e) => { setContents(e.target.value) };
    return(
        <main>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <div id="main">
                <h2>게시판 글작성</h2>
                <form name="write" id="writefrm">

                    <div><label htmlFor="title">제목</label>
                        <input type="text" name="title" id="title"
                        onChange={handleTitle}/></div>
                    <div><label htmlFor="uid">작성자</label>
                        <input type="text" name="uid" id="uid"
                               value={userid} readOnly/></div>
                    <div><label htmlFor="contents" className="drgup">본문</label>
                        <textarea name="contents" id="contents" onChange={handleContents}
                                  rows="7" cols="55"></textarea></div>

                    <div><label></label>
                        <div className="g-recaptcha cap" data-sitekey="6Lc_4OskAAAAAB0qqZMfQQMY6JZLNjePv1nSMSGy"></div>
                    </div>

                    <div><label></label>
                        <button type="button" id="writebtn" onClick={handlewrite}>입력완료</button>
                        <button type="reset">다시입력</button>
                    </div>

                </form>
            </div>
        </main>

    );
}
