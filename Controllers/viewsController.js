const Message = require('../Model/messageModel');
const Template = require('../Model/templateModel');


exports.getCompose = async (req, res) => {

    res.status(200).render('compose');
}

exports.getRecords = async (req, res) => {
    const histories = await Message.find();
    res.status(200).render('record', {
        histories
    });
}

exports.getIndex = async (req, res) => {

    res.status(200).render('index');
}

exports.getContact = async (req, res) => {

    res.status(200).render('contact');
}

exports.getTemplate = async (req, res) => {

    const template = await Template.find();
    res.status(200).render('template', {
        template
    });
}
