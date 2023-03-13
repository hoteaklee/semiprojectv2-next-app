import Board from "../../../models/Member";

export default async (req,res) => {
    const {title, userid, contents} = req.body;
    console.log(title, userid, contents);

    try {
        const cnt = Board.newOne(title,userid,contents).insert()
            .then(result=>result);
        //new Board(null,title,userid,null,contents,null).insert

        console.log(await cnt);
        res.status(200).json({cnt:await cnt});
    } catch (err){
        res.status(500).json(err);
    }
}