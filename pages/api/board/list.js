import Board from '/models/Board';


export default async (req, res) => {
    let [cpg, ftype, fkey] = [req.query.cpg, req.query.ftype, req.query.fkey];
    let stnum = (cpg -1)* 25; // 지정한 페이지 범위 시작값 계산
    // oracle: (cpg -1)* 25 +1
    try {
        const rowdata = new Board().select(stnum, ftype, fkey).then((result) => result);
        res.status(200).json(await rowdata);
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
}