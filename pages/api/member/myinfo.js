import Member from "../../../models/Member";

export default async (req,res) => {
        const { userid } = req.query;

    try {
        const member= new Member().selectOne(userid)
            .then(result => result);
        console.log('api/myinfo - ', await member);

        res.status(200).json(await member);
    } catch (err){
        res.status(500).json(err);
    }
}