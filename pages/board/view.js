import axios from "axios";

export async function getServerSideProps(ctx) {
    let bno = ctx.query.bno;

    const url = `http://localhost:3000/api/board/view?bno=${bno}`;
    const res = await axios.get(url);
    const board = await res.data[0];
    console.log(board);
    
    return{ props: {board}}
}

export default function View({board}){
    const newOne = () => { location.href = '/board/write';};
    const go2list = () => {location.href = '/board/list'; };
    const upsateOne = () => {location.href = `/board/update?bno=${board.bno}`; };
    const deleteOne = () => {
        if (confirm('정말 삭제하시겠습니까??'))
        location.href = `/api/board/delete?bno=${board.bno}`;};
    return(

        <main>
            <h2>게시판 본문글</h2>
            <div id="view">
            <div><label>제목</label>
            <span>{board.title}</span></div>

            <div><label>작성자</label>
            <span>{board.userid}</span></div>

            <div><label>작성일</label>
            <span>{board.regdate}</span></div>

            <div><label className="drgup">본 문</label>
            <span id="contents">{board.contents}</span></div>

            <input type="hidden" id="bno" value={board.bno}/>
            <input type="hidden" id="uid" value={board.userid}/>

            <div><label></label>

            <button type="button" onClick={newOne}>새글쓰기</button>
            <button type="button"  onClick={go2list}>목록으로</button>

            <button type="button" onClick={upsateOne}>수정하기</button>
            <button type="button" onClick={deleteOne}>삭제하기</button>

            </div>
            </div>
        </main>

    );
}
