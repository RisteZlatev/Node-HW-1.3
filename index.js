//so callbacks
// const {readFile, writeFile, write} = require('fs');

// readFile('./content/first.txt', 'utf-8', (err, result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
    
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err,result)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         const second = result;
//         writeFile('./content/result.txt',
//              `Eve go rezultatot : ${first}, ${second}`,
//             (err, result)=>{
//                 if(err){
//                     console.log(err);
//                     return;
//                 }
//                 console.log(result);
//             })
//     })
// })

//so async i await
// const {readFile, writeFile, write} = require('fs').promises;
// async function kombinirajFajlovi() {
//     try {
//         const first = await readFile('./content/first.txt', 'utf8');
//         const second = await readFile('./content/second.txt', 'utf8');

//         await writeFile('./content/result.txt', `Eve go rezultatot: ${first}, ${second}`);
//         console.log("Operacijata e uspesna");
//     }
//     catch(err){
//         console.log(err);
//     };
// };

// kombinirajFajlovi();



//fs open

// const fs = require('fs');

// fs.open('./content/open.txt', 'r', (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Zacuvani promeni");
//     fs.readFile('./content/open.txt','utf8', (err, result)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         const text = result;
//         fs.writeFile('./content/copy-of-open.txt', text, (err)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log("Uspesno kopiranje na fajlot");
//         })
//     })
// })


//so user input, readline modul

// const fs = require('fs');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question('Enter the text to write into the file: ', (userInput) => {
//   fs.writeFile('./content/open.txt', userInput, (err) => {
//     if (err) {
//       console.error('Error writing to the file:', err);
//     } else {
//       console.log('Text written to file successfully.');

//       fs.readFile('./content/open.txt', 'utf8', (err, result) => {
//         if (err) {
//           console.error('Error reading the file:', err);
//           return;
//         }

//         fs.writeFile('./content/copy-of-open.txt', result, (err) => {
//           if (err) {
//             console.error('Error copying the file:', err);
//             return;
//           }
//           console.log('File copied successfully!');
//         });
//       });
//     }
//     rl.close();
//   });
// });


//rename i unlink

// const ime = "Nov-naslov";

// const fs = require('fs').promises;

// async function preimenuvajIzbrisi(){
//     try{
//         await fs.rename('./content/ime.txt',`./content/${ime}.txt`);
//         console.log("Fajlot e preimenuvan");

//         await fs.unlink(`./content/${ime}.txt`);
//         console.log("Fajlot e izbrisan");
//     }catch(err){
//         console.log(err);
//     }
// }

// preimenuvajIzbrisi();

//append
// const fs = require('fs').promises;
// async function dodadi(){
//     try{
//         const tekstZaDodavanje =  await fs.readFile('./content/open.txt','utf8');

//         await fs.appendFile('./content/copy-of-open.txt',tekstZaDodavanje);
//         console.log("Uspesno dodaden tekst");
//     }catch(err){
//         console.log(err);
//     };
// };


// dodadi();

