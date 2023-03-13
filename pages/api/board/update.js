import Board from "../../../models/Board";

export default async (req,res) => {
    const {bno, title, contents} = req.body;
    //console.log(bno, title, contents);

    try {
        const cnt = Board.modifyOne(bno,title,contents).update().then(result=>result);
       //const cnt = new Board(null,title,userid,null,contents,null).update

        console.log(await cnt);
        res.status(200).json({cnt:await cnt});
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
}