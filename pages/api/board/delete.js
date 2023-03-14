import Board from "../../../models/Board";

export default async (req,res) => {
    const {bno}= req.query;

    try {
         new Board().delete(bno).then(result=>result);

        //res.status(200).json({'cnt':await cnt});
        res.redirect(301, '/board/list');
    } catch (err){
        res.status(500).json(err);
    }
}
