const Template = require('./../Model/templateModel');



exports.createTemplate = async (req, res) => {
    try{
        const newTemplate = await Template.create(req.body).then();
        console.log(newTemplate);
        res.status(201).json({
            status: 'success',
            result: newTemplate.length,
            data: {
                newTemplate
            }
        });
    }catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};