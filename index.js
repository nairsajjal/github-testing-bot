//importing jsonfile package
const jsonfile = require('jsonfile');
//import moment for date and timestamp
const moment = require('moment');
//adding simpleGit
const simpleGit = require('simple-git');
const FILE_PATH  = './data.json';//adding json file path

const makeCommit = (x,y) => {
    const DATE = moment().subtract(1,'y').add(1,'d')
            .add(x,'w').add(y,'d').format(); //date obj
    const data ={   //data obj
        date: DATE
    }
    jsonfile.writeFile(FILE_PATH, data, ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}).push();
    });
};





makeCommit(25,46);
makeCommit(21,46);
