import httpStatus from 'http-status';

export const serverHandler = (req, res) => {
    res.status(httpStatus.OK).send("Page is working")
}