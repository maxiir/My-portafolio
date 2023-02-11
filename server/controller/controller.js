const controller = {};
// import path from 'path'

controller.index = (req,res) =>{
    // res.sendFile(path.join(__dirname,'../../client/dist/index.html'))
    res.send('server running...')
}

export default controller;