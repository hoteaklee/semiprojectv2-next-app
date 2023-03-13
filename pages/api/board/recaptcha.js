import axios from "axios";

export default async (req,res) => {
    let params = '?secret=' + process.env.SECRET_KEY;
    params += '&response=' + req.query.response;

    let url = 'https://www.google.com/recaptcha/api/siteverify';
    url = url + params;

    const data = axios.get(url).then(data => data.data);
    console.log(await data)

    res.status(200).json((await data));
}