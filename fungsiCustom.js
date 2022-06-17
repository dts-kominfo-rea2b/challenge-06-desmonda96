// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
let files = [file1, file2, file3];
function bacaData(fnCallback){
            let save = [];          
            fs.readFile(file1,{encoding: 'utf8'},(err, data) => {
                if (err) fncallback(err);
                const newWord = change(data);
                save.push(newWord);

                            fs.readFile(file2,{encoding: 'utf8'},(err, data) => {
                                if (err) fncallback(err);                               
                                const newWord = change(data);
                                save.push(newWord);
                                
                                            fs.readFile(file3,{encoding: 'utf8'},(err, data) => {
                                                if (err) fncallback(err);                
                                                const newWord = change(data);
                                                save.push(newWord);                          
                                                fnCallback(null,save);
                })
              })
            })               
          }

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
