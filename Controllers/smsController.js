const Message = require('./../Model/messageModel');
const {SendMessage} = require('../helpers/SMS');


exports.SendText = async(req, res, next) => {
    let body = req.body
    numberArray = body.to
    splitNumbers = numberArray.split(' ')
    if(splitNumbers.length > 1){
        for(const element of splitNumbers){
            details = {
                to: element,
                from: body.from,
                message: body.message
            }
            try{
                SendMessage(details.from, details.to, details.message)
                await Message.create(details).then(message => {
                // TODO document why this arrow function is empty
                    console.log(message)
                }).catch(error => {
                    try{
                        console.log(e)
                    } catch (e) {
                        return res
                        .status(400)
                        .redirect(req.headers.referer);
                    }
                })
            } catch (e) {
                return res.status(400).redirect(req.headers.referer)
            }
            
        }

        return res.status(200).redirect(req.headers.referer)
    }else{
        details = {
            message: body.message,
            to: body.to,
            from: body.from
        }
        try{
            SendMessage(details.from, details.to, details.message)
            await Message.create(details).then(message => {
                res.status(200).redirect(req.headers.referer)
            }).catch(error => {
                try{
                    return res
                        .status(400)
                        .redirect(req.headers.referer);
                } catch (e) {
                    return res
                    .status(400)
                    .redirect(req.headers.referer);
                }
            })
        } catch (e) {
            return res
                    .status(400)
                    .redirect(req.headers.referer);
                    

        }
    }
    
}


exports.viewMessage = async(req, res, next) => {
    let body = req.body
    await Message.findById(req.params.id).then(async message => {
        if(message !== null){
            return res.status(200).render('edit', {
                message
            });
        }else{
            return res.status(400).redirect(req.headers.referer);

        }
    }).catch(error => {
            try{
                return res
                    .status(400)
                    .redirect(req.headers.referer);
            } catch (e) {
                return res
                .status(400)
                .redirect(req.headers.referer);
            }
        })

    
}

exports.ResendMessage = async(req, res, next) => {
    let body = req.body
    console.log(req.body.messageId)
    await Message.findById(req.body.messageId).then(async message => {
        if(message !== null){
            console.log(message)
            details = {
                message: message.message,
                to: message.to,
                from: message.from
            }
            try{
                SendMessage(details.from, details.to, details.message)
                await Message.create(details).then(message => {
                    res.status(200).redirect(req.headers.referer)
                }).catch(error => {
                    try{
                        return res
                            .status(400)
                            .redirect(req.headers.referer);
                    } catch (e) {
                        return res
                        .status(400)
                        .redirect(req.headers.referer);
                    }
                })
            } catch (e) {
                return res
                        .status(400)
                        .redirect(req.headers.referer);
            }
        }else{
            res.status(400).redirect(req.headers.referer);

        }
    }).catch(error => {
            try{
                return res
                    .status(400)
                    .redirect(req.headers.referer);
            } catch (e) {
                return res
                .status(400)
                .redirect(req.headers.referer);
            }
        })
}


