import {useState} from "react";


export default function Write(){

    const [title, setTitle] = useState('');
    const [userid,setUserid ] = useState('hoteak');
    const [contents,setContents ] = useState('');

    return(
        <main>
            <div id="main">
                <h2>게시판 글작성</h2>
                <form name="write" id="writefrm">

                    <div><label htmlFor="title">제목</label>
                        <input type="text" name="title" id="title"/></div>
                    <div><label htmlFor="uid">작성자</label>
                        <input type="text" name="uid" id="uid"
                               value={userid} readOnly/></div>
                    <div><label htmlFor="contents" className="drgup">본문</label>
                        <textarea name="contents" id="contents"
                                  rows="7" cols="55"></textarea></div>
                    <div><label></label>
                        <button type="button" id="writebtn">입력완료</button>
                        <button type="reset">다시입력</button>
                    </div>

                </form>
            </div>
        </main>

    );
}
